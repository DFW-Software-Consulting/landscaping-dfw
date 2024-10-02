<template>
  <!-- About Start -->
  <div class="w-full py-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap items-end gap-12">
        <!-- Image Section -->
        <div class="w-full md:w-5/12 lg:w-3/12 animate-fade-in-up">
          <img class="w-full rounded-lg" src="../assets/img/about.jpg" alt="About Us" />
        </div>

        <!-- Main Content -->
        <div class="w-full md:w-7/12 lg:w-6/12 animate-fade-in-up">
          <h1 class="text-6xl font-bold text-blue-600 mb-0">25</h1>
          <p class="text-blue-600 text-lg mb-4">Year of Experience</p>
          <h2 class="text-4xl font-semibold mb-4">We Make Your Home Like A Garden</h2>
          <p class="text-gray-600 mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet
          </p>
          <a class="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition" href="">Explore
            More</a>
        </div>

        <!-- Info Boxes -->
        <div class="w-full flex md:w-full lg:w-3/12 animate-fade-in-up">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
            <!-- Box 1 -->
            <div class="border-l-4 border-blue-600 pl-4">
              <i class="fa fa-award text-blue-600 text-3xl mb-3"></i>
              <h4 class="text-lg font-semibold mb-2">Award Winning</h4>
              <p class="text-gray-600">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              </p>
            </div>
            <!-- Box 2 -->
            <div class="border-l-4 border-blue-600 pl-4">
              <i class="fa fa-users text-blue-600 text-3xl mb-3"></i>
              <h4 class="text-lg font-semibold mb-2">Dedicated Team</h4>
              <p class="text-gray-600">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
/* If you have any additional custom styles for this component, add them here */
</style>
