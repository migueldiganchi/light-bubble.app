<template>
  <div class="signin-page">
    <h1 class="text-center">
      Ingresar
    </h1>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
          <b-form @submit.prevent="onSubmit">
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
            <br>
            <div class="text-center">
              <b-button type="submit" 
                variant="primary"
                class="pull-right">Enter</b-button>
            </div>
          </b-form>
          <br>
          <br>
          <div class="text-center">
            <label>¿No tienes cuenta?</label>
            <br>
            <router-link to="/signup">Creala ahora!</router-link>
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
      password: ''
    }
  },
  methods: {
    onSubmit () {
      axiosAuth.post('/verifyPassword?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358', {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      })
        .then((response) => {
          console.log('response', response)
          alert('are we signin up? This is great :D')
        })
        .catch((error) => {
          console.info('error', error)
        })
    }
  }
}
</script>