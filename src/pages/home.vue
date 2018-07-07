<template lang="html">
  <div id="home">
    <b-jumbotron
      class="presentation"
      fluid
      header="Ideas que mejoran el mundo"
      lead="¿Cómo piensas que puedes mejorar el mundo?" >
      <b-btn variant="primary" href="#">
        Registrarme
      </b-btn>
      <b-btn href="#">
        Explorar ideas
      </b-btn>
    </b-jumbotron>

    <b-container class="carousel-container">
      <h4>
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

<style>
  .carousel-container {
    margin-bottom: 30px;
  }
</style>
