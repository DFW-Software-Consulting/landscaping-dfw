<template>
  <div class="bg-forest-950 text-sm text-forest-100">
    <div class="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
      <p class="text-forest-200">{{ metaData.demoNotice }}</p>
      <div class="hidden items-center gap-6 lg:flex">
        <a :href="metaData.phoneHref" class="inline-flex items-center gap-2 hover:text-white">
          <i class="fa-solid fa-phone" aria-hidden="true"></i>{{ metaData.phoneNumber }}
        </a>
        <a :href="`mailto:${metaData.email}`" class="inline-flex items-center gap-2 hover:text-white">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>{{ metaData.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { metaData } from '@/data/metaData'

defineOptions({ name: 'TopBar' })
</script>
