<template>
  <b-container class="mt-4 mb-2">
    <b-row>
      <b-col col xs="12" sm="12" md="12" lg="3" class="p-10" >
        <b-list-group>
          <b-input 
            class="mb-2 mr-sm-2 mb-sm-0" 
            id="inlineFormInputName2"
            placeholder="Buscar en mi panel de control" />
          <br>
          <b-list-group-item 
            active
            href="#some-link">
            Mis causas
          </b-list-group-item>
          <b-list-group-item 
            @click="settings"
            href="#foobar">
            Configuración
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col col xs="12" sm="12" md="12" lg="5" id="light_list" class="p-10 light-list">
        <div>
          <h4 class="pull-left px-3"  style="display: inline-block;">
            Mis causas
          </h4>
          <small class="pull-right">Causas creadas por mi</small>
          <BubbleList :bubbles="myBubbles" />
        </div>
      </b-col>

      <b-col col xs="12" sm="12" md="12" lg="4" class="p-10 text-center map-container-holder">
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
  methods: {
    settings() {
      this.$eventHub.$emit('notify', {
        message: '@todo',
        type: 'warning'
      });
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
};
</script>

<style>
  .light-list {
    padding: 0 !important;
  }

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
