<template>
  <section aria-labelledby="hero-title" class="relative overflow-hidden bg-sand-100">
    <div class="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div class="motion-safe:animate-fade-up">
        <p class="eyebrow">{{ hero.eyebrow }}</p>
        <h1 id="hero-title" class="text-4xl font-bold sm:text-5xl lg:text-6xl">{{ hero.title }}</h1>
        <p class="lead mt-6 max-w-xl">{{ hero.text }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a :href="hero.primaryCta.href" class="btn-primary">
            {{ hero.primaryCta.label }}
            <i class="fa-solid fa-arrow-right text-sm" aria-hidden="true"></i>
          </a>
          <a :href="hero.secondaryCta.href" class="btn-outline">{{ hero.secondaryCta.label }}</a>
        </div>
      </div>
      <div class="relative motion-safe:animate-fade-up" style="animation-delay: 0.15s">
        <div
          class="absolute -bottom-4 -left-4 hidden h-full w-full rounded-3xl bg-forest-200 sm:block"
          aria-hidden="true"
        ></div>
        <img
          :src="hero.image"
          :alt="hero.imageAlt"
          width="1920"
          height="1080"
          fetchpriority="high"
          class="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { hero } from '@/data/contentData'

defineOptions({ name: 'HeroSection' })
</script>
