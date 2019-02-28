<template>
  <div id="app">
    <Navigator />
    <router-view/>
    <b-alert 
      :show="notification.message != null"
      :variant="notification.type" 
      class="box-shadow">{{ notification.message }}</b-alert>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'

export default {
  name: 'App',
  components: {
    Navigator
  },
  data () {
    return {
      notification: {
        id: null,
        type: '',
        message: null,
        timeout: 3000
      },
    };
  },
  created () {
    this.$eventHub.$on('notify', this.handleNotification);
  },
  beforeDestroy () {
    console.info('destroying App.vue');
    this.$eventHub.$off('notify');
  },
  methods: {
    handleNotification (notification) {
      let _context = this;
      this.notification = notification;
      this.notification.timeout = notification.timeout ? notification.timeout : 3000;
      setTimeout(() => {
        // clear notification
        _context.notification = {
          id: null,
          type: null,
          message: null,
          timeout: _context.notification.timeout
        };
      }, this.notification.timeout);
    }
  }
}
</script>

<style>
  div.alert {
    position: fixed;
    bottom: 0px;
    left: 15px;
  }

  @media screen and (max-width: 450px) {
    div.alert {
      right: 15px;
    }
  }
</style>
