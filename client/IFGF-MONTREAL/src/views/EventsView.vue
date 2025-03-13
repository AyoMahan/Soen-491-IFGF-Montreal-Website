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
<h1 class="display-4">Coming Soon</h1>
<CarouselPast />

<h1 class="display-4">Past Events</h1>

<CarouselFuture />

</template>
  