<template>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <img src="@/assets/cross.jpg" class="img-fluid" alt="...">
  
      <main class="px-3">
        <h1>Cover your page.</h1>
        <p class="lead">Come Worship with Us!</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>
  
      <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoverPage',
  };
  </script>
  
  <style scoped>
  /* Custom default button */
  .btn-light,
  .btn-light:hover,
  .btn-light:focus {
    color: #333;
    text-shadow: none;
  }
  
  /* Base structure */
  body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }
  
  .cover-container {
    max-width: 42em;
  }
  
  /* Header */
  .nav-masthead .nav-link {
    color: rgba(255, 255, 255, .5);
    border-bottom: .25rem solid transparent;
  }
  
  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }
  
  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }
  
  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }
  </style>
  