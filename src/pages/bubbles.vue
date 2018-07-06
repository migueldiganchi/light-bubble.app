<template lang="html">
  <div class="container">
    <h4 class="text-center">Ideas</h4>
    <BubbleList :bubbles="allBubbles" />
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
