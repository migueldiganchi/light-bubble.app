<template>
  <div class="new-bubble">
    <h1 class="text-center">
      Crea tu idea
    </h1>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="5">
            <BubbleForm />
        </b-col>
      </b-row>
    </b-container>
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
