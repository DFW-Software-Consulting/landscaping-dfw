<template>
  <section id="team" aria-labelledby="team-title" class="section bg-white">
    <div class="container-x">
      <SectionHeading id="team-title" v-bind="teamIntro" />
      <div class="mt-12">
        <CardCarousel :items="teamMembers" label="Team members" :autoplay="false">
          <template #default="{ item }">
            <article
              class="w-full overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <img
                :src="item.image"
                :alt="item.imageAlt"
                width="550"
                height="650"
                loading="lazy"
                class="aspect-[4/4] w-full object-cover object-top"
              />
              <div class="p-6">
                <h3 class="font-sans text-xl font-semibold tracking-normal">{{ item.name }}</h3>
                <p class="mt-1 text-sm font-semibold text-clay-600">{{ item.role }}</p>
                <p class="mt-3 text-ink-muted">{{ item.bio }}</p>
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
import { teamMembers } from '@/data/teamData'
import { teamIntro } from '@/data/contentData'

defineOptions({ name: 'TeamSection' })
</script>
