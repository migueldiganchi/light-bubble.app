<template lang="html">
  <div class="bubble-list">
    <b-card-group class="bubble-list-body" deck>
      <b-row>
        <b-col v-for="bubble in bubbles" :key="bubble.id">
            <BubbleItemList
              :bubble="bubble" />
        </b-col>
      </b-row>
    </b-card-group>
    <b-pagination class="pagination"
      align="center"
      size="md"
      :total-rows="100"
      v-model="currentPage"
      :per-page="10">
    </b-pagination>
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

<style media="screen" scoped>
  .bubble-list-body {
    margin-bottom: 31px;
  }
</style>
