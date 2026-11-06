<template>
  <section id="about" aria-labelledby="about-title" class="section">
    <div class="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <img
          :src="about.image"
          :alt="about.imageAlt"
          width="500"
          height="1000"
          loading="lazy"
          class="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover object-top shadow-lift lg:max-w-none"
        />
      </div>
      <div class="lg:col-span-7">
        <p class="eyebrow">{{ about.eyebrow }}</p>
        <h2 id="about-title" class="section-title">{{ about.title }}</h2>
        <p v-for="paragraph in about.paragraphs" :key="paragraph" class="lead mt-5">
          {{ paragraph }}
        </p>

        <dl class="mt-8 grid grid-cols-3 gap-4 border-y border-sand-200 py-6">
          <div v-for="stat in about.stats" :key="stat.label" class="flex flex-col-reverse justify-end">
            <dt class="text-sm text-ink-muted">{{ stat.label }}</dt>
            <dd class="font-display text-3xl font-bold text-forest-700 sm:text-4xl">
              {{ stat.value }}
            </dd>
          </div>
        </dl>

        <ul class="mt-8 grid gap-6 sm:grid-cols-2">
          <li v-for="point in about.points" :key="point.title" class="flex gap-4">
            <i :class="point.icon" class="mt-1 text-2xl text-clay-600" aria-hidden="true"></i>
            <div>
              <h3 class="font-sans text-lg font-semibold tracking-normal">{{ point.title }}</h3>
              <p class="mt-1 text-ink-muted">{{ point.description }}</p>
            </div>
          </li>
        </ul>

        <a :href="about.cta.href" class="btn-primary mt-10">{{ about.cta.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { about } from '@/data/contentData'

defineOptions({ name: 'AboutSection' })
</script>
