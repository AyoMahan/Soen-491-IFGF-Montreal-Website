
<template>
  <div>
    <!-- Bootstrap Carousel -->
    <BootstrapCarousel />
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/logo-ifgf.png" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <h5>PAST Events</h5>
            <p>Some descriptive text for the slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>

    <!-- Marketing Section -->
    <div class="marketing">
      <div class="row">
        <div class="col-lg-4">
          <h2>Feature 1</h2>
          <p>Some description about feature 1.</p>
        </div>
        <div class="col-lg-4">
          <h2>Feature 2</h2>
          <p>Some description about feature 2.</p>
        </div>
        <div class="col-lg-4">
          <h2>Feature 3</h2>
          <p>Some description about feature 3.</p>
        </div>
      </div>
    </div>

    <!-- Featurettes -->
    <hr class="featurette-divider">
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style scoped>
/* GLOBAL STYLES */
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}

/* CAROUSEL */
.carousel {
  margin-bottom: 4rem;
}
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}
.carousel-item {
  height: 32rem;
}

/* MARKETING CONTENT */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing .col-lg-4 p {
  margin: 0 0.75rem;
}

/* FEATURETTES */
.featurette-divider {
  margin: 5rem 0;
}

/* RESPONSIVE STYLES */
@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
  .featurette-heading {
    font-size: 50px;
  }
}
@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
