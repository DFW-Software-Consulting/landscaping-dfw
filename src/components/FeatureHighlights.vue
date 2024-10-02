<template>
  <!-- Feature Highlight Start -->
  <div class="w-full py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center gap-12">
      <!-- Image Section -->
      <div class="w-full lg:w-1/2">
        <img class="w-full rounded-lg shadow-md" src="img/highlight.jpg" alt="Highlight Feature" />
      </div>

      <!-- Text Content Section -->
      <div class="w-full lg:w-1/2">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Exceptional Services</h1>
        <p class="text-gray-600 mb-6">
          We offer top-notch services that enhance your experience and cater to all your gardening
          needs. With our team of experts, you can be assured of an outstanding transformation for
          your green space.
        </p>
        <ul class="mb-6 list-disc list-inside space-y-2">
          <li class="text-gray-600">High-quality plants and materials</li>
          <li class="text-gray-600">Experienced gardening professionals</li>
          <li class="text-gray-600">Customized design solutions</li>
        </ul>
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
