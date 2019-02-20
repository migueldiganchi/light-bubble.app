<template>
  <v-carousel
    v-if="items.length > 0"
    :hide-controls="hideControls"
    :hide-delimiters="hideDelimiters"
    :delimiter-icon="'airplay'"
    :lazy="true">
    <v-carousel-item v-for="(item, i) in items"
      :src="item.src" 
      :key="i"
      >
      <slot></slot>
    </v-carousel-item>
  </v-carousel>
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
