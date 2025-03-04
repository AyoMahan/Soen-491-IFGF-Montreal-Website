<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="(card, index) in cards" :key="index" class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-lg">
          <img :src="card.image" class="card-img-top" :alt="card.title">
          <div class="card-body text-center">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <a href="#" class="btn btn-custom">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      cards: [
        { title: "Sunday School", description: "Engaging lessons for kids & youth.", image: "/assets/sunday-school.jpg" },
        { title: "Adults iCare", description: "A space for adults to grow in faith.", image: "/assets/adults-icare.jpg" },
        { title: "Teens Ministry", description: "Guiding teens in faith and fellowship.", image: "/assets/teens-ministry.jpg" },
        { title: "Prayer Warriors", description: "Strengthening faith through prayer.", image: "/assets/prayer-ministry.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
/* Improved Card Styling */
.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

/* Image Styling */
.card-img-top {
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* Text & Button Styling */
.card-title {
  font-size: 1.4rem;
  color: #5a4a42;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #7d6b5f;
}

/* Button Styling */
.btn-custom {
  background-color: #5a4a42;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
}

.btn-custom:hover {
  background-color: #8b7765;
}
</style>
