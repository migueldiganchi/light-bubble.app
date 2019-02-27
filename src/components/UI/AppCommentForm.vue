<template>
  <b-form @submit.prevent="sendComment">
      <b-form-group class="mb-3">
        <b-form-input 
          v-model="comment.username" 
          type="text" 
          :disabled="disabled"
          placeholder="Ingresa tu nombre" />
      </b-form-group>
      <b-form-group>
        <b-form-textarea
          v-model="comment.comment"
          placeholder="Por favor ingresa un comentario"
          rows="2"
          :disabled="disabled"
          max-rows="6" />
      </b-form-group>
      <b-form-group class="text-right m-0">
        <b-button 
          type="button"
          :disabled="disabled"
          @click="cancelForm">
          Cancelar
        </b-button>
        <b-button 
          type="submit"
          :disabled="disabled"
          variant="primary">
          {{ ajaxMessage || 'Comentar' }}
        </b-button>
      </b-form-group>
    </b-form>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Object,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      },
      ajaxMessage: {
        type: String,
        required: false
      }
    },
    methods: {
      sendComment () {
        this.$emit('onSubmit');
      },
      cancelForm () {
        this.$emit('onCancelForm');
      }
    }
  }
</script>