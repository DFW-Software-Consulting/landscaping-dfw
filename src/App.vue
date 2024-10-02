<template>
  <div id="app">
    <!-- Import and use TopbarComponent -->
    <TopbarComponent />
    <!-- Import and use NavbarComponent -->
    <NavbarComponent />
    <!-- Other components or content can be added here later -->
    <FeatureComponent />

    <AboutComponent />

    <FactComponent />
  </div>
</template>

<script>
// Import the components
import TopbarComponent from './components/Topbar.vue'
import NavbarComponent from './components/Navbar.vue'
import FeatureComponent from './components/Feature.vue'
import AboutComponent from './components/About.vue'
import FactComponent from './components/Fact.vue'

export default {
  name: 'App',
  components: {
    TopbarComponent,
    NavbarComponent,
    FeatureComponent,
    AboutComponent,
    FactComponent
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
