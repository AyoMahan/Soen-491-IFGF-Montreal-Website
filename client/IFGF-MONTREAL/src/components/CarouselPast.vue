<template>
<div id="carouselPast" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselPast" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselPast" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselPast" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/christmas-2025.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Christmas</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/outdoor-service.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Outdoor Service</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/retreat-2025.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Retreat</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/worship-circle.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Worship Circle</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselPast" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselPast" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</template>

<script>

export default{
    name: "CarouselPast",
}
</script>

<style scoped>
.carousel-inner {
  max-height: 500px; /* Adjust height as needed */
}

.carousel-item img {
  height: 500px; /* Set fixed height */
  width: 100%; /* Ensure full width */
  object-fit: cover; /* Crop instead of stretching */
}
</style>