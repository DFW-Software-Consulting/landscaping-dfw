<template>
  <!-- Copyright Start -->
  <div class="w-full bg-gray-800 text-gray-300 py-4">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Left Text -->
        <div class="text-center md:text-left mb-3 md:mb-0">
          &copy;
          <a
            class="border-b border-transparent hover:border-gray-300"
            targer
            :href="metaData.credits.companyWebsite"
          >
            {{ metaData.credits.companyName }} </a
          >, All Right Reserved.
        </div>

        <!-- Right Text -->
        <div class="text-center md:text-right">
          Designed By
          <a
            class="border-b border-transparent hover:border-gray-300"
            :href="metaData.credits.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            >{{ metaData.credits.author }}</a
          >
          Distributed By
          <a
            class="border-b border-transparent hover:border-gray-300"
            :href="metaData.credits.companyWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ metaData.credits.companyName }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Copyright End -->

  <!-- Back to Top -->
  <a
    href="#"
    @click.prevent="scrollToTop"
    class="fixed bottom-5 right-5 p-4 bg-primary bg-slate-700 text-white rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
  >
    <i class="bi bi-arrow-up">^</i>
  </a>
</template>

<script>
import { metaData } from '@/data/metaData'

export default {
  name: 'CopyrightComponent',
  data() {
    return {
      metaData
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
