<script>
import { useProductStore } from '../stores/useProductStore'; 

export default {
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
        estanteria: '',
      },
      mensaje: '',
    };
  },
  setup() {
    const productStore = useProductStore(); 

    return {
      productStore, 
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.productStore.postProduct(this.producto);
        
        this.mensaje = 'Producto guardado exitosamente!';
        this.closeModal();
        
        this.$emit('producto-agregado'); 

        this.resetForm();
      } catch (error) {
        console.error('Error al guardar el producto:', error);
        this.mensaje = 'Error al guardar el producto. Por favor, inténtelo de nuevo.';
      }
    },

    closeModal() {
      this.showModal = false;
    },

    resetForm() {
      this.producto = {
        nombre: '',
        precio: 0,
        descripcion: '',
        categoria: '',
        subcategoria: '',
        pasillo: '',
        estanteria: '',
      };
    },
  },
};
</script>

<template>
  <div>
    <button
      type="button"
      class="btn btn-light position-fixed"
      @click="showModal = true"
      style="top: 120px; right: 30px; z-index: 1000; width: 60px; height: 60px; border-radius: 50%;"
    >
      <img src="./icons/Add.svg" alt="Añadir Producto" style="width: 30px; height: 30px;" />
    </button>

    <div v-if="showModal" class="modal fade show" style="display: block;" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Añadir Nuevo Producto</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del Producto</label>
                <input
                  type="text"
                  id="nombre"
                  v-model="producto.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input
                  type="number"
                  id="precio"
                  v-model="producto.precio"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea
                  id="descripcion"
                  v-model="producto.descripcion"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <input
                  type="text"
                  id="categoria"
                  v-model="producto.categoria"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="subcategoria" class="form-label">Subcategoría</label>
                <input
                  type="text"
                  id="subcategoria"
                  v-model="producto.subcategoria"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="pasillo" class="form-label">Pasillo</label>
                <input
                  type="text"
                  id="pasillo"
                  v-model="producto.pasillo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="estanteria" class="form-label">Estantería</label>
                <input
                  type="text"
                  id="estanteria"
                  v-model="producto.estanteria"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-secondary">Guardar Producto</button>
            </form>
            <div v-if="mensaje" class="alert alert-info mt-3">{{ mensaje }}</div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  max-width: 100%;
  margin: 0 auto;
}
.modal-content {
  width: 100%;
}
</style>
