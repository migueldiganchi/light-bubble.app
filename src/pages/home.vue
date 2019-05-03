<template lang="html">
  <div id="home">
    <div class="text-center">
      <AppPresentation />
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
          <router-link :to="'/bubbles'">
            <span>Ver más causas</span>
          </router-link>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import BubbleItemList from '@/components/BubbleItemList';
import AppPresentation from '@/components/UI/AppPresentation';

export default {
  components: {
    Carousel,
    BubbleItemList,
    AppPresentation
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
