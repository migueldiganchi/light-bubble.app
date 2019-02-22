<template>
  <b-container class="mt-4 mb-2">
    <b-row>
      <b-col col sm="12" lg="3" class="p-10">
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

      <b-col col sm="12" lg="5" id="light_list" class="p-10 light-list">
        <div>
          <h4 class="pull-left px-3"  style="display: inline-block;">
            Mis luces
          </h4>
          <small class="pull-right">Causas creadas por mi</small>
          <BubbleList :bubbles="myBubbles" />
        </div>
      </b-col>

      <b-col col sm="12" lg="4" class="p-10 text-center map-container-holder">
        <h4>En mi ciudad</h4>
        <div class="map-container radius-12">
          <google-map  
            name="dashboard"
            :markers="markers"
            class="radius-12" />
        </div>
      </b-col>

    </b-row>  
  </b-container>
</template>

<script>
import BubbleList from '@/components/BubbleList'
import AppGoogleMap from '@/components/UI/AppGoogleMap'

export default {
  components: {
    BubbleList,
    'google-map': AppGoogleMap
  },
  data () {
    return {
      currentPage: 1,
      markers: [
        {
          id: 1,
          lat: -27.7834, 
          lng: -64.2642
        },
        {
          id: 2,
          lat: -30.7834, 
          lng: -69.2648
        }
      ],
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
  @media screen and (max-width: 450px) {
    .light-list,
    .map-container-holder {
      margin-top: 30px;
    }
  }
  .sharing-box {
    padding: 3px;
  }
</style>
