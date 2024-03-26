<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Modale from './components/Modale.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";



export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Modale,


  },
  data() {
    return {
      showModal: false,
      selectedProduct: null,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    modal(product) {

      this.showModal = true
      this.selectedProduct = product
      console.log(this.product);
    }
  }
}
</script>

<template>
  <AppHeader />
  <Modale v-if="showModal == true" :selectedProduct="selectedProduct" @click="closeModal" />
  <AppMain @show-modal="modal" />
  <AppFooter />
</template>

<style></style>
