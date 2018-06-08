<template lang="html">
  <div class="new-bubble">
    <h1>Crea tu burbuja</h1>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="5">
            <Form />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Form from '@/components/Form'

export default {
  components: {
    Form
  }
}
</script>

<style lang="css">
</style>
