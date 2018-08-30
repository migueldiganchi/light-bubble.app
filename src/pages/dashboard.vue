<template lang="html">
  <div class="dashboard">
    <b-container class="sections-container">
      <b-row class="mine">
        <b-col>
          <h4>Ideas creadas por mi </h4>
          <BubbleList :bubbles="otherBubbles" />
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h4>Ideas en las que participo</h4>
          <BubbleList :bubbles="myBubbles" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BubbleList from '@/components/BubbleList'

export default {
  components: {
    BubbleList
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    myBubbles () {
      return this.$store.getters.bubbles
    },
    otherBubbles () {
      return this.$store.getters.bubbles
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
}
</script>

<style>
.dashboard .mine {
  margin-bottom: 30px;
}
</style>
