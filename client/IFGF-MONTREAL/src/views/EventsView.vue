<template>
    <div>
      <!-- Navbar (sit on top) -->
      <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:4px;">
          <a href="#home" class="w3-bar-item w3-button">Gourmet au Catering</a>
          <!-- Right-sided navbar links. Hide them on small screens -->
          <div class="w3-right w3-hide-small">
            <a href="#about" class="w3-bar-item w3-button">About</a>
            <a href="#menu" class="w3-bar-item w3-button">Menu</a>
            <a href="#contact" class="w3-bar-item w3-button">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // You can import additional JavaScript here if needed
  export default {
    name: 'NavbarComponent',
  }
  </script>
  
  <style scoped>
  body {
    font-family: "Times New Roman", Georgia, Serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display";
    letter-spacing: 5px;
  }
  
  /* You can add more custom styles below */
  </style>
  