<script>
import { removeProduct } from '../core/api/product/productService';

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
      deleted: false,
      mensaje: '',
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async confirmDelete() {
      this.showModal = false;

      try {
        await removeProduct(this.productId);
        this.deleted = true;
        this.mensaje = 'Producto eliminado exitosamente!';

        this.$emit('producto-eliminado', this.productId);

        setTimeout(() => {
          this.deleted = false;
        }, 3200);
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        this.mensaje = 'Error al eliminar el producto.';
      }
    },
  },
};
</script>


<template>
  <div>
    <button class="button" @click="openModal">
      <div class="trash">
        <div class="top">
          <div class="paper"></div>
        </div>
        <div class="box"></div>
        <div class="check" v-if="deleted">
          <svg viewBox="0 0 8 6">
            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
          </svg>
        </div>
      </div>
      <img src="../components/icons/Delete.svg" alt="Eliminar" class="delete-icon" />
    </button>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Confirmar Eliminación</h3>
        <p>¿Estás seguro de que deseas eliminar este producto?</p>
        <div class="button-group">
          <button @click="confirmDelete">Sí, eliminar</button>
          <button @click="closeModal">Cancelar</button>
        </div>
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
  background: #fff;
  padding: 15px; /* Reducido para hacer más pequeño el modal */
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px; /* Ancho reducido */
}

.modal-content h3 {
  margin-bottom: 10px; /* Espaciado reducido */
}

.modal-content p {
  margin-bottom: 20px; /* Espaciado reducido */
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  margin: 0; /* Margen a 0 para ajustarlo mejor */
}
</style>
