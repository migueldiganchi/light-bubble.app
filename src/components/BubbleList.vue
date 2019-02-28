<template lang="html">
  <div class="bubble-list">
    <b-row v-for="bubble in bubbles" 
      :key="bubble.id">
      <b-col>
          <BubbleItemList
            :bubble="bubble" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center mb-2">
        <router-link :to="'/'">
          <span>Ver más causas</span>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BubbleItemList from '@/components/BubbleItemList';

export default {
  components: {
    BubbleItemList
  },
  props: {
    bubbles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .bubble-list {
    position: relative !important;
  }
  .bubble-list-body {
    margin-bottom: 31px;
  }
</style>
