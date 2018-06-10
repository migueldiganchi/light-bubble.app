<template lang="html">
  <div class="bubble-list">
    <b-card-group deck>
    <b-row>
      <b-col v-for="bubble in bubbles" :key="bubble.id">
          <BubbleItemList
            :bubble="bubble" />
      </b-col>
    </b-row>
  </b-card-group>
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
