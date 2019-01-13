<template lang="html">
  <div id="home">
    <div class="text-center">
      <b-jumbotron
        id="presentation"
        fluid
        header="Mercado de ideas"
        lead="Compra y vende los productos de tu imaginación">
        <div class="text-holder">
          <b-btn to="/signup"
            variant="primary" href="#">
            Registrar mi cuenta
          </b-btn>
          <b-btn to="/signin">
            Ingresar
          </b-btn>
        </div>
      </b-jumbotron>
    </div>

    <b-container class="carousel-container">
      <h4 class="mb-4">
        Publica ideas para mejorar el mundo
      </h4>
      <Carousel class="carousel" />
    </b-container>

    <b-container class="last-bubbles">
      <b-row>
        <b-col cols="6"
          v-for="bubble in lastBubbles"
          :key="bubble.id">
          <BubbleItemList :bubble="bubble" />
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import BubbleItemList from '@/components/BubbleItemList'

export default {
  components: {
    Carousel,
    BubbleItemList
  },
  computed: {
    lastBubbles () {
      return this.$store.getters.bubbles
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
}
</script>

<style scoped>
  .carousel-container {
    margin-bottom: 30px;
  }
  #home .card {
    height: 180px;
  }
  .btn {
    margin: auto 5px;
  }
</style>
