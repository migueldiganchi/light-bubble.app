<template>
  <b-form @submit.prevent="onSubmit">
    <!-- name -->
    <b-form-group>
      <b-form-input
        type="text"
        v-model="fromUserName"
        :disabled="disabled"
        placeholder="Danos un nombre"
        required></b-form-input>
    </b-form-group>

    <!-- email -->
    <b-form-group>
      <b-form-input id="contact_email"
        type="email"
        v-model="contact.email"
        :disabled="disabled"
        required
        placeholder="Ingresa un correo">
      </b-form-input>
    </b-form-group>

    <!-- message -->
    <b-form-group>
      <b-form-textarea id="contact_message"
        v-model="contact.message"
        placeholder="Tu mensaje o consulta"
        :disabled="disabled"
        required
        :rows="3"
        :max-rows="6"></b-form-textarea>
    </b-form-group>

    <b-form-group class="text-center m-0">
      <b-button 
        type="submit" 
        variant="primary"
        :disabled="!hasText() || disabled">
        {{ ajaxMessage || 'Enviar mensaje' }}
      </b-button>
    </b-form-group>

  </b-form>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    },
    fromUserName: {
      type: String,
      required: false
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
    onSubmit() {
      this.$emit('submit');
    },
    hasText () {
      return this.contact.message != "";
    }
  }
};
</script>
