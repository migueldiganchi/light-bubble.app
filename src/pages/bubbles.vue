<template lang="html">
  <b-container class="mt-4 mb-2">
    <b-row>
      <b-col col lg="3" class="p-10">
        <b-input 
          class="mb-2 mr-sm-2 mb-sm-0" 
          id="inlineFormInputName2" 
          placeholder="Buscar" />
        <br>
        <b-list-group>
          <b-list-group-item href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Últimas causas registradas</h5>
            </div>
            <p class="mb-1 mt-2">
              <small>Causas publicadas recientemente</small>
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Tendencias</h5>
            </div>
            <p class="mb-1 mt-2">
              <small>Las causas con mayor cantidad de votos acumulados</small>
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Por categoría</h5>
            </div>
            <p class="mb-1 mt-2">
              <small>Todas las causas categorizadas</small>
            </p>
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col col lg="5" class="light-list">
        <h4 class="text-center px-3" style="display: inline-block;">
          Todas las causas
        </h4>
        <BubbleList :bubbles="allBubbles" />
      </b-col>

      <b-col col lg="4" class="text-center map-container-holder">
        <h4>
          Causas en tu ciudad
        </h4>
        <div class="map-container radius-12">
          <google-map 
            name="explorer"
            class="radius-12"
            :markers="markers" />
        </div>
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
import BubbleList from '@/components/BubbleList';
import AppGoogleMap from '@/components/UI/AppGoogleMap';

export default {
  components: {
    BubbleList,
    'google-map': AppGoogleMap
  },
  data () {
    return {
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
        },
        {
          id: 3,
          lat: -37.7834, 
          lng: -34.2642
        }
      ],
    }
  },
  computed: {
    allBubbles () {
      return this.$store.getters.bubbles
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
};
</script>

<style scoped>
  .light-list {
    padding: 0 !important;
  }

  @media screen and (max-width: 450px) {
   .light-list,
   .map-container-holder {
      margin-top: 30px;
    } 
  }
</style>