<!-- страница профиля канала -->
<template>
  <div class="-mx-4 -mt-4 flex flex-col text-white">
    <!-- баннер -->
    <div class="relative h-44 overflow-hidden sm:h-52 md:h-60">
      <img
        :src="channel.banner"
        :alt="channel.name"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
      <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xl font-bold tracking-widest uppercase sm:text-2xl md:text-3xl">
        {{ channel.bannerTitle }}
      </p>
    </div>

    <!-- шапка канала -->
    <div class="relative px-4 pb-4">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end">
          <img
            :src="channel.avatar"
            :alt="channel.name"
            class="border-background -mt-12 size-24 shrink-0 rounded-full border-4 object-cover sm:-mt-14 sm:size-28"
          />
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <h1 class="text-xl font-semibold sm:text-2xl">{{ channel.name }}</h1>
              <RiVerifiedBadgeFill v-if="channel.isVerified" class="text-primary size-5 shrink-0" />
            </div>
            <p class="text-text-secondary text-sm">
              @{{ channel.username }} · {{ channel.subscribers }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all"
            :class="isSubscribed
              ? 'border border-border bg-[#1d202a] text-white hover:bg-[#252a3d]'
              : 'from-primary to-primary-hover bg-linear-to-r text-white hover:opacity-90'"
            @click="isSubscribed = !isSubscribed"
          >
            {{ isSubscribed ? 'Вы подписаны' : 'Подписаться' }}
          </button>
          <button
            type="button"
            class="cursor-pointer rounded-full border border-border bg-[#1d202a] px-5 py-2 text-sm font-medium transition-colors hover:bg-[#252a3d]"
          >
            Спонсировать
          </button>
          <button
            type="button"
            class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-[#1d202a] transition-colors hover:bg-[#252a3d]"
            title="Ещё"
          >
            <RiMore2Fill class="size-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- вкладки -->
    <nav class="hide-scrollbar flex items-center gap-1 overflow-x-auto border-b border-white/10 px-4">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        class="relative shrink-0 cursor-pointer px-4 py-3 text-sm transition-colors"
        :class="activeTab === tab ? 'text-white' : 'text-text-secondary hover:text-white'"
        @click="activeTab = tab"
      >
        {{ tab }}
        <span
          v-if="activeTab === tab"
          class="bg-primary absolute right-0 bottom-0 left-0 mx-2 h-0.5 rounded-full"
        />
      </button>
      <button type="button" class="text-text-secondary ml-auto shrink-0 cursor-pointer p-3 hover:text-white">
        <RiSearchLine class="size-5" />
      </button>
    </nav>

    <div class="flex flex-col gap-8 p-4">
      <!-- избранное видео -->
      <section class="flex flex-col gap-6 lg:flex-row">
        <div class="group relative w-full max-w-xl shrink-0 overflow-hidden rounded-xl sm:max-w-2xl lg:max-w-none lg:w-[45%]">
          <img
            :src="featured.thumbnail"
            :alt="featured.title"
            class="aspect-video w-full object-cover"
          />
          <span class="bg-background/70 absolute right-3 bottom-3 rounded px-2 py-0.5 text-sm backdrop-blur-sm">
            {{ featured.duration }}
          </span>
          <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <RiPlayLargeFill class="text-primary size-14" />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-center gap-3">
          <h2 class="text-lg font-medium leading-snug sm:text-xl">{{ featured.title }}</h2>
          <div class="text-text-secondary flex flex-wrap items-center gap-2 text-sm">
            <span class="flex items-center gap-1 text-white">
              {{ channel.name }}
              <RiVerifiedBadgeFill v-if="channel.isVerified" class="text-primary size-4" />
            </span>
            <span>·</span>
            <span>{{ featured.views }}</span>
            <span>·</span>
            <span>{{ featured.publishedAt }}</span>
          </div>
          <p class="text-text-secondary line-clamp-3 text-sm leading-relaxed">
            {{ featured.description }}
          </p>
          <button
            type="button"
            class="from-primary to-primary-hover mt-1 w-max cursor-pointer rounded-full bg-linear-to-r px-6 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Смотреть
          </button>
        </div>
      </section>

      <!-- сетка видео -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium">Все видео</h3>
          <button type="button" class="text-primary cursor-pointer text-sm hover:underline">
            Смотреть все
          </button>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article
            v-for="video in videos"
            :key="video.id"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-xl">
              <img
                :src="video.thumbnail"
                :alt="video.title"
                class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span class="bg-background/70 absolute right-2 bottom-2 rounded px-1.5 py-0.5 text-xs backdrop-blur-sm">
                {{ video.duration }}
              </span>
            </div>
            <h4 class="mt-2 line-clamp-2 text-sm font-medium leading-snug group-hover:text-primary">
              {{ video.title }}
            </h4>
            <p class="text-text-secondary mt-1 text-xs">
              {{ video.views }} · {{ video.publishedAt }}
            </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  RiVerifiedBadgeFill,
  RiMore2Fill,
  RiSearchLine,
  RiPlayLargeFill,
} from '@remixicon/vue'

const tabs = ['Главная', 'Видео', 'Shorts', 'Плейлисты', 'Сообщество', 'О канале']
const activeTab = ref('Главная')
const isSubscribed = ref(false)

const channel = {
  name: 'Тайны океанов',
  username: 'taine_okeanov',
  subscribers: '5,55 млн подписчиков',
  isVerified: true,
  bannerTitle: 'Тайны океанов',
  banner:
    'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  avatar:
    'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
}

const featured = {
  title: 'Почему до сих пор не исследовали',
  thumbnail:
    'https://avatars.mds.yandex.net/i?id=e035236b2efa962a010223a2fd7fefcb_l-10869844-images-thumbs&n=13',
  duration: '1:02:15',
  views: '10 млн. просмотров',
  publishedAt: '5 дня назад',
  description:
    'Мы знаем о Марсе больше, чем о собственном дне! Почему экстремальное давление, кромешная тьма и бешеные цены до сих пор мешают нам исследовать океан?',
}

const videos = [
  {
    id: 1,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://dalvisa.com/wp-content/uploads/2025/10/okean-zovet-vstrecha-s-vechnostyu-1-980x980.webp',
    duration: '32:32',
    views: '999 тыс. просмотров',
    publishedAt: '1 недели назад',
  },
  {
    id: 2,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://dalvisa.com/wp-content/uploads/2025/10/okean-zovet-vstrecha-s-vechnostyu-1-980x980.webp',
    duration: '32:32',
    views: '999 тыс. просмотров',
    publishedAt: '1 недели назад',
  },
  {
    id: 3,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://dalvisa.com/wp-content/uploads/2025/10/okean-zovet-vstrecha-s-vechnostyu-1-980x980.webp',
    duration: '32:32',
    views: '999 тыс. просмотров',
    publishedAt: '1 недели назад',
  },
  {
    id: 4,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://dalvisa.com/wp-content/uploads/2025/10/okean-zovet-vstrecha-s-vechnostyu-1-980x980.webp',
    duration: '32:32',
    views: '999 тыс. просмотров',
    publishedAt: '1 недели назад',
  },
]
</script>
