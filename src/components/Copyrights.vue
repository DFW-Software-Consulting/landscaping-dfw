<template>
  <div class="border-t border-forest-800 bg-forest-950 text-sm text-forest-200">
    <div
      class="container-x flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:text-left"
    >
      <p>&copy; {{ year }} {{ metaData.companyName }} (fictional demo business)</p>
      <p>
        Designed by
        <a
          class="credit-link"
          :href="metaData.credits.designedBy.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ metaData.credits.designedBy.name }}</a
        >
        &middot; Distributed by
        <a
          class="credit-link"
          :href="metaData.credits.distributedBy.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ metaData.credits.distributedBy.name }}</a
        >
        &middot; Customized by
        <a
          class="credit-link"
          :href="metaData.credits.customizedBy.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ metaData.credits.customizedBy.name }}</a
        >
      </p>
    </div>
  </div>

  <a
    v-show="showTop"
    href="#top"
    aria-label="Back to top"
    class="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-white shadow-lift transition hover:bg-forest-800"
  >
    <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
  </a>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { metaData } from '@/data/metaData'

defineOptions({ name: 'CopyrightComponent' })

const year = new Date().getFullYear()
const showTop = ref(false)
const onScroll = () => (showTop.value = window.scrollY > 600)

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.credit-link {
  @apply font-medium text-white underline decoration-forest-400 underline-offset-2 hover:decoration-white;
}
</style>
