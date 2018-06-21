<template lang="html">
  <div id="home">
    <b-container>
      <b-jumbotron
        header="Ideas que mejoran el mundo"
        lead="¿Cómo piensas que puedes mejorar el mundo?" >
        <p>Comienza Publica tu idea</p>
        <b-btn variant="primary" href="#">
          Más información
        </b-btn>
      </b-jumbotron>

      <h4>
        Publica ideas para mejorar el mundo. Solo registrate
        y publica algo que pienses que pueda ayudar a los demás.
      </h4>
      <Carousel />
      <h4>Crea tu propio servicio web aquí</h4>
    </b-container>
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
