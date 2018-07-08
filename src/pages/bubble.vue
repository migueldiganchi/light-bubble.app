<template lang="html">
  <div v-if="bubble" class="bubble">
    <b-jumbotron fluid>
      <h1>{{ bubble.title }}</h1>
    </b-jumbotron>

    <b-container class="media-container">
      <img :src="bubble.media_url"
        style="width: 39%;">
    </b-container>

    <b-container>
      <p>{{ bubble.description }}</p>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    bubble () {
      return this.$store.getters.bubble
    }
  },
  created () {
    let bubbleId = this.$route.params.id
    this.$store.dispatch('getBubble', bubbleId)
  }
}
</script>

<style>
  .media-container {
    margin-bottom: 21px;
  }
</style>
