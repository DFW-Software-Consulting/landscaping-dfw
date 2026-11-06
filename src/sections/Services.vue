<template>
  <section id="services" aria-labelledby="services-title" class="section bg-white">
    <div class="container-x">
      <SectionHeading id="services-title" v-bind="servicesIntro" />
      <div class="mt-12">
        <CardCarousel :items="services" label="Services" :autoplay="false">
          <template #default="{ item }">
            <article
              class="group flex w-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <img
                :src="item.image"
                :alt="item.imageAlt"
                width="550"
                height="550"
                loading="lazy"
                class="aspect-[16/10] w-full object-cover"
              />
              <div class="flex flex-1 flex-col p-6">
                <span
                  class="-mt-12 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-white shadow-card ring-4 ring-sand-50"
                >
                  <i :class="item.icon" aria-hidden="true"></i>
                </span>
                <h3 class="font-sans text-xl font-semibold tracking-normal">{{ item.title }}</h3>
                <p class="mt-2 flex-1 text-ink-muted">{{ item.description }}</p>
                <a
                  href="#quote"
                  class="mt-5 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900"
                >
                  Request a quote
                  <span class="sr-only"> for {{ item.title }}</span>
                  <i class="fa-solid fa-arrow-right text-sm" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          </template>
        </CardCarousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardCarousel from '@/components/CardCarousel.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { services } from '@/data/servicesData'
import { servicesIntro } from '@/data/contentData'

defineOptions({ name: 'ServicesSection' })
</script>
