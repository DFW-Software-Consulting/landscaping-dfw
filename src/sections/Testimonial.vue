<template>
  <!-- Testimonial Start -->
  <div class="w-full py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-10">
        <!-- Left Column -->
        <div class="space-y-6">
          <p class="text-primary font-bold text-xl">Testimonial</p>
          <h1 class="text-5xl font-bold mb-6">What Our Clients Say About Us!</h1>
          <p class="mb-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <a href="#" class="bg-primary text-white py-3 px-6 rounded-md">See More</a>
        </div>

        <!-- Right Column: Carousel on small screens and grid on medium/larger screens -->
        <div>
          <!-- Carousel for small screens -->
          <div class="block md:hidden">
            <Carousel
              :slides="testimonials"
              :autoplay="true"
              :autoplayDelay="5000"
              :showNavigation="true"
            >
              <template v-slot:default="{ slide }">
                <!-- Slide Container -->
                <div class="bg-white p-6 rounded-lg shadow-lg mx-4">
                  <img
                    class="w-16 h-16 rounded-full mx-auto mb-4"
                    :src="slide.image"
                    :alt="slide.clientName"
                  />
                  <p class="text-lg text-gray-700">
                    {{ slide.text }}
                  </p>
                  <h4 class="text-xl font-semibold mt-4">{{ slide.clientName }}</h4>
                  <span class="text-sm text-gray-500">{{ slide.profession }}</span>
                </div>
              </template>
            </Carousel>
          </div>

          <!-- Grid for medium and larger screens -->
          <div class="hidden md:grid gap-8">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                class="w-16 h-16 rounded-full mx-auto mb-4"
                :src="testimonial.image"
                :alt="testimonial.clientName"
              />
              <p class="text-lg text-gray-700">
                {{ testimonial.text }}
              </p>
              <h4 class="text-xl font-semibold mt-4">{{ testimonial.clientName }}</h4>
              <span class="text-sm text-gray-500">{{ testimonial.profession }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Testimonial End -->
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import testimonialImage1 from '../assets/img/testimonial-1.jpg'
import testimonialImage2 from '../assets/img/testimonial-2.jpg'

export default {
  name: 'TestimonialSection',
  components: {
    Carousel
  },
  data() {
    return {
      testimonials: [
        {
          clientName: 'Doris Jordan',
          profession: 'Landscape Designer',
          text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
          image: testimonialImage1
        },
        {
          clientName: 'Johnny Ramirez',
          profession: 'Garden Designer',
          text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
          image: testimonialImage2
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
