<template>
    <b-carousel
    id="carousel-no-anim"
    style="text-shadow: 0px 0px 2px #000;"
    no-animation
    :indicators="!hideControls"
    :controls="!hideControls"
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide 
      v-for="(item, key) in items"
      class="radius-12"
      :key="key"
      :caption="item.title"
      :img-src="item.media_url" />
  </b-carousel>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    computed: {
      hideControls() {
        return (this.items.length < 2)
      },
      hideDelimiters() {
        return (this.items.length < 2)
      }
    }
  }
</script>
