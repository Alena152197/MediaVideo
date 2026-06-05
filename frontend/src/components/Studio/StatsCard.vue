<!-- карточка статистики -->
<template>
  <div class="flex flex-col gap-3 rounded-2xl border border-border bg-[#101216] p-4">
    <div class="flex items-center justify-between">
      <span class="text-text-secondary text-sm">{{ title }}</span>
      <RiInformationLine class="text-text-secondary size-4" />
    </div>
    <p class="text-2xl font-semibold">{{ value }}</p>
    <p class="text-success text-sm font-medium">{{ change }}</p>
    <svg viewBox="0 0 120 32" class="h-8 w-full" preserveAspectRatio="none">
      <path
        :d="sparklinePath"
        fill="none"
        stroke="var(--color-primary)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RiInformationLine } from '@remixicon/vue'

const props = defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: String, required: true },
  data: { type: Array, default: () => [4, 8, 6, 12, 10, 18, 16] },
})

const sparklinePath = computed(() => {
  const points = props.data
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const width = 120
  const height = 32
  const step = width / (points.length - 1)

  return points
    .map((value, index) => {
      const x = index * step
      const y = height - ((value - min) / range) * (height - 4) - 2
      return `${index === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')
})
</script>
