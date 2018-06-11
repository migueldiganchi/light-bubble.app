<template lang="html">
  <b-container class="bubbles">
    <h4>Ideas</h4>
    <div class="bubbles-list-container">
      <BubbleList :bubbles="allBubbles" />
    </div>
  </b-container>
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
