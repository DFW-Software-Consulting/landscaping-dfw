<template>
  <!-- Topbar Start -->
  <div class="bg-gray-900 text-gray-200 px-0 py-2">
    <div class="hidden lg:flex justify-between px-5">
      <div class="flex space-x-8">
        <!-- Phone Contact -->
        <div class="flex items-center space-x-2">
          <i class="fa fa-phone-alt"></i>
          <span>+012 345 6789</span>
        </div>
        <!-- Email Contact -->
        <div class="flex items-center space-x-2">
          <i class="far fa-envelope"></i>
          <span>info@example.com</span>
        </div>
      </div>
      <!-- Social Media Links -->
      <div class="flex items-center space-x-4">
        <span>Follow Us:</span>
        <a href="#" class="text-gray-200 hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-gray-200 hover:text-gray-400"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-gray-200 hover:text-gray-400"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="text-gray-200 hover:text-gray-400"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <!-- Topbar End -->
</template>

<script>
export default {
  name: 'Top-bar'
}
</script>

<style scoped>
/* custom scoped styles outisde of tailwind classes */
</style>
