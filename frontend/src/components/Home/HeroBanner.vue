<!-- главный баннер -->
<template>
  <section class="relative overflow-hidden rounded-2xl">
    <img
      :src="banner.image"
      :alt="banner.title"
      class="aspect-[21/9] min-h-52 w-full object-cover object-center sm:min-h-64 md:min-h-72"
    />
    <div class="absolute inset-0 bg-linear-to-r from-background/95 via-background/50 to-transparent" />
    <div class="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

    <div class="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10">
      <span class="bg-primary/90 w-max rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
        {{ banner.tag }}
      </span>
      <div class="max-w-xl flex flex-col gap-2">
        <h2 class="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {{ banner.title }}
        </h2>
        <p class="text-text-secondary max-w-md text-sm leading-relaxed sm:text-base">
          {{ banner.description }}
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <RouterLink
          :to="banner.watchLink"
          class="from-primary to-primary-hover flex items-center gap-2 rounded-full bg-linear-to-r px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        >
          <RiPlayFill class="size-5" />
          Смотреть
        </RouterLink>
        <button
          type="button"
          class="cursor-pointer rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          Подробнее
        </button>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        class="size-2 cursor-pointer rounded-full transition-all"
        :class="activeSlide === index ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Слайд ${index + 1}`"
        @click="activeSlide = index"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RiPlayFill } from '@remixicon/vue'

const activeSlide = ref(0)

const slides = [0, 1, 2]

const banner = {
  tag: 'Премьера',
  title: 'Тайны океаны',
  description: 'Документальный фильм о том, как океан меняет границы реальности.',
  image: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  watchLink: '/video/altai',
}
</script>
