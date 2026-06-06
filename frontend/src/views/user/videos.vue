<!-- моё видео / библиотека -->
<template>
  <div class="flex flex-col gap-6 text-white">
    <UserProfileHeader :user="currentUser" />

    <!-- вкладки -->
    <nav class="hide-scrollbar flex gap-2 overflow-x-auto">
      <RouterLink
        v-for="tab in tabs"
        :key="tab.to"
        :to="tab.to"
        class="shrink-0 rounded-full px-4 py-2 text-sm transition-colors"
        :class="$route.path === tab.to
          ? 'bg-primary text-white'
          : 'bg-[#1d202a] text-text-secondary hover:text-white'"
      >
        {{ tab.label }}
      </RouterLink>
    </nav>

    <!-- продолжить просмотр и смотреть позже -->
    <div class="overflow-hidden rounded-2xl border border-border bg-[#101216] lg:flex">
      <section class="flex min-w-0 flex-1 flex-col gap-4 p-5 lg:border-r lg:border-white/10">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <RiPlayCircleLine class="text-text-secondary size-5" />
            <h2 class="text-sm font-medium">Продолжить просмотр</h2>
          </div>
          <RouterLink to="/user/history" class="text-primary text-xs hover:underline">
            Смотреть все
          </RouterLink>
        </div>
        <div class="hide-scrollbar flex gap-3 overflow-x-auto pb-1">
          <UserProgressVideoCard
            v-for="video in continueWatching"
            :key="video.id"
            :video="video"
            variant="continue"
          />
        </div>
      </section>

      <section class="flex min-w-0 flex-1 flex-col gap-4 border-t border-white/10 p-5 lg:border-t-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <RiTimeLine class="text-text-secondary size-5" />
            <h2 class="text-sm font-medium">Смотреть позже</h2>
          </div>
          <RouterLink to="/user/watchlist" class="text-primary text-xs hover:underline">
            Смотреть все
          </RouterLink>
        </div>
        <div class="hide-scrollbar flex gap-3 overflow-x-auto pb-1">
          <UserProgressVideoCard
            v-for="video in watchLater"
            :key="video.id"
            :video="video"
            variant="watchlater"
          />
        </div>
      </section>
    </div>

    <!-- сетка библиотеки -->
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <UserLibraryColumn
        v-for="column in libraryColumns"
        :key="column.title"
        :title="column.title"
        :type="column.type"
        :link="column.link"
        :items="column.items"
      />
    </section>
  </div>
</template>

<script setup>
import { RiPlayCircleLine, RiTimeLine } from '@remixicon/vue'
import UserProfileHeader from '@/components/User/ProfileHeader.vue'
import UserProgressVideoCard from '@/components/User/ProgressVideoCard.vue'
import UserLibraryColumn from '@/components/User/LibraryColumn.vue'

const currentUser = {
  name: 'Екатерина Бим',
  username: 'ekaterina_bim',
  avatar:
    'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
  isPremium: true,
  bio: 'Люблю моря, океаны и путешествия.',
  joinDate: 'На платформе с мая 2024',
  stats: [
    { value: '5,5K', label: 'Просмотры' },
    { value: '97', label: 'Плейлисты' },
    { value: '9,7K', label: 'Понравилось' },
    { value: '967', label: 'Подписки' },
    { value: '333', label: 'Видео' },
  ],
}

const tabs = [
  { label: 'Библиотека', to: '/user/videos' },
  { label: 'История', to: '/user/history' },
  { label: 'Смотреть позже', to: '/user/watchlist' },
  { label: 'Понравившиеся', to: '/user/liked' },
]

const continueWatching = [
  {
    id: 1,
    title: 'Путешествие по океану',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '28:10',
    watchedTime: '21:22',
    progress: 32,
    channel: 'Тайны океана',
    isVerified: true,
    link: '/channel/mediavideo',
  },
  {
    id: 2,
    title: 'Океаны: что мы знаем о них',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '22:25',
    watchedTime: '19:41',
    progress: 23,
    channel: 'Тайны океана',
    isVerified: true,
    link: '/',
  },
  {
    id: 3,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '33:44',
    watchedTime: '13:15',
    progress: 53,
    channel: 'Тайны океана',
    isVerified: true,
    link: '/',
  },
]

const watchLater = [
  {
    id: 4,
    title: 'Моря: сила и красота планеты',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '43:17',
    views: '122 млн просмотров',
    link: '/',
  },
  {
    id: 5,
    title: 'Неоновые ночи на океане',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '11:42',
    views: '48 млн просмотров',
    link: '/',
  },
]

const libraryColumns = [
  {
    title: 'Плейлисты',
    type: 'playlist',
    link: '/user/playlists',
    items: [
      {
        id: 1,
        title: 'Документалки',
        meta: '48 видео',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/playlists',
      },
      {
        id: 2,
        title: 'Путешествия',
        meta: '92 видео',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/playlists',
      },
      {
        id: 3,
        title: 'Наука',
        meta: '59 видео',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/playlists',
      },
    ],
  },
  {
    title: 'Понравившиеся',
    type: 'liked',
    link: '/user/liked',
    items: [
      {
        id: 4,
        title: 'Тайны океана',
        meta: '121 тыс. просмотров',
        duration: '4:15:00',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/channel/mediavideo',
      },
      {
        id: 5,
        title: 'Жизнь на глубине океана возможна?',
        meta: '7,2 млн просмотров',
        duration: '49:28',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/liked',
      },
      {
        id: 6,
        title: 'Лучшие моменты',
        meta: '90 тыс. просмотров',
        duration: '2:57',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/liked',
      },
    ],
  },
  {
    title: 'Подписки',
    type: 'subscription',
    link: '/user/subscriptions',
    items: [
      {
        id: 7,
        title: 'Тайны морей',
        meta: '7,2 млн подписчиков',
        isVerified: true,
        thumbnail: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
        link: '/channel/mediavideo',
      },
      {
        id: 8,
        title: 'Канал Юрий Гагарин',
        meta: '320 тыс. подписчиков',
        thumbnail: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
        link: '/user/subscriptions',
      },
      {
        id: 9,
        title: 'Канал Виктор Цой',
        meta: '990 тыс. подписчиков',
        thumbnail: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
        link: '/user/subscriptions',
      },
    ],
  },
  {
    title: 'История',
    type: 'history',
    link: '/user/history',
    items: [
      {
        id: 10,
        title: 'Путешествие по дну океана',
        duration: '18:10',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/history',
      },
      {
        id: 11,
        title: 'Океан: обзор изнутри',
        duration: '1:12:15',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/history',
      },
      {
        id: 12,
        title: 'Глубины океана',
        duration: '56:48',
        thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
        link: '/user/history',
      },
    ],
  },
]
</script>
