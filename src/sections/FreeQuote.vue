<template>
  <!-- Quote Start -->
  <section
    id="quote"
    class="w-full bg-cover bg-center py-20"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="max-w-5xl mx-auto py-10">
      <div class="flex justify-center">
        <div class="w-full lg:w-7/12 bg-white rounded-lg p-8 lg:p-10 shadow-lg">
          <h1 class="text-5xl text-center font-bold mb-10">Get A Free Quote</h1>
          <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-6">
            <!-- Input Field 1 -->
            <div class="w-full sm:w-1/2">
              <div class="relative">
                <input
                  type="text"
                  v-model="formData.name"
                  placeholder="Your Name"
                  class="w-full bg-gray-100 rounded-md p-4 border-0"
                />
              </div>
            </div>
            <!-- Input Field 2 -->
            <div class="w-full sm:w-1/2">
              <div class="relative">
                <input
                  type="email"
                  v-model="formData.email"
                  placeholder="Your Email"
                  class="w-full bg-gray-100 rounded-md p-4 border-0"
                />
              </div>
            </div>
            <!-- Input Field 3 -->
            <div class="w-full sm:w-1/2">
              <div class="relative">
                <input
                  type="text"
                  v-model="formData.mobile"
                  placeholder="Your Mobile"
                  class="w-full bg-gray-100 rounded-md p-4 border-0"
                />
              </div>
            </div>
            <!-- Input Field 4 -->
            <div class="w-full sm:w-1/2">
              <div class="relative">
                <input
                  type="text"
                  v-model="formData.service"
                  placeholder="Service Type"
                  class="w-full bg-gray-100 rounded-md p-4 border-0"
                />
              </div>
            </div>
            <!-- Message Textarea -->
            <div class="w-full">
              <div class="relative">
                <textarea
                  v-model="formData.message"
                  placeholder="Message"
                  rows="4"
                  class="w-full bg-gray-100 rounded-md p-4 border-0"
                ></textarea>
              </div>
            </div>
            <!-- Submit Button -->
            <div class="w-full text-center">
              <button
                type="submit"
                class="bg-primary text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-opacity-90"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Quote End -->
</template>

<script>
import backgroundImage from '../assets/img/carousel-2.jpg'

export default {
  name: 'QuoteSection',
  data() {
    return {
      backgroundImage,
      formData: {
        name: '',
        email: '',
        mobile: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission (e.g., send data to API)
      console.log('Form data:', this.formData)
      // Clear form after submission
      this.formData = {
        name: '',
        email: '',
        mobile: '',
        service: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
