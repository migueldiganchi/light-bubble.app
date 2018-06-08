<template lang="html">
  <router-link :to="'/bubble/' + bubble.id" class="bubble-item">
    <b-card img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-top>
      <h4>{{ bubble.title }}</h4>
      <p class="card-text">
        {{ bubble.description }}
      </p>
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
