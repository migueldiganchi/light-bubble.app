<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: {
    name: {
      type: String,
      required: false
    },
    zoom: {
      type: Number,
      required: false
    },
    markers: {
      type: Array,
      required: false
    }
  },
  data: function () {
    return {
      mapName: this.name + "-map",
      center: {
        lat: -27.7834,
        lng: -64.2642
      }
    }
  },
  methods: {
    loadMapMarkers(map) {
      let markerObject = null;
      let marker = null;
      this.markers.forEach(marker => {
        console.log('marker', marker);
        markerObject = new google.maps.Marker({
          position: {lat: marker.lat, lng: marker.lng}
        });
        markerObject.setMap(map);
      });
    }
  },
  created () {
    console.log(this.mapName)
  },
  mounted () {
    const element = document.getElementById(this.mapName)
    const zoom = this.zoom ? this.zoom : 3;
    const options = {
      zoom: zoom,
      center: new google.maps.LatLng(this.center.lat, this.center.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    const map = new google.maps.Map(element, options)
    this.loadMapMarkers(map);
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}
</style>