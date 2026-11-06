<template>
  <div
    role="region"
    aria-roledescription="carousel"
    :aria-label="label"
    class="relative"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="focused = true"
    @focusout="focused = false"
    @keydown.left="prev"
    @keydown.right="next"
  >
    <div class="overflow-hidden">
      <div
        class="flex"
        :class="reducedMotion ? '' : 'transition-transform duration-500 ease-in-out'"
        :style="{ transform: `translateX(-${current * 100}%)` }"
        :aria-live="playing ? 'off' : 'polite'"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full shrink-0 px-1 py-2"
          role="group"
          aria-roledescription="slide"
          :aria-label="`${index + 1} of ${slides.length}`"
          :inert="index !== current"
        >
          <slot :slide="slide" :index="index"></slot>
        </div>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-center gap-3">
      <button type="button" class="carousel-btn" aria-label="Previous slide" @click="prev">
        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        v-if="autoplay && !reducedMotion"
        type="button"
        class="carousel-btn"
        :aria-label="userPaused ? 'Start automatic slide rotation' : 'Pause automatic slide rotation'"
        @click="userPaused = !userPaused"
      >
        <i :class="userPaused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" aria-hidden="true"></i>
      </button>
      <span class="min-w-12 text-center text-sm text-ink-muted" aria-hidden="true">
        {{ current + 1 }} / {{ slides.length }}
      </span>
      <button type="button" class="carousel-btn" aria-label="Next slide" @click="next">
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineOptions({ name: 'CarouselComponent' })

const props = defineProps({
  slides: { type: Array, required: true },
  label: { type: String, default: 'Carousel' },
  autoplay: { type: Boolean, default: true },
  autoplayDelay: { type: Number, default: 6000 }
})

const current = ref(0)
const hovering = ref(false)
const focused = ref(false)
const userPaused = ref(false)
const reducedMotion = ref(false)
let timer = null
let mql = null

const playing = computed(
  () =>
    props.autoplay &&
    !reducedMotion.value &&
    !userPaused.value &&
    !hovering.value &&
    !focused.value
)

const next = () => (current.value = (current.value + 1) % props.slides.length)
const prev = () => (current.value = (current.value - 1 + props.slides.length) % props.slides.length)

const stop = () => {
  clearInterval(timer)
  timer = null
}
watch(
  playing,
  (value) => {
    stop()
    if (value) timer = setInterval(next, props.autoplayDelay)
  },
  { immediate: false }
)

const onMotionChange = (event) => (reducedMotion.value = event.matches)

onMounted(() => {
  mql = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = mql.matches
  mql.addEventListener('change', onMotionChange)
  if (playing.value) timer = setInterval(next, props.autoplayDelay)
})
onBeforeUnmount(() => {
  stop()
  mql?.removeEventListener('change', onMotionChange)
})
</script>

<style scoped>
.carousel-btn {
  @apply flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white text-forest-800 shadow-card transition hover:border-forest-600 hover:bg-forest-50;
}
</style>
