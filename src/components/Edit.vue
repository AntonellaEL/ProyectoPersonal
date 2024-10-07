<script>
import { getProductById, updateProduct } from '../core/api/product/productRepository';

export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      producto: {
        nombre: '',
        precio: 0,
        descripcion: '',
        categoria: '',
        subcategoria: '',
        pasillo: '',
        estanteria: ''
      },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.loadProductData(); 
    },
    closeModal() {
      this.showModal = false;
    },
    async loadProductData() {
      try {
        const productData = await getProductById(this.productId);
        this.producto = productData; 
      } catch (error) {
        console.error('Error al cargar los datos del producto:', error);
      }
    },
    async confirmEdit() {
      try {
        await updateProduct(this.productId, this.producto);
        this.$emit('producto-editado', this.productId);
        this.closeModal();
      } catch (error) {
        console.error('Error al editar el producto:', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <button class="edit-button" @click="openModal">
      <img src="./icons/Edit.svg" alt="Edit" />
    </button>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Editar Producto</h3>

        <form @submit.prevent="confirmEdit">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="producto.nombre" type="text" id="nombre" required />
          </div>
          <div class="form-group">
            <label for="precio">Precio</label>
            <input 
              v-model.number="producto.precio" 
              type="number" 
              id="precio" 
              required 
              step="0.01"  
              min="0"
            />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea v-model="producto.descripcion" id="descripcion" required></textarea>
          </div>
          <div class="form-group">
            <label for="categoria">Categoría</label>
            <input v-model="producto.categoria" type="text" id="categoria" required />
          </div>
          <div class="form-group">
            <label for="subcategoria">Subcategoría</label>
            <input v-model="producto.subcategoria" type="text" id="subcategoria" required />
          </div>
          <div class="form-group">
            <label for="pasillo">Pasillo</label>
            <input v-model="producto.pasillo" type="text" id="pasillo" required />
          </div>
          <div class="form-group">
            <label for="estanteria">Estantería</label>
            <input v-model="producto.estanteria" type="text" id="estanteria" required />
          </div>
          <div class="button-group">
            <button type="submit">Guardar</button>
            <button type="button" @click="closeModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
