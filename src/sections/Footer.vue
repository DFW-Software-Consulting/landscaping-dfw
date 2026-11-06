<template>
  <footer id="contact" aria-labelledby="footer-title" class="bg-forest-950 text-forest-100">
    <div class="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h2 id="footer-title" class="footer-title">Contact us</h2>
        <address class="space-y-3 not-italic">
          <p class="flex gap-3">
            <i class="fa-solid fa-location-dot mt-1.5 w-4 text-forest-300" aria-hidden="true"></i>
            {{ metaData.address }}
          </p>
          <p class="flex gap-3">
            <i class="fa-solid fa-phone mt-1.5 w-4 text-forest-300" aria-hidden="true"></i>
            <a :href="metaData.phoneHref" class="footer-link">{{ metaData.phoneNumber }}</a>
          </p>
          <p class="flex gap-3">
            <i class="fa-solid fa-envelope mt-1.5 w-4 text-forest-300" aria-hidden="true"></i>
            <a :href="`mailto:${metaData.email}`" class="footer-link">{{ metaData.email }}</a>
          </p>
          <p class="flex gap-3">
            <i class="fa-solid fa-clock mt-1.5 w-4 text-forest-300" aria-hidden="true"></i>
            {{ metaData.hours }}
          </p>
        </address>
        <ul class="mt-6 flex gap-3">
          <li v-for="social in metaData.socialMedia" :key="social.label">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${social.label} (opens in a new tab)`"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 text-white transition hover:bg-clay-600"
            >
              <i :class="social.icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">Services</h2>
        <ul class="space-y-2">
          <li v-for="service in services" :key="service.title">
            <a href="#services" class="footer-link">{{ service.title }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">Quick links</h2>
        <ul class="space-y-2">
          <li v-for="link in footerLinks.quickLinks" :key="link.href">
            <a :href="link.href" class="footer-link">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">{{ newsletter.title }}</h2>
        <p>{{ newsletter.text }}</p>
        <form class="mt-4" novalidate @submit.prevent="subscribe">
          <label for="news-email" class="sr-only">{{ newsletter.label }}</label>
          <div class="flex gap-2">
            <input
              id="news-email"
              v-model.trim="email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
              class="field min-w-0 flex-1 !py-2.5"
              :aria-invalid="!!error"
              :aria-describedby="error ? 'news-err' : undefined"
            />
            <button type="submit" class="btn-accent !px-4 !py-2.5">{{ newsletter.submitLabel }}</button>
          </div>
          <p v-if="error" id="news-err" class="mt-2 text-sm font-medium text-red-300">{{ error }}</p>
          <p v-if="sent" role="status" class="mt-2 text-sm font-medium text-forest-200">
            {{ newsletter.successMessage }}
          </p>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { metaData, footerLinks } from '@/data/metaData'
import { services } from '@/data/servicesData'
import { newsletter } from '@/data/contentData'
import { isEmail } from '@/utils/validation'

defineOptions({ name: 'FooterSection' })

const email = ref('')
const error = ref('')
const sent = ref(false)

const subscribe = () => {
  sent.value = false
  if (!isEmail(email.value)) {
    error.value = email.value
      ? 'Enter a valid email, like name@example.com.'
      : 'Please enter your email address.'
    return
  }
  error.value = ''
  email.value = ''
  sent.value = true
}
</script>

<style scoped>
.footer-title {
  @apply mb-4 font-sans text-lg font-semibold tracking-normal text-white;
}
.footer-link {
  @apply transition hover:text-white hover:underline;
}
</style>
