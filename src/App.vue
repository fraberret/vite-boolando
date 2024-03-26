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
    Modale
  }
}
</script>

<template>
  <AppHeader />
  <Modale />
  <AppMain />
  <AppFooter />
</template>

<style></style>
