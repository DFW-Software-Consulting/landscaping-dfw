<template>
  <!-- Team Start -->
  <div class="w-full py-20">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mx-auto mb-10 max-w-lg">
        <p class="text-primary font-bold text-xl mb-2">Our Team</p>
        <h1 class="text-5xl font-bold mb-10">Dedicated & Experienced Team Members</h1>
      </div>

      <!-- Team Members Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  <!-- Team End -->
</template>

<script>
import teamImage1 from '../assets/img/team-1.jpg'
import teamImage2 from '../assets/img/team-2.jpg'
import teamImage3 from '../assets/img/team-3.jpg'

export default {
  name: 'TeamSection',
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
