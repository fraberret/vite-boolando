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
    }
  }
}
</script>

<template>
  <AppHeader />
  <Modale v-if="showModal" @click="closeModal" />
  <AppMain @show-modal="showModal = true" />
  <AppFooter />
</template>

<style></style>
