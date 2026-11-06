<template>
  <a
    href="#main"
    class="sr-only z-[60] rounded-full bg-white px-4 py-2 font-semibold text-forest-800 shadow-lift focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
  >
    Skip to main content
  </a>
  <div id="top">
    <TopbarSection />
    <NavbarSection />
    <main id="main">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <FeatureHighlightsSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialSection />
      <FreeQuoteSection />
    </main>
    <FooterSection />
    <CopyrightsComponent />
  </div>
</template>

<script setup>
import TopbarSection from './sections/Topbar.vue'
import NavbarSection from './sections/Navbar.vue'
import HeroSection from './sections/Hero.vue'
import FeatureSection from './sections/Feature.vue'
import AboutSection from './sections/About.vue'
import FeatureHighlightsSection from './sections/FeatureHighlights.vue'
import ServiceSection from './sections/Services.vue'
import FreeQuoteSection from './sections/FreeQuote.vue'
import ProjectsSection from './sections/Projects.vue'
import TeamSection from './sections/Team.vue'
import TestimonialSection from './sections/Testimonial.vue'
import FooterSection from './sections/Footer.vue'
import CopyrightsComponent from './components/Copyrights.vue'

defineOptions({ name: 'App' })
</script>
