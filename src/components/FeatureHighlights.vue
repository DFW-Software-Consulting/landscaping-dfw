<template>
  <!-- Feature Highlight Start -->
  <div class="max-w-7xl mx-auto flex flex-wrap items-center gap-12 relative">
    <div class="w-full py-16 bg-gray-50 relative">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">Exceptional Services</h1>
      <p class="text-gray-600 mb-6">
        We offer top-notch services that enhance your experience and cater to all your gardening
        needs. With our team of experts, you can be assured of an outstanding transformation for
        your green space.
      </p>

      <!-- Image Section -->
      <div class="w-full relative">
        <img
          class="w-full rounded-lg shadow-md"
          src="../assets/img/carousel-1.jpg"
          alt="Highlight Feature"
        />

        <!-- Bullet Points Section: Overlay on the Image -->
        <ul
          class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 text-white space-y-2 bg-black bg-opacity-50 rounded-lg"
        >
          <li class="text-lg">High-quality plants and materials</li>
          <li class="text-lg">Experienced gardening professionals</li>
          <li class="text-lg">Customized design solutions</li>
        </ul>
      </div>

      <!-- Text Content Section -->
      <div class="w-full mt-6">
        <a class="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition" href="#">
          Learn More
        </a>
      </div>
    </div>
  </div>
  <!-- Feature Highlight End -->
</template>

<script>
export default {
  name: 'FeatureHighlight'
}
</script>

<style scoped>
/* Scoped styles for this component, if needed */
</style>
