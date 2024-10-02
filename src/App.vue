<template>
  <div id="app">
    <TopbarComponent />

    <NavbarComponent />

    <FeatureComponent />

    <AboutComponent />

    <!-- <FactComponent /> -->

    <FeatureHighlightsComponent />

    <ServiceComponent />

    <FreeQuoteComponent />

    <ProjectsComponent />

    <TeamComponent />

    <TestimonialComponent />

    <FooterComponent />

    <CopyrightsComponent />
  </div>
</template>

<script>
// Import the components
import TopbarComponent from './components/Topbar.vue'
import NavbarComponent from './components/Navbar.vue'
import FeatureComponent from './components/Feature.vue'
import AboutComponent from './components/About.vue'
// import FactComponent from './components/Fact.vue'
import FeatureHighlightsComponent from './components/FeatureHighlights.vue'
import ServiceComponent from './components/Services.vue'
import FreeQuoteComponent from './components/FreeQuote.vue'
import ProjectsComponent from './components/Projects.vue'
import TeamComponent from './components/Team.vue'
import TestimonialComponent from './components/Testimonial.vue'
import FooterComponent from './components/Footer.vue'
import CopyrightsComponent from './components/Copyrights.vue'

export default {
  name: 'App',
  components: {
    TopbarComponent,
    NavbarComponent,
    FeatureComponent,
    AboutComponent,
    // FactComponent,
    FeatureHighlightsComponent,
    ServiceComponent,
    FreeQuoteComponent,
    ProjectsComponent,
    TeamComponent,
    TestimonialComponent,
    FooterComponent,
    CopyrightsComponent
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
