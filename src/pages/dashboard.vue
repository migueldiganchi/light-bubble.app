<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="3" class="p-10">
        <b-list-group>
          <b-list-group-item 
            active
            href="#some-link">
            Mis luces
          </b-list-group-item>
          <b-list-group-item href="#">
            Seguidores
          </b-list-group-item>
          <b-list-group-item href="#">
            Siguiendo a
          </b-list-group-item>
          <b-list-group-item href="#foobar">
            Configuración
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col class="p-10">
        <div>
          <h4 class="pull-left" style="display: inline-block;">
            Mis luces
          </h4>
          <small class="pull-right">Mis luces</small>
          <BubbleList :bubbles="myBubbles" />
        </div>
      </b-col>

      <b-col cols="4" class="p-10 text-center">
        <h4>En mi ciudad</h4>
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
};
</script>

<style>
.dashboard .mine {
  margin-bottom: 30px;
}
</style>
