<template>
  <div class="mx-auto max-w-2xl" :class="align === 'center' ? 'text-center' : ''">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 :id="id" class="section-title">{{ title }}</h2>
    <p v-if="text" class="lead mt-4">{{ text }}</p>
  </div>
</template>

<script setup>
defineOptions({ name: 'SectionHeading' })

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  id: { type: String, default: undefined },
  align: { type: String, default: 'center' }
})
</script>
