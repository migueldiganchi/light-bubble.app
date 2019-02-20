<template>
  <b-container class="mt-4 mb-2">
    <b-row>
      <b-col col lg="3" class="p-10">
        <b-list-group>
          <b-input 
            class="mb-2 mr-sm-2 mb-sm-0" 
            id="inlineFormInputName2" 
            placeholder="Busca tu burbuja" />
          <br>
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

      <b-col col lg="5" id="light_list" class="p-10 light-list">
        <div>
          <h4 class="pull-left" style="display: inline-block;">
            Mis luces
          </h4>
          <small class="pull-right">Mis luces</small>
          <BubbleList :bubbles="myBubbles" />
        </div>
      </b-col>

      <b-col col lg="4" class="p-10 text-center map-container-holder">
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
  .light-list {
    margin-top: 30px;
  }

  @media screen and (max-with: 450px) {
    .light-list,
    .map-container-holder {
      border: solid 1px red !important;
      margin-top: 30px;
    }
  }
</style>
