<template>
  <div class="relative overflow-hidden w-full">
    <!-- Carousel Container -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Carousel Slides -->
      <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
        <slot :slide="slide"></slot>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      v-if="showNavigation"
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full border-2 border-transparent hover:border-gray-700 transition duration-300"
    >
      &lt;
    </button>
    <button
      v-if="showNavigation"
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full border-2 border-transparent hover:border-gray-700 transition duration-300"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    slides: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    autoplayDelay: {
      type: Number,
      default: 3000
    },
    showNavigation: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: null
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
    startAutoplay() {
      if (this.autoplay) {
        this.interval = setInterval(this.nextSlide, this.autoplayDelay)
      }
    },
    stopAutoplay() {
      clearInterval(this.interval)
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  }
}
</script>

<style scoped>
/* Add any additional styles for the carousel if needed */
</style>
