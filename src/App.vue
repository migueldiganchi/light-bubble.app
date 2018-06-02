<template>
  <div id="app">
    <Navigator />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'

export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  padding: 15px;
}
</style>
