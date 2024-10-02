<template>
  <!-- Facts Start -->
  <div
    class="w-full my-10 py-20 bg-fixed bg-cover"
    style="background-image: url('../assets/img/carousel-1.jpg')"
  >
    <div class="max-w-7xl mx-auto py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(fact, index) in facts"
          :key="index"
          class="text-center animate-fade-in"
          :style="{ animationDelay: `${fact.delay}s` }"
        >
          <h1 class="text-5xl font-bold text-white">{{ fact.count }}</h1>
          <span class="text-lg font-semibold text-white">{{ fact.label }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Facts End -->
</template>

<script>
export default {
  name: 'FactsSection',
  data() {
    return {
      facts: [
        { label: 'Happy Clients', count: 1234, delay: 0.1 },
        { label: 'Garden Completed', count: 1234, delay: 0.3 },
        { label: 'Dedicated Staff', count: 1234, delay: 0.5 },
        { label: 'Awards Achieved', count: 1234, delay: 0.7 }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any custom scoped styles here */
</style>
