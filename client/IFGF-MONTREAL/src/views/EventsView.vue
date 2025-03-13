<script>
import CarouselPast from '@/components/CarouselPast.vue';
import CarouselFuture from '@/components/CarouselFuture.vue';

export default {
  components: {
    CarouselPast,
    CarouselFuture
  }
};
</script>

<template>
  <main class="events-page">
    <div class="container">
      
      <section class="event-section">
        <h1 class="title">🚀 Coming Soon</h1>
        <CarouselFuture />
        <p class="event-description">
          Stay tuned for our upcoming events! We have exciting gatherings, 
          services, and special activities planned. Check back soon for updates!
        </p>
      </section>

      <section class="event-section">
        <h1 class="title">🎉 Past Events</h1>
        <CarouselPast />
        <p class="event-description">
          A look back at our fond memories—moments of joy, connection, and 
          faith. Thank you for being a part of our journey!
        </p>
      </section>

    </div>
  </main>
</template>

<style scoped>
/* Matching Background Gradient */
.events-page {
  background: linear-gradient(to bottom, #fefaf5, #f5eee5);
  min-height: 100vh;
  padding: 40px 0;
}

/* Centralized Layout */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* Section Styling */
.event-section {
  text-align: center;
  margin-bottom: 60px;
}

/* Styled Headings */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4a3f35;
  position: relative;
  margin-bottom: 20px;
}

.title::after {
  content: "";
  display: block;
  width: 100px;
  height: 4px;
  background: #b89b7d;
  margin: 8px auto;
  border-radius: 2px;
}

/* Event Description Styling */
.event-description {
  font-size: 1.2rem;
  color: #5a4d3f;
  margin-top: 20px;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Improved Carousel Appearance */
.carousel-inner {
  max-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Ensuring Image Consistency */
.carousel-item img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
