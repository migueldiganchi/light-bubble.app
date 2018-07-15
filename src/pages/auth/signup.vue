<template>
  <div class="signup-page">
    <h1 class="text-center">
      Registra tu cuenta
    </h1>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="5">
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group id="NameGroup"
                          label="Name:"
                          label-for="nameInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="nameInput"
                            v-model="name"
                            required
                            placeholder="Enter your name">
              </b-form-input>
            </b-form-group>

            <b-form-group id="EmailGroup"
                          label="Email address:"
                          label-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="email"
                            required
                            placeholder="Enter your email">
              </b-form-input>
            </b-form-group>

            <b-form-group id="PasswordGroup"
                          label="Your password:"
                          label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="password"
                            required
                            placeholder="Enter your password">
              </b-form-input>
            </b-form-group>

            <b-form-group id="PasswordConfirmationGroup"
                          label="Confirm your password:"
                          label-for="passwordConfirmationInput">
              <b-form-input id="passwordConfirmationInput"
                            type="password"
                            v-model="passwordConfirmation"
                            required
                            placeholder="Confirm your password">
              </b-form-input>
            </b-form-group>

            <br>
            <b-form-group id="exampleGroup4">
              <b-form-checkbox-group v-model="terms" id="exampleChecks">
                <b-form-checkbox>Acepto las condiciones de uso</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <br>
            <div class="text-center">
              <b-button type="submit" variant="primary">Create account</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
          <br>
          <br>
          <div class="text-center">
            <label>¿Ya tienes una cuenta?</label>
            <br>
            <router-link to="/signin">Ingresa</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axiosAuth from '@/axios-auth'

export default {
  data () {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
      terms: false
    }
  },
  methods: {
    onSubmit () {
      let data = {
        email: this.email,
        name: this.name,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
        terms: this.terms
      }

      axiosAuth.post('/signupNewUser?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358', {
        email: data.email,
        password: data.password,
        returnSecureToken: true
      })
        .then((response) => {
          console.log('response', response)
          alert('are we signin up? This is great :D')
        })
        .catch((error) => {
          console.info('error', error)
        })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordConfirmation = '';
      this.terms = false;
      this.$nextTick(() => { this.terms = false });
    }
  }
}
</script>