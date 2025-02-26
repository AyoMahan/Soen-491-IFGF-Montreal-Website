<template>
    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container text-center">
        <div class="row">
          <!-- Footer Navigation -->
          <div class="col-md-4 mb-3">
            <h5>Find us</h5>
            <p>Saturdays: 11am - 1:30 pm</p>
            <p>3482 Decarie Blvd, Montreal, Quebec H4A 3J5</p>
          </div>
  
          <!-- Social Media Links -->
          <div class="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/ifgf.montreal" class="text-light me-3"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/ifgfmontreal/" class="text-light me-3"><i class="bi bi-instagram"></i></a>
              
            </div>
          </div>
  
          <div class="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: ifgf.montreal@yahoo.com</p>
            <p>Phone: +1 514-621-3422</p>
          </div>
        </div>
  
   
      </div>
    </footer>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  
  export default {
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>
  footer a {
    transition: 0.3s;
  }
  footer a:hover {
    color: #f8d210; /* Highlight color on hover */
  }
  </style>
  