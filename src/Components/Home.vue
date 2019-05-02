<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h1 class="center">Lista de Productos</h1>
          <button type="submit" class="btn" v-bind:disabled="isButtonDisabled">test</button>
          <button data-target="modal1" class="btn right modal-trigger">Agregar</button>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="modal1" class="modal">
      <form @submit.prevent="addProduct">
        <div class="modal-content">
          <h4>Agregar Producto</h4>
          <div class="input-field">
            <input type="text" id="name" v-model="name">
            <label for="name">Nombre</label>
          </div>
          <div class="input-field">
            <input type="text" id="price" v-model="price">
            <label for="price">Precio</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn" v-bind:disabled="isButtonDisabled">Agregar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [
        { id: 1, name: "notebook hp", price: 500000 },
        { id: 2, name: "notebook dell", price: 700000 },
        { id: 3, name: "macbook", price: 1000000 }
      ],
      name: "",
      price: ""
    };
  },
  created() {
    $(document).ready(function() {
      $(".modal").modal();
    });
  },
  computed: {
    isButtonDisabled() {
      if (!this.name || !this.price) return true;
    }
  },
  methods: {
    addProduct() {
      if (!this.name || !this.price) return;

      const newProduct = {
        id: Date.now(),
        name: this.name,
        price: this.price
      };
      $("#modal1").modal("close");
      this.products.push(newProduct);
      this.name = "";
      this.price = "";
    }
  }
};
</script>

<!-- 
<style scoped>
</style>
-->
