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
          <h4 class="pull-left"  style="display: inline-block;">
            Mis luces
          </h4>
          <small class="pull-right">Causas creadas por mi</small>
          <BubbleList :bubbles="myBubbles" />
        </div>
      </b-col>

      <b-col col lg="4" class="p-10 text-center map-container-holder">
        <h4>En mi ciudad</h4>
        <div class="map-container radius-12">
          <google-map  
            name="dashboard"
            class="radius-12" />
        </div>
        <ul class="text-left rules">
          <li>Encuentra las mejores causas</li>
          <li>Vótalas dándole prioridad entre las demás</li>
          <li>Comparte y da a conocer</li>
        </ul>
        <div class="sharing-box mt-3">
          <button type="button"
            class="btn btn-success btn-lg btn-block">
            Compartir
          </button>
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
