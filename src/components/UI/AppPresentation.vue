<template>
  <b-jumbotron
    id="presentation"
    fluid
    header="Marketing caritativo"
    lead="Realiza una donación a cambio de publicidad y ayuda a personas que lo necesitan">
    <div class="buttons-holder pt-3 pb-2">
      <b-btn to="/signup"
        variant="primary">
        Registrar una cuenta
      </b-btn>
      <b-btn to="/signin"
        variant="success">
        Iniciar sesión
      </b-btn>
      <b-btn 
        v-b-modal.tutorial
        variant="warning">
        ¿Como funciona?
      </b-btn>
    </div>
    <b-modal 
      id="tutorial" 
      title="¿Cómo funciona?"
      class="text-left">
      <p class="one">
        Selecciona una de las causas registradas en nuestra plataforma
      </p>
      <p class="two">
        Realiza una donación a la causa seleccionada para  
        configurar la duración de tu nueva publicidad
      </p>
      <p class="three">
        Publica y disfruta de tu marca formando parte de algo grande
      </p>
      <div slot="modal-footer" class="w-100 p-1">
        <b-row
          class="row flow">
          <b-col col xs="12" lg="6">
            <b-btn to="/signup"
              variant="primary"
              class="btn-block">
              Registrar mi cuenta
            </b-btn>
          </b-col>
          <b-col col xs="12" lg="6">
            <b-btn to="/signin"
              variant="success"
              class="btn-block text-shadow">
              Iniciar sesión
            </b-btn>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </b-jumbotron>
</template>

