<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { products } from './components/Products.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    products
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style></style>
