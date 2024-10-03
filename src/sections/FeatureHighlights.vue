<template>
  <!-- Feature Highlight Start -->
  <h1 class="text-4xl font-bold mb-6">Exceptional Services</h1>
  <p class="text-lg mb-8">
    We offer top-notch services that enhance your experience and cater to all your gardening needs.
    With our team of experts, you can be assured of an outstanding transformation for your green
    space.
  </p>
  <div class="w-full my-10 py-20 bg-fixed bg-cover bg-center text-white"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="max-w-7xl mx-auto py-10">
      <!-- Title and Description -->

      <!-- Bullet Points Section: Overlay on the Image -->
      <ul class="list-disc list-inside space-y-6 font-bold text-3xl font-baltimore">
        <li>High-quality plants and materials</li>
        <li>Experienced gardening professionals</li>
        <li>Customized design solutions</li>
      </ul>

      <!-- Button -->
      <div class="mt-8">
        <a class="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition" href="#">
          Learn More
        </a>
      </div>
    </div>
  </div>
  <!-- Feature Highlight End -->
</template>

<script>
// Import the image from assets
import backgroundImage from '../assets/img/carousel-1.jpg'

export default {
  name: 'FeatureHighlight',
  data() {
    return {
      backgroundImage
    }
  }
}
</script>

<style scoped>
/* Scoped styles for this component, if needed */
</style>
