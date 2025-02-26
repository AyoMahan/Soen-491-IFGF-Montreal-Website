<template>
    <section class="cover-container" :style="{ backgroundImage: `url(${bgImage})` }">
      <div class="overlay"></div>
      <div class="cover-content">
        <h1 class="display-3 fw-bold">IFGF MONTREAL</h1>
        <p class="lead">In Christ Alone</p>
      </div>
    </section>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  import bgImage from "@/assets/christmas.jpg"; // Ensure the image exists in the assets folder
  
  export default {
    components: {
      RouterLink,
    },
    data() {
      return {
        bgImage, 
      };
    },
  };
  </script>
  
  <style scoped>
  .cover-container {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .cover-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 20px;
  }
  </style>
  