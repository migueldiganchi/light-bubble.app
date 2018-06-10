<template lang="html">
  <div id="home">
    <h1>
      Expande tus ideas
    </h1>
    <Carousel />
    <h4>Crea tu propio servicio web aquí</h4>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  components: {
    Carousel
  },
  created () {
    console.log('this.$store', this.$store)
  }
}
</script>
