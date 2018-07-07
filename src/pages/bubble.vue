<template lang="html">
  <div v-if="bubble" class="bubble">
    <b-jumbotron fluid>
    <h1>{{ bubble.name }}</h1>
    <p>{{ bubble.email }}</p>
    </b-jumbotron>
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
