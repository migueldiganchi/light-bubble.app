<template>
    <b-form @submit.prevent="onSubmit" v-if="show">
      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2"
          type="text"
          v-model="bubble.title"
          required
          placeholder="Nombre de la ONG">
        </b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-textarea id="textarea1"
          v-model="bubble.description"
          placeholder="Descripción de las actividades principales de la entidad registrada"
          :rows="3"
          :max-rows="6"></b-form-textarea>
      </b-form-group>

      <b-form-group>
        <b-form-input
          type="text"
          v-model="bubble.media_url"
          placeholder="URL de una imagen representativa"
          required></b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3">
        <b-form-select id="exampleInput3"
          :options="types"
          required
          v-model="bubble.type">
        </b-form-select>
      </b-form-group>

      <div class="mt-5 actions text-center">
        <b-button 
          @click="goBack"
          variant="danger">
          Cancelar
          </b-button>
        <b-button 
          type="submit" 
          variant="primary">
          Crear
        </b-button>
      </div>
    </b-form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      bubble: {
        title: '',
        description: '',
        media_url: '',
        type: null
      },
      types: [
        { text: 'Tipo', value: null },
        'Personas', 'Animales', '', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      axios.post('/bubbles.json', this.bubble)
        .then((response) => {
          var bubbleId = response.data.name;
          this.$router.push('/bubble/' + bubbleId)
        })
        .catch((error) => {
          console.info('error', error)
        })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.custom-file-label::after {
  content: "Up";
}
</style>
