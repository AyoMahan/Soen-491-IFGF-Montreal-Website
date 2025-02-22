<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><RouterLink class="dropdown-item" to="/events">Events</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/services">Services</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink class="dropdown-item" to="/contact">Contact</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <span class="nav-link disabled" aria-disabled="true">Disabled</span>
            </li>
          </ul>
          
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
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
  