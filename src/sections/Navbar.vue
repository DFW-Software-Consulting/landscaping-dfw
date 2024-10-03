<template>
  <!-- Navbar Start -->
  <nav class="bg-white sticky top-0 w-full flex items-center justify-between p-0 shadow-md">
    <!-- Brand Logo -->
    <a href="index.html" class="flex items-center px-4 lg:px-5">
      <!-- Use the imported logo as the source -->
      <img :src="logo" alt="Logo" class="w-10 h-auto mr-2" />
      <h1 class="text-xl font-bold m-0">DFW Landscaping Company</h1>
    </a>
    <!-- Mobile Menu Toggle Button -->
    <button type="button" class="lg:hidden p-4" @click="toggleNavbar">
      <span class="fas fa-bars"></span>
    </button>
    <!-- Navbar Links and Actions -->
    <div
      :class="[
        'lg:flex lg:items-center lg:flex-grow lg:justify-between',
        isNavbarOpen ? 'block' : 'hidden'
      ]"
      id="navbarCollapse"
    >
      <div
        class="flex flex-col lg:flex-row lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0"
      >
        <a href="index.html" class="text-gray-700 hover:text-gray-900 font-semibold">Home</a>
        <a href="#about" class="text-gray-700 hover:text-gray-900 font-semibold">About</a>
        <a href="#services" class="text-gray-700 hover:text-gray-900 font-semibold">Services</a>
        <a href="#project" class="text-gray-700 hover:text-gray-900 font-semibold">Projects</a>
        <!-- Dropdown Menu -->
        <div class="relative group">
          <a href="#" class="text-gray-700 hover:text-gray-900 font-semibold cursor-pointer"
            >Pages</a
          >
          <div
            class="hidden absolute bg-white shadow-lg rounded mt-2 w-40 group-hover:flex flex-col space-y-2"
          >
            <a href="feature.html" class="px-4 py-2 hover:bg-gray-100">Features</a>
            <a href="#quote" class="px-4 py-2 hover:bg-gray-100">Free Quote</a>
            <a href="team.html" class="px-4 py-2 hover:bg-gray-100">Our Team</a>
            <a href="testimonial.html" class="px-4 py-2 hover:bg-gray-100">Testimonial</a>
            <a href="404.html" class="px-4 py-2 hover:bg-gray-100">404 Page</a>
          </div>
        </div>
        <a href="#contact" class="text-gray-700 hover:text-gray-900 font-semibold">Contact</a>
      </div>
      <!-- Get A Quote Button -->
      <a
        href="#quote"
        class="hidden lg:inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Get A Quote <i class="fa fa-arrow-right ml-3"></i>
      </a>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>
import logo from '../assets/img/icon/icon-10.png' // Import the logo image

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isNavbarOpen: false,
      logo // Reference the imported logo in data
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
    }
  }
}
</script>

<style scoped>
/* Custom styles (if needed) */
</style>
