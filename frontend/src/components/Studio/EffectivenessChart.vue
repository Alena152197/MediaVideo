<!-- график эффективности -->
<template>
  <div class="flex flex-col gap-5 rounded-2xl border border-border bg-[#101216] p-5">
    <div class="flex items-center justify-between gap-4">
      <h3 class="font-medium">Эффективность видео</h3>
      <button
        type="button"
        class="text-text-secondary flex cursor-pointer items-center gap-1 rounded-lg border border-border bg-[#1d202a] px-3 py-1.5 text-xs hover:text-white"
      >
        Просмотры
        <RiArrowDownSLine class="size-4" />
      </button>
    </div>

    <svg viewBox="0 0 400 120" class="h-28 w-full">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.3" />
          <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path :d="areaPath" fill="url(#chartGradient)" />
      <path
        :d="linePath"
        fill="none"
        stroke="var(--color-primary)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <div class="text-text-secondary flex justify-between text-xs">
      <span v-for="label in labels" :key="label">{{ label }}</span>
    </div>

    <div class="border-t border-white/10 pt-4">
      <h4 class="mb-3 text-sm font-medium">Топ видео по просмотрам</h4>
      <ul class="flex flex-col gap-3">
        <li
          v-for="video in topVideos"
          :key="video.id"
          class="flex items-center gap-3"
        >
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="aspect-video h-10 w-16 shrink-0 rounded-lg object-cover"
          />
          <p class="line-clamp-2 min-w-0 flex-1 text-sm">{{ video.title }}</p>
          <span class="text-text-secondary shrink-0 text-xs">{{ video.views }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RiArrowDownSLine } from '@remixicon/vue'

const labels = ['3 июн.', '4 июн.', '5 июн.', '6 июн.', '7 июн.', '8 июн.', '9 июн.']
const data = [12, 18, 15, 28, 24, 35, 42]

const linePath = computed(() => {
  const width = 400
  const height = 100
  const padding = 10
  const max = Math.max(...data)
  const step = (width - padding * 2) / (data.length - 1)

  return data
    .map((value, index) => {
      const x = padding + index * step
      const y = height - (value / max) * (height - padding * 2) - padding
      return `${index === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
})

const areaPath = computed(() => {
  const width = 400
  const height = 100
  const padding = 10
  const max = Math.max(...data)
  const step = (width - padding * 2) / (data.length - 1)

  const points = data.map((value, index) => {
    const x = padding + index * step
    const y = height - (value / max) * (height - padding * 2) - padding
    return `${x},${y}`
  })

  return `M${padding},${height - padding} L${points.join(' L')} L${width - padding},${height - padding} Z`
})

const topVideos = [
  {
    id: 1,
    title: 'Путешествие по Океану',
    views: '13 450',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  },
  {
    id: 2,
    title: 'Космос: что мы знаем о Вселенной',
    views: '28 920',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  },
  {
    id: 3,
    title: 'Глубины океана: тайны Марианской впадины',
    views: '52 340',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  },
]
</script>
