<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
    }
  },
  created () {
    console.log(this.mapName)
  },
  mounted () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 3,
      center: new google.maps.LatLng(-27.7834, -64.2642),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    const map = new google.maps.Map(element, options)
    const marker = new google.maps.Marker({
        position: {lat: -27.7834, lng: -64.2642}
    });
    const marker1 = new google.maps.Marker({
        position: {lat: -30.7834, lng: -66.2642}
    });
    marker.setMap(map);
    marker1.setMap(map);
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