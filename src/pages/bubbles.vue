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
              <h5 class="mb-1">Últimas</h5>
              <small>143 publicadas</small>
            </div>
            <p class="mb-1 mt-2">
              Publicadas recientemente
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Tendencias</h5>
              <small class="text-muted">15 publicadas</small>
            </div>
            <p class="mb-1 mt-2">
              Las causas con mayor cantidad de votos acumulados
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Por categoría</h5>
              <small class="text-muted">323 publicadas</small>
            </div>
            <p class="mb-1 mt-2">
              Todas las causas categorizadas
            </p>
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cik lg="5" class="p-10 light-list">
        <div>
          <h4 class="pull-left" style="display: inline-block;">
            Todas las luces
          </h4>
          <small class="pull-right">
            999999 registradas
          </small>
          <BubbleList :bubbles="allBubbles" />
        </div>
      </b-col>

      <b-col col lg="4" class="p-10 text-center map-container-holder">
        <h4>
          Luces en tu ciudad
        </h4>
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
};
</script>

<style scoped>
  .section-title {
    margin-top: 9px;
    margin-bottom: 21px;
  }
  .rules {
    margin-top: 21px;
  }
  @media screen and (max-width: 450px) {
   .light-list,
   .map-container-holder {
      margin-top: 30px;
    } 
  }
</style>