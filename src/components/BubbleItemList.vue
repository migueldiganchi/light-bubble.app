<template lang="html">
    <b-card
      img-alt="Card image"
      img-top
      footer-tag="footer"
      class="card gradient-bottom"
      style="background-image: url('https://placekitten.com/1000/300');">
      <div class="card-body">
        <router-link :to="'/bubble/' + bubble.id" class="bubble-item">
          <h2 class="card-title">{{ bubble.name }}</h2>
          <p class="card-text">{{ bubble.email }}</p>
        </router-link>
      </div>
      <div class="card-buttons">
        <b-button href="#" size="sm" variant="primary">
          Capturar
        </b-button>
        <b-button href="#" size="sm">
          No me gusta
        </b-button>
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
  color: #333 !important;
  border: solid 1px #999;
}

.card-body {
  * {
    display: initial !important;
    float: none !important;
  }
}

.card .bubble-item {
  color: #333;
  margin-bottom: 15px;
}

.card .card-buttons {
  text-align: right;
}

</style>