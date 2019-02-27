<template lang="html">
  <div id="home">
    <div class="text-center">
      <b-jumbotron
        id="presentation"
        fluid
        header="Marketing caritativo"
        lead="Realiza una donación a cambio de tiempo de publicidad">
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
    </div>

    <b-container class="last-bubbles">
      <b-row>
        <b-col cols="12 text-center">
          <h5 class="mb-3">
            Últimas causas registradas
          </h5>
        </b-col>
        <b-col cols="12"
          col lg="6"
          v-for="bubble in lastBubbles"
          :key="bubble.id">
          <BubbleItemList :bubble="bubble" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center pt-1 pb-3">
          <router-link :to="'/'">
            <span>Ver más causas</span>
          </router-link>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import BubbleItemList from '@/components/BubbleItemList'

export default {
  components: {
    Carousel,
    BubbleItemList
  },
  computed: {
    lastBubbles () {
      return this.$store.getters.bubbles
    }
  },
  created () {
    this.$store.dispatch('loadBubbles')
  }
}
</script>

<style>
  .carousel-container {
    margin-bottom: 30px;
  }
  #home .card {
    height: 180px;
  }
  .btn {
    margin: auto 5px;
  }


  .modal-body p, 
  .modal-body {
    color: #333 !important;
    text-shadow: 1px 1px 1px #999 !important;
  }

  .modal-body .number {
    display: inline-block;
    min-height: 100%;
    text-shadow: 1px 1px 1px #999 !important;
  }

  .modal-body p {
    padding: 0;
    padding-left: 18px;
    margin-right: 33px !important;
    position: relative !important;
    left: 33px;
    margin-bottom: 27px !important;
  }

  .modal-body p:last-child {
    margin-bottom: 0 !important;
  }

  .modal-body p::before {
    display: inline-block;
    background-color: #c9c9c9;
    color: #111;
    content: "";
    left: -30px;
    width: 36px;
    height: 36px;
    line-height: 33px;
    position: absolute;
    top: 3px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    font-size: 12px;
    border: solid 1px #999;
  }

  .modal-body p.one::before {
    content: '1';
  }

  .modal-body p.two::before {
    content: '2';
  }

  .modal-body p.three::before {
    content: '3';
  }

  @media screen and (max-width: 416px) {
    .modal-footer .row .col:first-child {
      margin-bottom: 15px;
    }

  }

  @media screen and (max-width: 564px) {
    #presentation .buttons-holder {
      padding: 21px 0 0 0 !important;
    }
    #presentation .buttons-holder .btn { 
      display: block !important;
      width: initial;
      width: 100%;
      margin: 0 0 15px;
    }

    #presentation .buttons-holder .btn:last-child { 
      margin-bottom: 0 !important;
    }
  }

</style>
