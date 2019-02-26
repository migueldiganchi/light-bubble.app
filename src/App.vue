<template>
  <div id="app">
    <Navigator />
    <router-view/>
    <b-alert 
      :show="notification.message != null"
      variant="primary" 
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
        type: null,
        message: null,
        timeout: 3000
      },
    };
  },
  created () {
    this.$eventHub.$on('notify', this.handleNotification);
  },
  beforeDestroy () {
    alert('destroying?');
    this.$eventHub.$off('notify');
  },
  methods: {
    handleNotification (notification) {
      console.log('message', notification.message);
      let _context = this;
      this.notification.message = notification.message;
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
</style>
