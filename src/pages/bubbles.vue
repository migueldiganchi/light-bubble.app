<template lang="html">
  <div class="bubbles">
    <h1>Burbujas</h1>
    <div class="bubbles-list-container">
      <BubbleList :bubbles="list" />
    </div>
  </div>
</template>

<script>
import BubbleList from '@/components/BubbleList';

export default {
  components: {
    BubbleList
  },
  data () {
    return {
      list: [
        {
          id: 1,
          title: 'Bubble title nº 1',
          description: 'Bubble description nº 1. Bubble description nº 1. Bubble description nº 1. '
        },
        {
          id: 2,
          title: 'Bubble title nº 2',
          description: 'Bubble description nº 2. Bubble description nº 1. Bubble description nº 2. '
        },
        {
          id: 3,
          title: 'Bubble title nº 3',
          description: 'Bubble description nº 3. Bubble description nº 1. Bubble description nº 3. '
        },
    ]};
  }
}
</script>

<style lang="css">
</style>
