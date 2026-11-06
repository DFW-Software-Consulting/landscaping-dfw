<template>
  <section id="projects" aria-labelledby="projects-title" class="section">
    <div class="container-x">
      <SectionHeading id="projects-title" v-bind="projectsIntro" />
      <div class="mt-12">
        <CardCarousel :items="projects" label="Projects" :autoplay="false">
          <template #default="{ item, index }">
            <button
              type="button"
              class="group relative block w-full overflow-hidden rounded-2xl text-left shadow-card focus-visible:outline-offset-4"
              :aria-label="`View larger: ${item.title}, ${item.location}`"
              @click="open(index, $event)"
            >
              <img
                :src="item.image"
                :alt="item.imageAlt"
                loading="lazy"
                class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 via-forest-950/60 to-transparent p-5 pt-16 text-white"
              >
                <span class="block text-sm font-medium text-forest-200">
                  {{ item.category }} &middot; {{ item.location }}
                </span>
                <span class="mt-1 block font-display text-xl font-bold">{{ item.title }}</span>
              </span>
              <span
                class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest-800 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100"
                aria-hidden="true"
              >
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </span>
            </button>
          </template>
        </CardCarousel>
      </div>
    </div>

    <dialog
      ref="dialog"
      class="m-auto w-[min(92vw,64rem)] max-w-none overflow-hidden rounded-2xl bg-forest-950 p-0 text-white backdrop:bg-black/80"
      :aria-label="active ? active.title : 'Project image'"
      @click="onDialogClick"
      @keydown.left.prevent="step(-1)"
      @keydown.right.prevent="step(1)"
      @close="onClose"
    >
      <figure v-if="active" class="relative">
        <img
          :src="active.image"
          :alt="active.imageAlt"
          class="max-h-[70vh] w-full bg-black object-contain"
        />
        <figcaption class="p-5 pr-16">
          <p class="text-sm text-forest-200">{{ active.category }} &middot; {{ active.location }}</p>
          <p class="font-display text-xl font-bold">{{ active.title }}</p>
          <p class="mt-1 text-forest-100">{{ active.caption }}</p>
        </figcaption>
      </figure>
      <button type="button" class="lb-btn right-3 top-3" aria-label="Close" @click="dialog.close()">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="lb-btn left-3 top-1/3 -translate-y-1/2"
        aria-label="Previous project"
        @click="step(-1)"
      >
        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="lb-btn right-3 top-1/3 -translate-y-1/2"
        aria-label="Next project"
        @click="step(1)"
      >
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import CardCarousel from '@/components/CardCarousel.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { projects } from '@/data/projectData'
import { projectsIntro } from '@/data/contentData'

defineOptions({ name: 'ProjectsSection' })

// Accessible lightbox built on the native <dialog>: focus is trapped while open,
// Escape closes it, and focus returns to the card that opened it.
const dialog = ref(null)
const activeIndex = ref(0)
const active = computed(() => projects[activeIndex.value])
let opener = null

const open = (index, event) => {
  opener = event.currentTarget
  activeIndex.value = index
  dialog.value.showModal()
}
const step = (delta) => {
  activeIndex.value = (activeIndex.value + delta + projects.length) % projects.length
}
const onDialogClick = (event) => {
  // Clicks on the backdrop land on the <dialog> element itself.
  if (event.target === dialog.value) dialog.value.close()
}
const onClose = () => opener?.focus()
</script>

<style scoped>
.lb-btn {
  @apply absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-forest-900 shadow-card transition hover:bg-white;
}
</style>
