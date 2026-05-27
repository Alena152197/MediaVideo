<!-- секция популярных видео -->
<template>
  <section class="flex flex-col gap-4">
    <div class="my-2 flex w-full items-center justify-between gap-1">
      <div class="flex items-center gap-1">
        <RiFireLine class="size-6 text-amber-500" />
        <h2 class="font-medium select-none">Популярное</h2>
      </div>
      <RouterLink to="/" class="text-primary text-sm hover:underline">Смотреть все</RouterLink>
    </div>

    <div class="relative w-full">
      <div ref="container" class="hide-scrollbar flex gap-4 overflow-x-auto">
        <VideoCard v-for="video in 12" :key="video.id" class="min-w-3xs" />
      </div>
      <button v-if="visibleScrollRightButton" @click="handleScrolleToNext"
        class="absolute -right-4 bottom-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-[#3a3d4c]/50 bg-[#1d202a] p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-[#2c2f3e]">
        <RiArrowRightSLine class="size-6 text-white" />
      </button>
      <button v-if="visibleScrollLeftButton" @click="handleScrolleToPrev"
        class="absolute bottom-1/2 -left-4 -translate-y-1/2 cursor-pointer rounded-full border border-[#3a3d4c]/50 bg-[#1d202a] p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-[#2c2f3e]">
        <RiArrowLeftLine class="size-6 text-white" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { RiFireLine, RiArrowRightSLine, RiArrowLeftLine } from '@remixicon/vue'
import VideoCard from '@/components/Video/Card.vue'
import { ref, computed } from 'vue'

const videoList = ref([
  {
    id: 1,
    title: 'Неоновые ночи Токио',
    duration: '12:45',
    description: '',
    author: {
      name: '',
      avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
      username: '',
      isVerified: false,
    },
  },
  {
    id: 2,
    title: 'Жизнь на Марсе возможна?',
    duration: '19:28',
    description: '',
    author: {
      name: '',
      avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
      username: '',
      isVerified: false,
    },
  },
  {
    id: 3,
    title: 'Лучшие моменты с концерта',
    duration: '8:57',
    description: '',
    author: {
      name: '',
      avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
      username: '',
      isVerified: false,
    },
  },
  {
    id: 4,
    title: 'Как я обустроил студию мечты',
    duration: '15:42',
    description: '',
    author: {
      name: '',
      avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
      username: '',
      isVerified: false,
    },
  },
])

const container = ref(null)
const visibleScrollLeftButton = computed(() => {
  return container.value ? container.value.scrollLeft > 0 : false
})

const visibleScrollRightButton = computed(() => {
  return container.value
    ? container.value.scrollLeft < container.value.scrollWidth - container.value.clientWidth
    : false
})

const handleScrolleToNext = () => {
  const el = container.value
  if (el && el.scrollLeft < el.scrollWidth - el.clientWidth) {
    el.scrollBy({
      left: 272,
      behavior: 'smooth',
    })
  }
}

const handleScrolleToPrev = () => {
  const el = container.value
  if (el && el.scrollLeft > 0) {
    el.scrollBy({
      left: -272,
      behavior: 'smooth',
    })
  }
}
</script>
