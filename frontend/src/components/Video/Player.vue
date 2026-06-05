<!-- видео плеер -->
<template>
  <div class="flex flex-col overflow-hidden rounded-xl bg-black">
    <div class="group relative aspect-video w-full">
      <img
        :src="poster"
        :alt="title"
        class="h-full w-full object-cover"
      />
      <div
        v-if="!isPlaying"
        class="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30"
        @click="isPlaying = true"
      >
        <span class="flex size-12 items-center justify-center rounded-full bg-black/60 transition-transform group-hover:scale-110">
          <RiPlayLargeFill class="text-white size-6" />
        </span>
      </div>

      <!-- прогресс -->
      <div class="absolute inset-x-0 bottom-12 px-3">
        <div class="h-1 rounded-full bg-white/30">
          <div class="bg-primary h-full rounded-full" :style="{ width: `${progress}%` }" />
        </div>
      </div>

      <!-- контролы -->
      <div class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/80 to-transparent px-3 py-2">
        <div class="flex items-center gap-3">
          <button type="button" class="cursor-pointer text-white" @click="isPlaying = !isPlaying">
            <RiPauseFill v-if="isPlaying" class="size-5" />
            <RiPlayFill v-else class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiSkipForwardFill class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiVolumeUpFill class="size-5" />
          </button>
          <span class="text-xs text-white/80">{{ currentTime }} / {{ duration }}</span>
        </div>
        <div class="flex items-center gap-3">
          <button type="button" class="cursor-pointer text-white">
            <RiPictureInPictureFill class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiClosedCaptioningFill class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiSettings3Fill class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiAspectRatioFill class="size-5" />
          </button>
          <button type="button" class="cursor-pointer text-white">
            <RiFullscreenFill class="size-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  RiPlayLargeFill,
  RiPlayFill,
  RiPauseFill,
  RiSkipForwardFill,
  RiVolumeUpFill,
  RiPictureInPictureFill,
  RiClosedCaptioningFill,
  RiSettings3Fill,
  RiAspectRatioFill,
  RiFullscreenFill,
} from '@remixicon/vue'

defineProps({
  poster: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: String, default: '1:02:15' },
  currentTime: { type: String, default: '10:24' },
  progress: { type: Number, default: 16 },
})

const isPlaying = ref(false)
</script>
