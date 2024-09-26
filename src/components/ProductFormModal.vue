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
                  v-model="product.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input
                  type="number"
                  id="precio"
                  v-model="product.precio"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea
                  id="descripcion"
                  v-model="product.descripcion"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <input
                  type="text"
                  id="categoria"
                  v-model="product.categoria"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="subcategoria" class="form-label">Subcategoría</label>
                <input
                  type="text"
                  id="subcategoria"
                  v-model="product.subcategoria"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="pasillo" class="form-label">Pasillo</label>
                <input
                  type="text"
                  id="pasillo"
                  v-model="product.pasillo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="estanteria" class="form-label">Estantería</label>
                <input
                  type="text"
                  id="estanteria"
                  v-model="product.estanteria"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="img" class="form-label">URL de la Imagen</label>
                <input
                  type="text"
                  id="img"
                  v-model="product.img"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-secondary">Guardar Producto</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      product: {
        nombre: '',
        precio: 0,
        descripcion: '',
        categoria: '',
        subcategoria: '',
        pasillo: '',
        estanteria: '',
        img: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Producto a guardar:', this.product);
      this.closeModal();
      // Aquí puedes agregar la lógica para guardar el producto
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.modal {
  max-width: 100%; /* Asegura que el modal no exceda el ancho de la pantalla */
  margin: 0 auto; /* Centra el modal */
}

.modal-content {
  width: 100%; /* Asegura que el contenido del modal ocupe todo el ancho */
}

/* Estilo del botón */
.btn-light {
  padding: 0; /* Elimina padding para que el botón sea cuadrado */
}

@media (max-width: 576px) {
  .btn-light {
    width: 60px; /* Ajusta el tamaño del botón en móviles */
    height: 60px;
    top: 85px; /* Espaciado desde la parte superior (debajo del header) */
    right: 30px; /* Espaciado desde el lado derecho */
  }

  .modal-lg {
    max-width: 95%; /* Ajusta el ancho del modal en pantallas pequeñas */
    margin: auto; /* Asegura que el modal esté centrado */
  }
}
</style>
