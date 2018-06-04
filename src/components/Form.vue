<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
        description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-file
          v-model="file"
          placeholder="Bubble file..."
          class="border-primary"></b-form-file>
      </b-form-group>
      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3">
        <b-form-select id="exampleInput3"
          :options="foods"
          required
          v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group>
        <b-form-textarea id="textarea1"
          v-model="text"
          placeholder="Buble descriptionSb"
          :rows="3"
          :max-rows="6"></b-form-textarea>
      </b-form-group>
      <div class="buttons">
        <b-button type="submit" variant="primary">Send</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Tipo', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
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
