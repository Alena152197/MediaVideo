<!-- сайдбар следующих видео -->
<template>
  <aside class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-medium">Следующее</h3>
      <label class="flex cursor-pointer items-center gap-2 text-xs text-white/70">
        Автовоспроизведение
        <button
          type="button"
          class="relative h-5 w-9 rounded-full transition-colors"
          :class="autoplay ? 'bg-primary' : 'bg-white/20'"
          @click="autoplay = !autoplay"
        >
          <span
            class="absolute top-0.5 size-4 rounded-full bg-white transition-all"
            :class="autoplay ? 'left-4' : 'left-0.5'"
          />
        </button>
      </label>
    </div>

    <ul class="flex flex-col gap-3">
      <li v-for="video in videos" :key="video.id">
        <RouterLink
          :to="video.link"
          class="group flex gap-2"
        >
          <div class="relative shrink-0">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="aspect-video h-20 w-36 rounded-lg object-cover"
            />
            <span class="bg-background/80 absolute right-1 bottom-1 rounded px-1 text-[10px]">
              {{ video.duration }}
            </span>
          </div>
          <div class="min-w-0 flex-1">
            <p class="line-clamp-2 text-sm font-medium leading-snug group-hover:text-primary">
              {{ video.title }}
            </p>
            <p class="text-text-secondary mt-1 text-xs">{{ video.channel }}</p>
            <p class="text-text-secondary text-xs">{{ video.meta }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})

const autoplay = ref(true)
</script>
