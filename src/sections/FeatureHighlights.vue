<template>
  <section aria-labelledby="banner-title" class="relative isolate overflow-hidden text-white">
    <img
      :src="banner.image"
      alt=""
      width="1920"
      height="1080"
      loading="lazy"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div class="absolute inset-0 -z-10 bg-forest-950/80" aria-hidden="true"></div>
    <div class="container-x section">
      <div class="max-w-2xl">
        <p class="eyebrow !text-clay-400">{{ banner.eyebrow }}</p>
        <h2 id="banner-title" class="section-title !text-white">{{ banner.title }}</h2>
        <ul class="mt-8 space-y-4 text-lg">
          <li v-for="bullet in banner.bullets" :key="bullet" class="flex gap-3">
            <i class="fa-solid fa-circle-check mt-1.5 text-forest-300" aria-hidden="true"></i>
            <span>{{ bullet }}</span>
          </li>
        </ul>
        <a :href="banner.cta.href" class="btn-accent mt-10">{{ banner.cta.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { banner } from '@/data/contentData'

defineOptions({ name: 'FeatureHighlight' })
</script>
