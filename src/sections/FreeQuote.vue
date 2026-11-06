<template>
  <section id="quote" aria-labelledby="quote-title" class="section bg-forest-800 text-white">
    <div class="container-x grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-2">
        <p class="eyebrow !text-clay-400">{{ quoteForm.eyebrow }}</p>
        <h2 id="quote-title" class="section-title !text-white">{{ quoteForm.title }}</h2>
        <p class="mt-4 text-lg text-forest-100">{{ quoteForm.text }}</p>
        <p class="mt-6 text-forest-100">
          Prefer to talk? Call
          <a :href="metaData.phoneHref" class="font-semibold text-white underline">{{
            metaData.phoneNumber
          }}</a
          >.
        </p>
      </div>

      <form
        class="rounded-2xl bg-white p-6 text-ink shadow-lift sm:p-8 lg:col-span-3"
        novalidate
        aria-labelledby="quote-title"
        @submit.prevent="submit"
      >
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label class="field-label" for="q-name">Name <span aria-hidden="true">*</span></label>
            <input
              id="q-name"
              v-model.trim="form.name"
              class="field"
              type="text"
              name="name"
              autocomplete="name"
              required
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'q-name-err' : undefined"
            />
            <p v-if="errors.name" id="q-name-err" class="field-error">{{ errors.name }}</p>
          </div>
          <div>
            <label class="field-label" for="q-email">Email <span aria-hidden="true">*</span></label>
            <input
              id="q-email"
              v-model.trim="form.email"
              class="field"
              type="email"
              name="email"
              autocomplete="email"
              required
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'q-email-err' : undefined"
            />
            <p v-if="errors.email" id="q-email-err" class="field-error">{{ errors.email }}</p>
          </div>
          <div>
            <label class="field-label" for="q-phone">Phone (optional)</label>
            <input
              id="q-phone"
              v-model.trim="form.phone"
              class="field"
              type="tel"
              name="phone"
              autocomplete="tel"
              :aria-invalid="!!errors.phone"
              :aria-describedby="errors.phone ? 'q-phone-err' : undefined"
            />
            <p v-if="errors.phone" id="q-phone-err" class="field-error">{{ errors.phone }}</p>
          </div>
          <div>
            <label class="field-label" for="q-service">Service</label>
            <select id="q-service" v-model="form.service" class="field" name="service">
              <option value="">Not sure yet</option>
              <option v-for="service in services" :key="service.title" :value="service.title">
                {{ service.title }}
              </option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label class="field-label" for="q-message">
              How can we help? <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="q-message"
              v-model.trim="form.message"
              class="field"
              name="message"
              rows="4"
              required
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'q-message-err' : undefined"
            ></textarea>
            <p v-if="errors.message" id="q-message-err" class="field-error">{{ errors.message }}</p>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <button type="submit" class="btn-primary">{{ quoteForm.submitLabel }}</button>
          <p class="text-sm text-ink-muted"><span aria-hidden="true">*</span> Required</p>
        </div>

        <div role="status" aria-live="polite">
          <p
            v-if="sent"
            class="mt-5 rounded-lg border border-forest-300 bg-forest-50 p-4 font-medium text-forest-900"
          >
            <i class="fa-solid fa-circle-check mr-2 text-forest-600" aria-hidden="true"></i
            >{{ quoteForm.successMessage }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import { metaData } from '@/data/metaData'
import { services } from '@/data/servicesData'
import { quoteForm } from '@/data/contentData'
import { isEmail, isPhone } from '@/utils/validation'

defineOptions({ name: 'QuoteSection' })

const blank = () => ({ name: '', email: '', phone: '', service: '', message: '' })
const form = reactive(blank())
const errors = reactive({})
const sent = ref(false)

const validate = () => {
  const found = {}
  if (!form.name) found.name = 'Please enter your name.'
  if (!form.email) found.email = 'Please enter your email address.'
  else if (!isEmail(form.email)) found.email = 'Enter a valid email, like name@example.com.'
  if (form.phone && !isPhone(form.phone)) found.phone = 'Enter a 10-digit phone number.'
  if (!form.message) found.message = 'Please tell us a little about your project.'
  Object.keys(errors).forEach((key) => delete errors[key])
  Object.assign(errors, found)
  return Object.keys(found)
}

const submit = async () => {
  sent.value = false
  const invalid = validate()
  if (invalid.length) {
    await nextTick()
    document.querySelector('#quote [aria-invalid="true"]')?.focus()
    return
  }
  // Demo only: nothing is sent anywhere.
  Object.assign(form, blank())
  sent.value = true
}
</script>
