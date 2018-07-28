<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="3" class="column">
        <b-input 
          class="mb-2 mr-sm-2 mb-sm-0" 
          id="inlineFormInputName2" 
          placeholder="Search bubble" />
        <br>
        <b-list-group>
        <b-list-group-item href="#" active class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Recent</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1 mt-2">
            Most recent bubbles.
          </p>
        </b-list-group-item>
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Trends</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1 mt-2">
            Most popular (voted by users) bubbles.
          </p>
        </b-list-group-item>
        <b-list-group-item href="#" disabled class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">My lights</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1 mt-2">
            Your creativity must be exposed
          </p>
        </b-list-group-item>
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