<template lang="html">
  <div class="bubble-list">
    <div class="bubble-list-" deck>
      <b-row v-for="bubble in bubbles" 
        :key="bubble.id">
        <b-col>
            <BubbleItemList
              :bubble="bubble" />
        </b-col>
      </b-row>
    </div>
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
  },
  data () {
    return {
      currentPage: 2
    }
  }
}
</script>

<style media="screen" scoped>
  .bubble-list-body {
    margin-bottom: 31px;
  }
</style>
