<script>
import Navbar from './components/Navbar.vue';
import Cover from './components/Cover.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Cover,
    Footer
  }
};
</script>

<template>
  <RouterView />
  <Cover />
  <Footer />
</template>

<style scoped>
</style>
