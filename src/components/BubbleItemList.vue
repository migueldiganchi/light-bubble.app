<template lang="html">
  <b-card
    img-alt="Card image"
    img-top
    footer-tag="footer"
    class="card gradient-top">
    <img :src="bubble.media_url">
    <div class="card-body">
      <router-link :to="'/bubble/' + bubble.id" class="bubble-item">
        <h5 class="card-title">{{ bubble.title }}</h5>
        <p class="card-text"><small>{{ bubble.description }}</small></p>
      </router-link>
      <div class="card-buttons">
        <b-button href="#" size="sm" variant="primary">
          Capturar
        </b-button>
        <b-button href="#" size="sm">
          No me gusta
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
  border: solid 1px #666;
}

.card img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
}

.card-body {
  position: relative;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 10px;
}

.card-body * {
  color: #f9f9f9;
  text-shadow: 1px 1px #666;
  text-decoration: none !important;
}

.card .bubble-item {
  display: block;
  color: #333;
  margin-bottom: 25px;
}

.card .card-buttons {
  text-align: right;
}

</style>