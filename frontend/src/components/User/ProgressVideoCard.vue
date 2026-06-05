<!-- карточка видео с прогрессом просмотра -->
<template>
  <article class="group min-w-[10.5rem] flex-1 shrink-0">
    <div class="relative overflow-hidden rounded-xl">
      <img
        :src="video.thumbnail"
        :alt="video.title"
        class="aspect-video w-full object-cover"
      />
      <span
        class="bg-background/80 absolute right-2 rounded px-1.5 py-0.5 text-xs backdrop-blur-sm"
        :class="variant === 'continue' ? 'bottom-2' : 'bottom-2'"
      >
        {{ video.duration }}
      </span>
      <div
        v-if="variant === 'continue' && video.progress != null"
        class="absolute inset-x-0 bottom-0 h-1 bg-white/20"
      >
        <div class="bg-primary h-full" :style="{ width: `${video.progress}%` }" />
      </div>
      <RouterLink
        :to="video.link || '/'"
        class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <RiPlayLargeFill class="text-primary size-8" />
      </RouterLink>
    </div>
    <RouterLink :to="video.link || '/'" class="mt-2 block">
      <h4 class="line-clamp-2 text-sm font-medium leading-snug group-hover:text-primary">
        {{ video.title }}
      </h4>
      <template v-if="variant === 'continue'">
        <p class="mt-1 flex items-center gap-1 text-xs">
          <span class="text-white/80">{{ video.channel }}</span>
          <RiVerifiedBadgeFill v-if="video.isVerified" class="text-primary size-3.5 shrink-0" />
        </p>
        <p class="text-text-secondary mt-0.5 text-xs">
          Продолжить · {{ video.watchedTime }} из {{ video.duration }}
        </p>
      </template>
      <p v-else class="text-text-secondary mt-1 text-xs">{{ video.views }}</p>
    </RouterLink>
  </article>
</template>

<script setup>
import { RiPlayLargeFill, RiVerifiedBadgeFill } from '@remixicon/vue'

defineProps({
  video: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'continue',
    validator: (value) => ['continue', 'watchlater'].includes(value),
  },
})
</script>
