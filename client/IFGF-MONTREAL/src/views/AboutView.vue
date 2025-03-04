<template>
  <div class="background">
    <div class="container text-center">
      <h1 class="display-4 text-white mt-4">IFGF Montreal Vision and Mission</h1>

      <h1 class="display-6 text-white mt-5">Our Vision</h1>
      <p class="text-white">
        To Perform His will and to finish his works. <br>
        To observe and practice His teachings and examples. <br>
        To reach out to unbelievers with the Gospel. <br>
        To love one another with Godly Love.
      </p>
      
      <img src="@/assets/Jesus.jpg" class="rounded mx-auto d-block img-fluid my-4" alt="Cross">

      <h1 class="display-6 text-white">Our Belief</h1>
      <p class="text-white">
        We believe that there is ONLY one God, eternally existent in three persons:
        Father, Son, and the Holy Spirit. We believe in the deity of our Lord Jesus Christ.
        We believe that for the salvation of lost and sinful man,
        regeneration of the Holy Spirit is absolutely essential.
      </p>
      <img src="@/assets/bible.jpg" class="rounded mx-auto d-block img-fluid my-4" alt="Bible">
      <h1 class="display-6 text-white">Message from our Pastor</h1>
      <p class="text-white">
        We believe the Bible to be the inspired, the only infallible, authoritative Word of God. 
        And there is ONLY one God, eternally existent in three persons: Father, Son, and the Holy Spirit. 
        We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, 
        in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, 
        and in His personal return in power and glory.
      </p>

      <img src="@/assets/matthew 18.jpg" class="rounded mx-auto d-block img-fluid my-4" alt="Bible">
      <figure class="text-center text-white">
        <blockquote class="blockquote">
          <p>"For where two or three are gathered together in my name, there am I in the midst of them."</p>
        </blockquote>
        <figcaption class="blockquote-footer text-white">
          Matthew 18:20 (KJV)
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
/* Background Styling */
.background {
  background: url('@/assets/cross.jpg') no-repeat center center fixed; /* Use a custom background image */
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Make text more readable */
.container {
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for better readability */
  padding: 30px;
  border-radius: 10px;
}

/* Improve image styling */
.img-fluid {
  max-width: 80%;
  height: auto;
}
</style>
