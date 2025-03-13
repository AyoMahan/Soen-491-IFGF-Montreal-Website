<script>
import Carousel from '@/components/CarouselPast.vue';
import Carousel from '@/components/CarouselFuture.vue';
import CarouselFuture from '@/components/CarouselFuture.vue';

export default {
  components: {
    Carousel
  }
};

</script>

<template>
<h1 class="display-4">Coming Soon</h1>
<Carousel />

<h1 class="display-4">Past Events</h1>

<CarouselFuture />

</template>
  