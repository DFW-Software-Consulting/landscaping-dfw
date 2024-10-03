<template>
  <!-- Team Start -->
  <div class="w-full py-20">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mx-auto mb-10 max-w-lg">
        <p class="text-primary font-bold text-xl mb-2">Our Team</p>
        <h1 class="text-5xl font-bold mb-10">Dedicated & Experienced Team Members</h1>
      </div>

      <!-- Carousel for small screens and grid for medium & larger screens -->
      <div>
        <!-- Carousel (visible only on small screens) -->
        <div class="block md:hidden">
          <Carousel
            :slides="teamMembers"
            :autoplay="true"
            :autoplayDelay="5000"
            :showNavigation="true"
          >
            <template v-slot:default="{ slide }">
              <!-- Slide Container -->
              <div class="overflow-hidden rounded-lg shadow-lg mx-4">
                <img class="w-full h-auto" :src="slide.image" :alt="slide.name" />
                <div class="bg-white p-6 text-center">
                  <h4 class="text-2xl font-semibold mb-1">{{ slide.name }}</h4>
                  <p class="text-primary text-sm mb-4">{{ slide.role }}</p>
                  <div class="flex justify-center space-x-3">
                    <a
                      v-for="(link, linkIndex) in slide.socials"
                      :key="linkIndex"
                      :href="link.url"
                      class="text-primary text-lg"
                    >
                      <i :class="link.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Grid layout (visible only on medium and larger screens) -->
        <div class="hidden md:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="overflow-hidden rounded-lg shadow-lg"
          >
            <img class="w-full h-auto" :src="member.image" :alt="member.name" />
            <div class="bg-white p-6 text-center">
              <h4 class="text-2xl font-semibold mb-1">{{ member.name }}</h4>
              <p class="text-primary text-sm mb-4">{{ member.role }}</p>
              <div class="flex justify-center space-x-3">
                <a
                  v-for="(link, linkIndex) in member.socials"
                  :key="linkIndex"
                  :href="link.url"
                  class="text-primary text-lg"
                >
                  <i :class="link.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import teamImage1 from '../assets/img/team-1.jpg'
import teamImage2 from '../assets/img/team-2.jpg'
import teamImage3 from '../assets/img/team-3.jpg'

export default {
  name: 'TeamSection',
  components: {
    Carousel
  },
  data() {
    return {
      teamMembers: [
        {
          name: 'Doris Jordan',
          role: 'Landscape Designer',
          image: teamImage1,
          socials: [
            { icon: 'fab fa-facebook-f', url: '#' },
            { icon: 'fab fa-twitter', url: '#' },
            { icon: 'fab fa-instagram', url: '#' }
          ]
        },
        {
          name: 'Johnny Ramirez',
          role: 'Garden Designer',
          image: teamImage2,
          socials: [
            { icon: 'fab fa-facebook-f', url: '#' },
            { icon: 'fab fa-twitter', url: '#' },
            { icon: 'fab fa-instagram', url: '#' }
          ]
        },
        {
          name: 'Diana Wagner',
          role: 'Senior Gardener',
          image: teamImage3,
          socials: [
            { icon: 'fab fa-facebook-f', url: '#' },
            { icon: 'fab fa-twitter', url: '#' },
            { icon: 'fab fa-instagram', url: '#' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
