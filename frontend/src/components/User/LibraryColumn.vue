<!-- колонка библиотеки -->
<template>
  <div class="flex flex-col gap-4 rounded-2xl border border-border bg-[#101216] p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <RiPlayList2Line v-if="type === 'playlist'" class="text-text-secondary size-4" />
        <RiHeart2Line v-else-if="type === 'liked'" class="text-text-secondary size-4" />
        <RiClapperboardLine v-else-if="type === 'subscription'" class="text-text-secondary size-4" />
        <RiHistoryLine v-else class="text-text-secondary size-4" />
        <h3 class="text-sm font-medium">{{ title }}</h3>
      </div>
      <RouterLink :to="link" class="text-primary text-xs hover:underline">Смотреть все</RouterLink>
    </div>
    <ul class="flex flex-col gap-1">
      <li v-for="item in items" :key="item.id">
        <RouterLink
          :to="item.link || '/'"
          class="group flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-[#1d202a]"
        >
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="shrink-0 object-cover"
            :class="thumbnailClass"
          />
          <div class="min-w-0 flex-1">
            <p
              class="truncate text-sm group-hover:text-primary"
              :class="{ 'flex items-center gap-1': type === 'subscription' && item.isVerified }"
            >
              {{ item.title }}
              <RiVerifiedBadgeFill
                v-if="type === 'subscription' && item.isVerified"
                class="text-primary size-3.5 shrink-0"
              />
            </p>
            <p v-if="item.meta" class="text-text-secondary truncate text-xs">{{ item.meta }}</p>
          </div>
          <span
            v-if="item.duration && (type === 'liked' || type === 'history')"
            class="text-text-secondary shrink-0 text-xs"
          >
            {{ item.duration }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  RiPlayList2Line,
  RiHeart2Line,
  RiClapperboardLine,
  RiHistoryLine,
  RiVerifiedBadgeFill,
} from '@remixicon/vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'playlist',
    validator: (value) => ['playlist', 'liked', 'subscription', 'history'].includes(value),
  },
  link: {
    type: String,
    default: '/',
  },
  items: {
    type: Array,
    required: true,
  },
})

const thumbnailClass = computed(() => {
  if (props.type === 'subscription') return 'size-10 rounded-full'
  if (props.type === 'playlist') return 'size-12 rounded-lg'
  return 'aspect-video h-10 w-16 rounded-lg'
})
</script>
