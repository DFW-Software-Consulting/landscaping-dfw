<template>
  <!-- Footer Start -->
  <div class="w-full bg-gray-900 text-gray-200 py-20">
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Office Section -->
        <div class="text-left">
          <h4 class="text-white mb-4 text-lg font-semibold">Our Office</h4>
          <p class="mb-2 flex items-center">
            <i class="fa fa-map-marker-alt mr-3"></i>{{ metaData.address }}
          </p>
          <p class="mb-2 flex items-center">
            <i class="fa fa-phone-alt mr-3"></i>{{ metaData.phoneNumber }}
          </p>
          <p class="mb-2 flex items-center">
            <i class="fa fa-envelope mr-3"></i>{{ metaData.email }}
          </p>
          <div class="flex space-x-3 mt-4">
            <a
              class="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white"
              href="#"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              class="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white"
              href="#"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              class="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white"
              href="#"
              ><i class="fab fa-youtube"></i
            ></a>
            <a
              class="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white"
              href="#"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>

        <!-- Services Section -->
        <div class="text-left">
          <h4 class="text-white mb-4 text-lg font-semibold">Services</h4>
          <a class="block text-gray-300 hover:text-white transition" href="#">Landscaping</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Pruning plants</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Urban Gardening</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Garden Maintenance</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Green Technology</a>
        </div>

        <!-- Quick Links Section -->
        <div class="text-left">
          <h4 class="text-white mb-4 text-lg font-semibold">Quick Links</h4>
          <a class="block text-gray-300 hover:text-white transition" href="#">About Us</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Contact Us</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Our Services</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Terms & Condition</a>
          <a class="block text-gray-300 hover:text-white transition" href="#">Support</a>
        </div>

        <!-- Newsletter Section -->
        <div>
          <h4 class="text-white mb-4 text-lg font-semibold">Newsletter</h4>
          <p class="text-gray-300">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="relative mt-4">
            <input
              class="w-full bg-gray-100 border border-gray-300 text-gray-900 py-3 px-4 pr-16 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              class="absolute top-0 right-0 mt-2 mr-2 bg-primary text-white py-2 px-4 rounded"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<script>
import { metaData } from '@/data/metaData'

export default {
  name: 'FooterSection',
  data() {
    return {
      metaData
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
