<!-- секция рекомендаций -->
<template>
  <section class="flex flex-col gap-4">
    <div class="my-2 flex w-full items-center justify-between gap-1">
      <div class="flex items-center gap-1">
        <RiVideoAiLine class="text-primary size-6" />
        <h2 class="font-medium select-none">Рекомендации</h2>
      </div>
      <RouterLink to="/" class="text-primary text-sm hover:underline">Смотреть все</RouterLink>
    </div>

    <div class="relative w-full">
      <div class="hide-scrollbar flex gap-4 overflow-x-auto">
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
import { RiVideoAiLine, RiArrowRightSLine, RiArrowLeftLine } from '@remixicon/vue'
import VideoCard from '@/components/Video/Card.vue'
import { ref, computed, onMounted } from 'vue'

// const videoList = ref([
//   {
//     id: 1,
//     title: 'Будущее уже здесь: города следующего поколения',
//     description: '125 тыс. просмотров • 1 день назад',
//     author: {
//       name: 'varlamov',
//       avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
//       username: 'varlamov',
//       isVerified: true,
//     },
//   },
//   {
//     id: 2,
//     title: 'Как создаются вирусные видео',
//     description: '98 тыс. просмотров • 2 дня назад',
//     author: {
//       name: 'Настя Ивлеева',
//       avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
//       username: 'nastya_ivleeva',
//       isVerified: true,
//     },
//   },
//   {
//     id: 3,
//     title: 'Путешествие по Алтаю. Дикая природа России',
//     description: '84 тыс. просмотров • 3 дня назад',
//     author: {
//       name: 'Артём Рындевич',
//       avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
//       username: 'artem_ryndevich',
//       isVerified: true,
//     },
//   },
//   {
//     id: 4,
//     title: 'Разговор без масок с Антоном Птушкиным',
//     description: '1.2 млн просмотров • 4 дня назад',
//     author: {
//       name: 'вДудь',
//       avatar: 'https://avatars.mds.yandex.net/i?id=1dc06133cd592d090abc6ed50c509650_l-8386641-images-thumbs&n=13',
//       username: 'vdud',
//       isVerified: true,
//     },
//   },
// ])

const container = ref(null)
const visibleScrollLeftButton = computed(() => {
  // console.log(container.value ? container.value?.scrollLeft : 'нет контейнера')
  return container.value ? container.value.scrollLeft > 0 : false
})

const visibleScrollRightButton = computed(() => {
  return container.value
    ? container.value.scrollLeft < container.value.scrollWidth - container.value.clientWidth
    : false
})

const handleScrolleToNext = () => {
  const container = document.querySelector('.hide-scrollbar.flex.gap-4.overflow-x-auto')
  if (container && container.scrollLeft < container.scrollWidth - container.clientWidth) {
    container.scrollBy({
      left: 272,
      behavior: 'smooth',
    })
    console.log(container.scrollLeft)

    container.value = container
  }
}

const handleScrolleToPrev = () => {
  const container = document.querySelector('.hide-scrollbar.flex.gap-4.overflow-x-auto')
  if (container && container.scrollLeft > 0) {
    container.scrollBy({
      left: -272,
      behavior: 'smooth',
    })
    console.log(container.scrollLeft)
  }
}

onMounted(() => {
  container.value = document.querySelector('.hide-scrollbar.flex.gap-4.overflow-x-auto')
})
</script>
