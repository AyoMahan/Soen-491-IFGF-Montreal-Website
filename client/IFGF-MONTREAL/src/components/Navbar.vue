<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/events">Reach Out</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/connect">Connect</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">Login</RouterLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink
    }
  };
  </script>
  