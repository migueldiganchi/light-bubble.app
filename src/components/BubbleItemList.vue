<template lang="html">
  <b-card
    img-alt="Card image"
    img-top
    footer-tag="footer"
    class="list-item card gradient-top p-0">
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
            @click="click"
          class="box-shadow">
            Votar
        </b-button>
        <b-button size="sm" 
          variant="info" 
            @click="click"
          class="box-shadow">
            Donar
        </b-button>
        <b-button size="sm" 
          @click="click"
          class="box-shadow">
            Opinar
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
    },
    click () {
      this.$eventHub.$emit('notify', {
        message: '@todo',
        type: 'warning'
      });
    }
  }
}
</script>

<style>
.list-item.card {
  margin: 10px 0 !important;
  color: #333;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 0 !important;
}

.list-item.card img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
}

.list-item.card .card-body {
  padding: 0 !important;
}

.list-item.card .card-body-holder {
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

.list-item.card .bubble-item {
  display: block;
  color: #333;
  margin-bottom: 25px;
  padding: 9px;
  position: relative;
}

.list-item.card .card-body-holder * {
  color: #f9f9f9;
  text-shadow: 1px 1px #666;
  text-decoration: none !important;
}

.card .card-body-holder {
  min-height: 150px !important;
}

.list-item.card .card-body-holder .card-buttons {
  text-align: right;
  position: absolute;
  bottom: 12px;
  right: 12px;
}

.list-item.card .card-body-holder .card-buttons .btn {
  margin: 0 1px;
}
</style>