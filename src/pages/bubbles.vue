<template lang="html">
  <div class="bubbles">
    <h1>Ideas</h1>
    <div class="bubbles-list-container">
      <BubbleList :bubbles="allBubbles" />
    </div>
  </div>
</template>

<script>
import BubbleList from '@/components/BubbleList';

export default {
  components: {
    BubbleList
  },
  computed: {
    allBubbles () {
      return this.$store.getters.bubbles
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
}
</script>
