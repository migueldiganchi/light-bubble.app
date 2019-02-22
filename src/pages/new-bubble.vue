<template>
  <div class="new-bubble">
    <h1 class="text-center">
      Crea tu idea
    </h1>
    <b-row>
      <b-col col offset-lg="4" lg="4">
          <BubbleForm />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BubbleForm from '@/components/BubbleForm'

export default {
  components: {
    BubbleForm
  }
}
</script>

<style lang="css">
</style>
