<template lang="html">
  <div class="bubble">
    <h1>{{ bubble.title }}</h1>
    <p>{{ bubble.description }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bubble: {
        id: 1,
        title: 'Some bubble title',
        description: 'Some bubble description',
      }
    }
  }
}
</script>
