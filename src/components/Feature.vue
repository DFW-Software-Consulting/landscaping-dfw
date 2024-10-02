<template>
  <!-- Top Feature Start -->
  <div class="w-full py-5 lg:pt-0 bg-gray-100">
    <div class="max-w-7xl mx-auto py-5 lg:pt-0">
      <div class="flex flex-wrap -mx-4">
        <!-- Feature 1 -->
        <div
          class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="bg-white shadow-lg flex items-center h-full px-5 min-h-[160px]">
            <div class="flex items-center">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary text-xl"
              >
                <i :class="feature.icon" class="text-blue-600"></i>
              </div>
              <div class="ml-3">
                <h4 class="text-lg font-bold">{{ feature.title }}</h4>
                <span class="text-gray-600">{{ feature.description }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Top Feature End -->
</template>

<script>
export default {
  name: 'TopFeatures',
  data() {
    return {
      features: [
        {
          title: 'No Hidden Cost',
          description: 'Clita erat ipsum lorem sit sed stet duo justo',
          icon: 'fa fa-times'
        },
        {
          title: 'Dedicated Team',
          description: 'Clita erat ipsum lorem sit sed stet duo justo',
          icon: 'fa fa-users'
        },
        {
          title: '24/7 Available',
          description: 'Clita erat ipsum lorem sit sed stet duo justo',
          icon: 'fa fa-phone'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* If you need any additional custom styles, add them here */
</style>
