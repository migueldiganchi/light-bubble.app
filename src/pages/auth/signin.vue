<template>
  <div class="signin-page">
    <h1 class="text-center">
      Ingresar
    </h1>
    <b-container>
      <b-row align-h="center">
        <b-col xs="12" md="9" lg="5">
          <b-form @submit.prevent="onSubmit">
            <b-form-group id="EmailGroup"
                          label="Correo electrónico:"
                          label-for="emailInput">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="email"
                            required
                            placeholder="Ingresa tu correo electrónico">
              </b-form-input>
            </b-form-group>

            <b-form-group id="PasswordGroup"
                          label="Contraseña:"
                          label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="password"
                            required
                            placeholder="Ingresa tu contraseña">
              </b-form-input>
            </b-form-group>
            <br>
            <div class="text-center">
              <b-button type="submit" 
                variant="primary"
                class="pull-right">
                  Entrar
              </b-button>
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
          this.$eventHub.$emit('notify', {
            message: 'Bienvenido!',
            type: 'success'
          });
          // go dashboard
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.info('error', error)
        })
    }
  }
}
</script>