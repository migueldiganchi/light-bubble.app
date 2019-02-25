<template lang="html">
  <b-card
    img-alt="Card image"
    img-top
    footer-tag="footer"
    class="card gradient-top p-0">
    <img :src="bubble.media_url">
    <div class="card-body-holder p-0">
      <router-link :to="'/bubble/' + bubble.id" 
        class="bubble-item bg-tr-gradient-down p-3">
        <h5 class="card-title text-shadow-dark">{{ bubble.title }}</h5>
        <p class="card-text">
          <small class="text-shadow-dark" v-text="maxLength(bubble.description)"></small></p>
      </router-link>
      <div class="card-buttons">
        <b-button size="sm" 
          variant="success" 
          class="box-shadow">
            Votar
        </b-button>
        <b-button size="sm" 
          variant="info" 
          class="box-shadow">
            Donar
        </b-button>
        <b-button size="sm" 
          variant="danger" 
          class="box-shadow">
            Denunciar
        </b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    bubble: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      max: 36
    }
  },
  methods: {
    maxLength(text) {
      let result = '';
      if (text.length > this.max) {
        result = text.substring(0, this.max) + '...';
      } else {
        result = text;
      }

      return result;
    }
  }
}
</script>

<style>
.card {
  margin: 10px 0 !important;
  color: #333;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 0 !important;
}

.card img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
}

.card-body {
  padding: 0 !important;
}

.card-body-holder {
  position: relative;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 100;
  padding: 0 !important;
}

.card .bubble-item {
  display: block;
  color: #333;
  margin-bottom: 25px;
  padding: 9px;
  position: relative;
}

.card-body-holder * {
  color: #f9f9f9;
  text-shadow: 1px 1px #666;
  text-decoration: none !important;
}

.card .card-body-holder {
  min-height: 150px !important;
}

.card .card-body-holder .card-buttons {
  text-align: right;
  position: absolute;
  bottom: 15px;
  right: 15px;
  left: 15px;
}

</style>