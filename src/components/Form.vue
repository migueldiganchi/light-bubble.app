<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2"
          type="text"
          v-model="bubble.title"
          required
          placeholder="Idea title">
        </b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-textarea id="textarea1"
          v-model="bubble.description"
          placeholder="Buble description"
          :rows="3"
          :max-rows="6"></b-form-textarea>
      </b-form-group>

      <b-form-group>
        <b-form-input
          v-model="bubble.media_url"
          placeholder="Image url"
          class="border-primary"></b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3">
        <b-form-select id="exampleInput3"
          :options="types"
          required
          v-model="bubble.type">
        </b-form-select>
      </b-form-group>

      <div class="buttons text-center">
        <b-button type="reset" variant="danger">Cancel</b-button>
        <b-button type="submit" variant="primary">Create</b-button>
      </div>

    </b-form>
  </div>
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
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.bubble.name = '';
      this.bubble.description = '';
      this.bubble.media_url = '';
      this.bubble.type = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style media="screen">
.custom-file-label::after {
  content: "Up";
}
.buttons {
  margin-top: 30px;
}
.buttons button {
  margin: 5px;
}
</style>
