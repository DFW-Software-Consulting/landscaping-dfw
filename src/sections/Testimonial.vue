<template>
  <section id="reviews" aria-labelledby="reviews-title" class="section">
    <div class="container-x">
      <SectionHeading id="reviews-title" v-bind="reviewsIntro" />
      <div class="mx-auto mt-12 max-w-4xl">
        <CardCarousel
          :items="testimonials"
          label="Customer reviews"
          grid-class="md:grid-cols-2"
          :autoplay="true"
        >
          <template #default="{ item }">
            <figure class="flex w-full flex-col rounded-2xl bg-white p-7 shadow-card">
              <i class="fa-solid fa-quote-left text-2xl text-clay-500" aria-hidden="true"></i>
              <blockquote class="mt-4 flex-1 text-lg text-ink">{{ item.text }}</blockquote>
              <figcaption class="mt-6 flex items-center gap-4">
                <img
                  :src="item.image"
                  :alt="item.imageAlt"
                  width="56"
                  height="56"
                  loading="lazy"
                  class="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p class="font-semibold text-forest-900">{{ item.name }}</p>
                  <p class="text-sm text-ink-muted">{{ item.detail }}</p>
                </div>
              </figcaption>
            </figure>
          </template>
        </CardCarousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardCarousel from '@/components/CardCarousel.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { testimonials } from '@/data/testimonialData'
import { reviewsIntro } from '@/data/contentData'

defineOptions({ name: 'TestimonialSection' })
</script>
