<script>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import Delete from '@/components/Delete.vue'; 
import EditButton from '@/components/Edit.vue'; 

export default {
  components: {
    Delete,
    EditButton, 
  },
  setup() {
    const store = useProductStore();
    const filteredProducts = ref([]);
    const mensaje = ref('');

    const fetchProducts = async () => {
      await store.loadProducts();
      filteredProducts.value = store.products;
    };

    onMounted(fetchProducts);

    const handleProductDeleted = (id) => {
      filteredProducts.value = filteredProducts.value.filter(product => product.id !== id);
      mensaje.value = 'Producto eliminado exitosamente!';
    };

    const handleProductEdited = (id) => {
      mensaje.value = 'Producto editado exitosamente!';
      fetchProducts(); 
    };

    return {
      filteredProducts,
      handleProductDeleted,
      handleProductEdited, 
      mensaje,
    };
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Lista de Productos</h2>

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
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id" class="table-row">
            <td>{{ product.nombre }}</td>
            <td>{{ product.precio.toFixed(2) }} €</td>
            <td>{{ product.descripcion }}</td>
            <td>{{ product.categoria }}</td>
            <td>{{ product.subcategoria }}</td>
            <td>{{ product.pasillo }}</td>
            <td>{{ product.estanteria }}</td>
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

    <div v-if="mensaje" class="alert alert-info">{{ mensaje }}</div>
  </div>
</template>

<style scoped>
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
