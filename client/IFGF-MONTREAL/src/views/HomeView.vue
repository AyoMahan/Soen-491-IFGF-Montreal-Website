<script setup>
import Cover from '@/components/Cover.vue';
</script>

<template>
  <main class="home-container">
    <Cover />

    <section class="hero text-center">
      <h1 class="title">Come Worship With Us</h1>
      <p class="bible-verse">
        "His lord said to him, ‘Well done, good and faithful servant; you have been faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.’" 
        <span class="reference">- Matthew 25:23</span>
      </p>
      <p class="lead">We are a community of believers who gather together to worship God and grow in faith.</p>
      <img src="@/assets/pray.jpg" class="hero-image" alt="prayer">
    </section>

    <section class="our-story">
      <h1 class="section-title">Our Story</h1>
      <p class="story-text">
        IFGF MONTREAL was established in 2006 and is part of the IFGF Global Church based in Indonesia. The acronym IFGF stands for International Full Gospel Fellowship. Presently, the IFGF Church oversees more than 3,000 churches across 38 different countries globally, planting new churches in over 40 countries.
      </p>
      <p class="story-text">
        In 2006, we began our journey with a small group of people, and now we have grown much more. Our services were initially held in a few different locations, and later, we started gathering at the Korean Church building. IFGF MONTREAL holds authority to govern itself according to the bylaws of the IFGF Global Church. For more information, please visit their global <a href="https://ifgf.global/" target="_blank">website</a>
      </p>
    </section>
  </main>
</template>

<style scoped>
/* General Styling */
.home-container {
  background: linear-gradient(to bottom, #fefaf5, #f5eee5);
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #4a3f35;
  margin-bottom: 20px;
}

.bible-verse {
  font-size: 1.6rem;
  font-style: italic;
  color: #6c584c;
  line-height: 1.6;
  margin-bottom: 20px;
}

.reference {
  display: block;
  font-weight: bold;
  margin-top: 8px;
  color: #b89b7d;
}

.lead {
  font-size: 1.7rem;
  color: #5a4d3f;
  line-height: 1.8;
  margin-bottom: 20px;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Our Story Section */
.our-story {
  max-width: 900px;
  margin: 50px auto 0;
  text-align: left;
}

.section-title {
  font-size: 2.5rem;
  color: #4a3f35;
  margin-bottom: 20px;
  text-align: center;
}

.story-text {
  font-size: 1.6rem;
  color: #5a4d3f;
  line-height: 1.8;
  margin-bottom: 15px;
  text-align: justify;
}
</style>
