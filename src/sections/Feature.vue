<template>
  <section aria-label="Why choose us" class="relative z-10 bg-sand-50">
    <div class="container-x">
      <ul class="grid gap-5 py-10 md:grid-cols-3 lg:-mt-10 lg:py-0">
        <li
          v-for="item in highlights"
          :key="item.title"
          class="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-card"
        >
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700"
          >
            <i :class="item.icon" aria-hidden="true"></i>
          </span>
          <div>
            <h2 class="font-sans text-lg font-semibold tracking-normal">{{ item.title }}</h2>
            <p class="mt-1 text-ink-muted">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { highlights } from '@/data/contentData'

defineOptions({ name: 'TopFeatures' })
</script>
