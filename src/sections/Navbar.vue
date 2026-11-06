<template>
  <header class="sticky top-0 z-50 border-b border-sand-200 bg-white/95 backdrop-blur">
    <div class="container-x flex h-16 items-center justify-between">
      <a href="#top" class="flex items-center gap-2.5" @click="close">
        <img :src="logo" alt="" width="36" height="36" class="h-9 w-9" />
        <span class="font-display text-lg font-bold text-forest-900">{{ metaData.companyName }}</span>
      </a>

      <nav aria-label="Primary" class="hidden items-center gap-1 lg:flex">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
        <a href="#quote" class="btn-primary ml-3 !px-5 !py-2.5">Get a quote</a>
      </nav>

      <button
        type="button"
        class="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-forest-900 hover:bg-forest-50 lg:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        @click="isOpen = !isOpen"
      >
        <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl" aria-hidden="true"></i>
      </button>
    </div>

    <nav
      v-show="isOpen"
      id="mobile-menu"
      aria-label="Mobile"
      class="border-t border-sand-200 bg-white lg:hidden"
      @keydown.esc="isOpen = false"
    >
      <div class="container-x flex flex-col py-3">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-3 text-base font-semibold text-forest-900 hover:bg-forest-50"
          @click="close"
        >
          {{ link.label }}
        </a>
        <a href="#quote" class="btn-primary mt-2" @click="close">Get a quote</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/img/icon/icon-10.png'
import { metaData, navLinks } from '@/data/metaData'

defineOptions({ name: 'NavbarComponent' })

const isOpen = ref(false)
const close = () => (isOpen.value = false)
</script>

<style scoped>
.nav-link {
  @apply rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-forest-900 transition hover:bg-forest-50 hover:text-forest-700;
}
</style>
