<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <logo class="png"><img src="@/assets/logo.png" alt="IFGF Montreal Logo"></logo>
      <!-- Logo / Brand -->
      <RouterLink class="navbar-brand fw-bold" to="/">
        MONTREAL
      </RouterLink>

      <!-- Navbar toggler for mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
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
      </div>

      <!-- Authentication buttons -->
      <div class="ms-auto">
        <SignedOut>
          <SignInButton>
            <button class="btn btn-outline-dark">Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
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

<style scoped>
/* Elegant Cream-Themed Navbar */
.custom-navbar {
  background: #f5efe6; /* Soft cream background */
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Navbar Brand */
.navbar-brand {
  font-size: 1.5rem;
  color: #5a4a42; /* Warm brown for an elegant touch */
  transition: opacity 0.3s;
}

.navbar-brand:hover {
  opacity: 0.8;
}

/* Navbar Links */
.navbar-nav .nav-link {
  color: #5a4a42; /* Elegant brown */
  font-size: 1.3rem;
  margin: 0 10px;
  transition: color 0.3s ease-in-out, transform 0.2s;
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #8b7765; /* A slightly darker brown on hover */
  transform: scale(1.05); /* Subtle zoom effect */
}

/* Login Button */
.btn-outline-dark {
  border: 2px solid #5a4a42;
  color: #5a4a42;
  padding: 8px 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.btn-outline-dark:hover {
  background: #5a4a42;
  color: #f5efe6;
}
</style>
