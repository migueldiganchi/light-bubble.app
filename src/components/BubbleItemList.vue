<template lang="html">
    <b-card overlay
      img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-top
      footer-tag="footer"
      class="card">
      <router-link :to="'/bubble/' + bubble.id" class="bubble-item">
        <h2>TItle</h2>
        <p class="card-text">Header and footers using slots.</p>
      </router-link>
      <b-button href="#" size="sm" variant="primary">
        Participar
      </b-button>
      <b-button href="#" size="sm">
        No me gusta
      </b-button>
    </b-card>
</template>

<script>
export default {
  props: {
    bubble: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 10px !important;
}
</style>