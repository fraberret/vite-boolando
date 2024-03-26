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
      showModal: false
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    bla() {
      this.showModal = true
    }
  }
}
</script>

<template>
  <AppHeader />
  <Modale v-if="showModal == true" @click="closeModal" />
  <AppMain @show-modal="bla" />
  <AppFooter />
</template>

<style></style>
