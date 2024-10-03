<template>
  <!-- Projects Start -->
  <section id="project" class="w-full py-20">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mx-auto mb-10 max-w-lg">
        <p class="text-primary font-bold text-xl mb-2">Our Projects</p>
        <h1 class="text-5xl font-bold mb-5">Some Of Our Wonderful Projects</h1>
      </div>

      <!-- Carousels on small screens and grid on medium and larger screens -->
      <div>
        <!-- First Carousel (first three projects) visible on small screens -->
        <div class="block md:hidden mb-10">
          <Carousel
            :slides="projects.slice(0, 3)"
            :autoplay="true"
            :autoplayDelay="5000"
            :showNavigation="true"
          >
            <template v-slot:default="{ slide }">
              <!-- Slide Container -->
              <div class="overflow-hidden rounded-lg shadow-lg mx-4">
                <img class="w-full h-auto" :src="slide.image" :alt="slide.title" />
                <div class="bg-primary text-white p-4">
                  <h4 class="text-2xl font-semibold mb-3">{{ slide.title }}</h4>
                  <div class="flex space-x-3">
                    <a :href="slide.image" class="text-xl" data-lightbox="portfolio">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a href="#" class="text-xl">
                      <i class="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Second Carousel (remaining projects) visible on small screens -->
        <div class="block md:hidden">
          <Carousel
            :slides="projects.slice(3, 6)"
            :autoplay="true"
            :autoplayDelay="5000"
            :showNavigation="true"
          >
            <template v-slot:default="{ slide }">
              <!-- Slide Container -->
              <div class="overflow-hidden rounded-lg shadow-lg mx-4">
                <img class="w-full h-auto" :src="slide.image" :alt="slide.title" />
                <div class="bg-primary text-white p-4">
                  <h4 class="text-2xl font-semibold mb-3">{{ slide.title }}</h4>
                  <div class="flex space-x-3">
                    <a :href="slide.image" class="text-xl" data-lightbox="portfolio">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a href="#" class="text-xl">
                      <i class="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Grid layout (visible only on medium and larger screens) -->
        <div class="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="overflow-hidden rounded-lg shadow-lg"
          >
            <img class="w-full h-auto" :src="project.image" :alt="project.title" />
            <div class="bg-primary text-white p-4">
              <h4 class="text-2xl font-semibold mb-3">{{ project.title }}</h4>
              <div class="flex space-x-3">
                <a :href="project.image" class="text-xl" data-lightbox="portfolio">
                  <i class="fa fa-eye"></i>
                </a>
                <a href="#" class="text-xl">
                  <i class="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Projects End -->
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import { projects } from '@/data/projectData'

export default {
  name: 'ProjectsSection',
  components: {
    Carousel
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the projects section */
</style>
