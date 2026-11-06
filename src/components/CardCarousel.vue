<template>
  <Carousel v-if="!isWide" :slides="items" :label="label" :autoplay="autoplay">
    <template #default="{ slide, index }">
      <slot :item="slide" :index="index"></slot>
    </template>
  </Carousel>
  <ul v-else class="grid gap-6 lg:gap-8" :class="gridClass">
    <li v-for="(item, index) in items" :key="index" class="flex">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import Carousel from './Carousel.vue'

defineOptions({ name: 'CardCarousel' })

// Renders a carousel below the md breakpoint and a plain grid from md up,
// so only one copy of the cards is ever in the DOM.
defineProps({
  items: { type: Array, required: true },
  label: { type: String, default: 'Carousel' },
  gridClass: { type: String, default: 'md:grid-cols-2 lg:grid-cols-3' },
  autoplay: { type: Boolean, default: true }
})

const mql = window.matchMedia('(min-width: 768px)')
const isWide = ref(mql.matches)
const update = (event) => (isWide.value = event.matches)
mql.addEventListener('change', update)
onBeforeUnmount(() => mql.removeEventListener('change', update))
</script>
