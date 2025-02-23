<script>
import Navbar from './components/Navbar.vue';
import Cover from './components/Cover.vue';

export default {
  components: {
    Navbar,
    Cover
  }
};
</script>

<template>
  <RouterView />
  <Cover />
</template>

<style scoped>
</style>
