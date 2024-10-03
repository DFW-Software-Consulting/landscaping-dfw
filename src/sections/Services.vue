<template>
  <!-- Services Section -->
  <section id="services" class="w-full py-20">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mx-auto mb-12" style="max-width: 500px">
        <p class="text-xl font-bold text-primary mb-2">Our Services</p>
        <h1 class="text-5xl font-bold mb-5">Services That We Offer For You</h1>
      </div>

      <!-- Slideshow on small screens and flex layout on medium and larger screens -->
      <div>
        <!-- Slideshow (visible only on small screens) -->
        <div class="block md:hidden">
          <Carousel
            :slides="services"
            :autoplay="true"
            :autoplayDelay="5000"
            :showNavigation="true"
          >
            <!-- Use Scoped Slot to Render Slide Content -->
            <template v-slot:default="{ slide }">
              <!-- Responsive Slide Container -->
              <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full mx-4">
                <!-- Responsive Image -->
                <img class="w-full h-40 object-cover" :src="slide.image" :alt="slide.title" />
                <!-- Slide Content -->
                <div class="p-6">
                  <div class="flex items-center justify-center mb-4">
                    <img
                      class="w-10 h-10 rounded-full bg-light mr-4"
                      :src="slide.icon"
                      :alt="`${slide.title} Icon`"
                    />
                    <h4 class="text-xl font-semibold">{{ slide.title }}</h4>
                  </div>
                  <p class="text-gray-600 mb-4 text-center">{{ slide.description }}</p>
                  <a
                    class="text-primary flex items-center justify-center text-sm font-medium"
                    href="#"
                  >
                    <i class="fa fa-plus text-primary mr-2"></i>Read More
                  </a>
                </div>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Flex layout (visible only on medium and larger screens) -->
        <div class="hidden md:flex flex-wrap gap-8 justify-center">
          <div v-for="(service, index) in services" :key="index" class="w-full lg:w-1/3 md:w-1/2">
            <!-- Slide Container -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full mx-4">
              <!-- Image -->
              <img class="w-full h-40 object-cover" :src="service.image" :alt="service.title" />
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center justify-center mb-4">
                  <img
                    class="w-10 h-10 rounded-full bg-light mr-4"
                    :src="service.icon"
                    :alt="`${service.title} Icon`"
                  />
                  <h4 class="text-xl font-semibold">{{ service.title }}</h4>
                </div>
                <p class="text-gray-600 mb-4 text-center">{{ service.description }}</p>
                <a
                  class="text-primary flex items-center justify-center text-sm font-medium"
                  href="#"
                >
                  <i class="fa fa-plus text-primary mr-2"></i>Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import serviceImage1 from '../assets/img/service-1.jpg'
import serviceIcon1 from '../assets/img/icon/icon-3.png'
import serviceImage2 from '../assets/img/service-2.jpg'
import serviceIcon2 from '../assets/img/icon/icon-6.png'
import serviceImage3 from '../assets/img/service-3.jpg'
import serviceIcon3 from '../assets/img/icon/icon-5.png'

export default {
  name: 'ServicesSection',
  components: {
    Carousel
  },
  data() {
    return {
      services: [
        {
          title: 'Landscaping',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage1,
          icon: serviceIcon1
        },
        {
          title: 'Pruning Plants',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage2,
          icon: serviceIcon2
        },
        {
          title: 'Irrigation & Drainage',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage3,
          icon: serviceIcon3
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Styles for the services section */
</style>
