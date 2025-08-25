<script setup>
import Cards from '@/components/Cards.vue';
</script>

<template>
  <main class="connect-page">
    <div class="container">
      <h1 class="title">Connect With Us</h1>

      <section class="care-groups">
        <h2 class="subtitle">Care Groups</h2>
        <p class="description">
          Care groups are gatherings of individuals within our community who come together 
          regularly for fellowship, support, and spiritual growth. These groups typically 
          consist of around 6 to 12 members and are led by a facilitator or group leader, 
          who guides discussions and activities.
        </p>
        <p class="description">
          The primary purpose of a care group is to provide a supportive environment where 
          members can deepen their relationship with God, study the Bible, share their 
          faith journeys, and pray for one another. These groups offer a sense of belonging 
          and community within the larger church body, fostering friendships and accountability 
          among members.
        </p>
        <p class="description">
          Care groups may meet in various settings, including homes, church buildings, or 
          online platforms. Meetings typically include a time of fellowship, prayer, Bible 
          study, and discussion on relevant topics aimed at nurturing spiritual growth and 
          personal development.
        </p>
      </section>

      <Cards />
    </div>
  </main>
</template>

<style scoped>
.connect-page {
  background: linear-gradient(to bottom, #fefaf5, #f5eee5);
  min-height: 100vh;
  padding: 40px 0;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #4a3f35;
  position: relative;
  margin-bottom: 40px;
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

.subtitle {
  text-align: center;
  font-size: 2rem;
  color: #6c584c;
  margin-bottom: 20px;
}

.description {
  text-align: justify;
  font-size: 1.6rem;
  color: #5a4d3f;
  line-height: 1.8;
  margin-bottom: 15px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
</style>
