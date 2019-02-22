<template>
  <b-form @submit.prevent="onSubmit">
    <!-- name -->
    <b-form-group>
      <b-form-input
        type="text"
        v-model="fromUserName"
        placeholder="Danos un nombre"
        required></b-form-input>
    </b-form-group>

    <!-- email -->
    <b-form-group>
      <b-form-input id="contact_email"
        type="email"
        v-model="contact.email"
        required
        placeholder="Ingresa un correo">
      </b-form-input>
    </b-form-group>

    <!-- message -->
    <b-form-group>
      <b-form-textarea id="contact_message"
        v-model="contact.message"
        placeholder="Tu mensaje o consulta"
        :rows="3"
        :max-rows="6"></b-form-textarea>
    </b-form-group>

    <b-form-group class="text-center">
      <b-button 
        @click="goBack"
        variant="danger">
        Cancel
        </b-button>
      <b-button 
        type="submit" 
        variant="primary">
        Create
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
    }
  },
  methods: {
    onSubmit() {
      console.log('submitting...');
    }
  }
};
</script>
