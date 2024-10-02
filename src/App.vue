<template>
  <div id="app">
    <!-- Import and use TopbarComponent -->
    <TopbarComponent />
    <!-- Other components or content can be added here later -->
  </div>
</template>

<script>
// Import the Topbar component
import TopbarComponent from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    TopbarComponent
  }
}
</script>

<style>
/* Any global styles for your app */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
