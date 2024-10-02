<template>
  <!-- Services Start -->
  <div class="w-full py-20">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mx-auto mb-12" style="max-width: 500px">
        <p class="text-xl font-bold text-primary mb-2">Our Services</p>
        <h1 class="text-5xl font-bold mb-5">Services That We Offer For You</h1>
      </div>

      <!-- Service Items -->
      <div class="flex flex-wrap gap-8">
        <div v-for="(service, index) in services" :key="index" class="w-full lg:w-1/3 md:w-1/2 animate-fade-in"
          :style="{ animationDelay: `${service.delay}s` }">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <img class="w-full h-48 object-cover" :src="service.image" :alt="service.title" />
            <div class="p-6">
              <div class="flex items-center justify-center bg-light rounded-full w-16 h-16 mx-auto mb-4">
                <img class="w-10 h-10" :src="service.icon" :alt="`${service.title} Icon`" />
              </div>
              <h4 class="text-xl font-semibold mb-3">{{ service.title }}</h4>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <a class="text-primary flex items-center justify-center text-sm font-medium" href="#">
                <i class="fa fa-plus text-primary mr-2"></i>Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Services End -->
</template>

<script>
import serviceImage1 from '../assets/img/service-1.jpg'
import serviceIcon1 from '../assets/img/icon/icon-3.png'
import serviceImage2 from '../assets/img/service-2.jpg'
import serviceIcon2 from '../assets/img/icon/icon-6.png'
import serviceImage3 from '../assets/img/service-3.jpg'
import serviceIcon3 from '../assets/img/icon/icon-5.png'

export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Landscaping',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage1,
          icon: serviceIcon1,
          delay: 0.1
        },
        {
          title: 'Pruning Plants',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage2,
          icon: serviceIcon2,
          delay: 0.3
        },
        {
          title: 'Irrigation & Drainage',
          description:
            'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          image: serviceImage3,
          icon: serviceIcon3,
          delay: 0.5
        }
        // You can add more service items here
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
