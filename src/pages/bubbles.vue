<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="3" class="column">
        <b-list-group>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#" active>Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <BubbleList :bubbles="allBubbles" />
      </b-col>
      <b-col cols="4" class="column text-center">
        <h6 class="section-title">Encuentra el tesoro en tu ciudad</h6>
        <div class="map-container radius-12">
        </div>
        <ul class="text-left rules">
          <li>Enter our system</li>
          <li>Select the search you want to do</li>
          <li>Make de search gaining money with it</li>
        </ul>
      </b-col>
    </b-row>
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

<style scoped>
  .section-title {
    margin-top: 9px;
    margin-bottom: 21px;
  }
  .column {
    padding: 10px;
  }
  .map-container {
    border: dotted 1px #c9c9c9;
    height: 180px;
  }
  .rules {
    margin-top: 21px;
  }
</style>