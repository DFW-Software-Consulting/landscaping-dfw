<template>
  <!-- Topbar Start -->
  <div class="bg-gray-900 text-gray-200 px-0 py-2">
    <div class="hidden lg:flex justify-between px-5">
      <div class="flex space-x-8">
        <!-- Phone Contact -->
        <div class="flex items-center space-x-2">
          <i class="fa fa-phone-alt"></i>
          <span>{{ metaData.phoneNumber }}</span>
        </div>
        <!-- Email Contact -->
        <div class="flex items-center space-x-2">
          <i class="far fa-envelope"></i>
          <span>{{ metaData.email }}</span>
        </div>
      </div>
      <!-- Social Media Links -->
      <div class="flex items-center space-x-4">
        <span>Follow Us:</span>
        <a :href="metaData.socialMedia.facebook" class="text-gray-200 hover:text-gray-400">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a :href="metaData.socialMedia.twitter" class="text-gray-200 hover:text-gray-400">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="metaData.socialMedia.linkedin" class="text-gray-200 hover:text-gray-400">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a :href="metaData.socialMedia.instagram" class="text-gray-200 hover:text-gray-400">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- Topbar End -->
</template>

<script>
import { metaData } from '@/data/metaData'

export default {
  name: 'Top-bar',
  data() {
    return {
      metaData
    }
  }
}
</script>

<style scoped>
/* custom scoped styles outside of tailwind classes */
</style>
