<template lang="html">
  <router-link :to="'/bubble/' + bubble.id" class="bubble-item">
    <b-card
      img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-top
      title="Title"
      footer-tag="footer">
      <em slot="footer">Footer Slot</em>
      <p class="card-text">Header and footers using slots.</p>
      <b-button href="#" size="sm" variant="primary">
        Participar
      </b-button>
      <b-button href="#" size="sm">
        No me gusta
      </b-button>
    </b-card>
  </router-link>
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
