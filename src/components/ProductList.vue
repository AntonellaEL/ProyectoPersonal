<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useProductStore } from '@/stores/useProductStore';
import Delete from '@/components/Delete.vue';
import EditButton from '@/components/Edit.vue';
import ImageUploadButton from '@/components/ImageUploadButton.vue'; 

export default {
  components: {
    Delete,
    EditButton,
    ImageUploadButton,
  },setup() {
  const store = useProductStore();
  const filteredProducts = ref([]);
  const mensaje = ref('');
  const selectedCategory = ref('');
  const selectedSubcategory = ref('');
  
  const currentPage = ref(1);
  const itemsPerPage = 15;

  const fetchProducts = async () => {
    await store.loadProducts();
    filteredProducts.value = store.products;
  };

  const uniqueCategories = computed(() => {
    return [...new Set(store.products.map((product) => product.categoria))];
  });

  const filteredSubcategories = computed(() => {
    if (!selectedCategory.value) return [];
    return [
      ...new Set(
        store.products
          .filter((product) => product.categoria === selectedCategory.value)
          .map((product) => product.subcategoria)
      ),
    ];
  });

  const filterProducts = () => {
    if (!selectedCategory.value) {
      filteredProducts.value = store.products;
    } else if (!selectedSubcategory.value) {
      filteredProducts.value = store.products.filter(
        (product) => product.categoria === selectedCategory.value
      );
    } else {
      filteredProducts.value = store.products.filter(
        (product) =>
          product.categoria === selectedCategory.value &&
          product.subcategoria === selectedSubcategory.value
      );
    }
    currentPage.value = 1; 
  };

  watch([selectedCategory, selectedSubcategory], filterProducts);

  onMounted(fetchProducts);

  const clearMessage = () => {
    mensaje.value = '';
  };

  const handleProductDeleted = (id) => {
    filteredProducts.value = filteredProducts.value.filter(product => product.id !== id);
    mensaje.value = 'Producto eliminado exitosamente!';
    setTimeout(clearMessage, 5000);
  };

  const handleProductEdited = (id) => {
    mensaje.value = 'Producto editado exitosamente!';
    fetchProducts();
    setTimeout(clearMessage, 5000);
  };

  const handleImageChanged = async () => {
    mensaje.value = 'Imagen actualizada correctamente!';
    await fetchProducts(); 
    setTimeout(clearMessage, 5000);
  };

  // Paginación
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredProducts.value.slice(start, start + itemsPerPage);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage);
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  return {
    filteredProducts,
    selectedCategory,
    selectedSubcategory,
    uniqueCategories,
    filteredSubcategories,
    handleProductDeleted,
    handleProductEdited,
    handleImageChanged,
    mensaje,
    paginatedProducts, 
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  };
}
}
</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Lista de Productos</h2>

    <div class="row mb-3">
      <div class="col-12 col-md-6">
        <label for="categorySelect">Selecciona una Categoría:</label>
        <select
          id="categorySelect"
          v-model="selectedCategory"
          @change="filterProducts"
          class="form-control"
        >
          <option value="">Todas las Categorías</option>
          <option v-for="category in uniqueCategories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="col-12 col-md-6" v-if="filteredSubcategories.length > 0">
        <label for="subcategorySelect">Selecciona una Subcategoría:</label>
        <select
          id="subcategorySelect"
          v-model="selectedSubcategory"
          @change="filterProducts"
          class="form-control"
        >
          <option value="">Todas las Subcategorías</option>
          <option
            v-for="subcategory in filteredSubcategories"
            :key="subcategory"
            :value="subcategory"
          >
            {{ subcategory }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover mt-4">
        <thead class="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Subcategoría</th>
            <th>Pasillo</th>
            <th>Estantería</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in paginatedProducts" :key="product.id" class="table-row">
            <td>{{ product.nombre }}</td>
            <td>{{ product.precio.toFixed(2) }} €</td>
            <td>{{ product.descripcion }}</td>
            <td>{{ product.categoria }}</td>
            <td>{{ product.subcategoria }}</td>
            <td>{{ product.pasillo }}</td>
            <td>{{ product.estanteria }}</td>
            <td>
              <img :src="product.img" alt="Imagen del producto" width="50" height="50" />
              <ImageUploadButton :productId="product.id" @imagen-cambiada="handleImageChanged" />
            </td>
            <td>
              <EditButton :productId="product.id" @producto-editado="handleProductEdited" />
            </td>
            <td>
              <Delete :productId="product.id" @producto-eliminado="handleProductDeleted" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination-controls">
      <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
    </div>
  </div>
</template>

<style scoped>
.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-controls button {
  margin: 0 10px;
}

.table {
  margin-top: 20px;
}

.table-responsive {
  overflow-x: auto;
}

.table-row:hover {
  background-color: #f8f9fa; 
}

.thead-dark th {
  background-color: #343a40; 
  color: white; 
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
}

@media (max-width: 576px) {
  .table {
    font-size: 14px;
  }

  .form-control {
    margin-bottom: 10px;
  }
}
</style>
