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
              <RouterLink class="nav-link" to="/outreach">Reach Out</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/connect">Connect</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/events">Events</RouterLink>
            </li>
          </ul>

          <!-- Login Button -->
        <div class="ms-auto">
          <SignInButton v-if="!isSignedIn" mode="modal">
            <button class="btn btn-primary">Login</button>
          </SignInButton>

        <!-- Show User Avatar & Sign Out when logged in -->
        <UserButton v-else />
        </div>  

        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
  export default {
    components: {
      RouterLink
    }
  };
  </script>
  