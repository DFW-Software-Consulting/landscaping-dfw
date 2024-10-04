<template>
  <div id="app" class="overflow-x-hidden">
    <!-- Topbar (Will scroll away) -->
    <TopbarSection />

    <nav class="sticky top-0 z-50">
      <NavbarSection />
    </nav>

    <FeatureSection />
    <AboutSection />
    <!-- <FactSection /> -->
    <FeatureHighlightsSection />
    <ServiceSection />
    <FreeQuoteSection />
    <ProjectsSection />
    <TeamSection />
    <TestimonialSection />
    <FooterSection />
    <CopyrightsComponent />
  </div>
</template>

<script>
import TopbarSection from './sections/Topbar.vue'
import NavbarSection from './sections/Navbar.vue'
import FeatureSection from './sections/Feature.vue'
import AboutSection from './sections/About.vue'
// import FactSection from './sections/Fact.vue'
import FeatureHighlightsSection from './sections/FeatureHighlights.vue'
import ServiceSection from './sections/Services.vue'
import FreeQuoteSection from './sections/FreeQuote.vue'
import ProjectsSection from './sections/Projects.vue'
import TeamSection from './sections/Team.vue'
import TestimonialSection from './sections/Testimonial.vue'
import FooterSection from './sections/Footer.vue'
import CopyrightsComponent from './components/Copyrights.vue'

export default {
  name: 'App',
  components: {
    TopbarSection,
    NavbarSection,
    FeatureSection,
    AboutSection,
    // FactSection,
    FeatureHighlightsSection,
    ServiceSection,
    FreeQuoteSection,
    ProjectsSection,
    TeamSection,
    TestimonialSection,
    FooterSection,
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
