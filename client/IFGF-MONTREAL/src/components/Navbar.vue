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

          <!-- Authentication buttons -->
        <div class="ms-auto">
          <SignedOut>
            <SignInButton>
              <button class="btn btn-primary">Login</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>  

        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/vue';
  import { useAuth } from '@clerk/vue';
  export default {
    components: {
      RouterLink,
      SignInButton,
      UserButton,
      SignedIn,
      SignedOut
    },
  setup() {
    const { isSignedIn } = useAuth();

    return {
      isSignedIn
    };
  }
};
  </script>
  