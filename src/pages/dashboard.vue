<template lang="html">
  <div class="dashboard">
    <b-container class="sections-container">
      <b-row>
        <b-col col lg="6">
          <h4>Ideas en las que participo</h4>
          <BubbleList :bubbles="myBubbles" />
        </b-col>
        <b-col col lg="6">
          <h4>Ideas creadas por mi</h4>
          <BubbleList :bubbles="otherBubbles" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Form from '@/components/Form'
import BubbleList from '@/components/BubbleList'

export default {
  components: {
    Form,
    BubbleList
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
.dashboard .card {
  margin-bottom: 21px
}

</style>
