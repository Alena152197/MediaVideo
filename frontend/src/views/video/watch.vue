<!-- страница просмотра видео -->
<template>
  <div class="flex flex-col gap-6 text-white lg:flex-row">
    <!-- основной контент -->
    <div class="flex min-w-0 flex-1 flex-col gap-4">
      <div class="w-full max-w-2xl">
        <VideoPlayer
          :poster="video.poster"
          :title="video.title"
          :duration="video.duration"
          :current-time="video.currentTime"
          :progress="video.progress"
        />
      </div>

      <h1 class="text-xl font-semibold leading-snug sm:text-2xl">
        {{ video.title }}
      </h1>
      <p class="text-text-secondary text-sm">
        {{ video.views }} просмотров • {{ video.publishedAt }}
      </p>

      <!-- канал и действия -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <RouterLink :to="video.channel.link">
            <img
              :src="video.channel.avatar"
              :alt="video.channel.name"
              class="size-11 rounded-full object-cover"
            />
          </RouterLink>
          <div class="flex flex-col">
            <RouterLink
              :to="video.channel.link"
              class="flex items-center gap-1 text-sm font-medium hover:text-primary"
            >
              {{ video.channel.name }}
              <RiVerifiedBadgeFill v-if="video.channel.isVerified" class="text-primary size-4" />
            </RouterLink>
            <span class="text-text-secondary text-xs">{{ video.channel.subscribers }}</span>
          </div>
          <button
            type="button"
            class="ml-2 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all"
            :class="isSubscribed
              ? 'border border-border bg-[#1d202a] hover:bg-[#252a3d]'
              : 'from-primary to-primary-hover bg-linear-to-r hover:opacity-90'"
            @click="isSubscribed = !isSubscribed"
          >
            {{ isSubscribed ? 'Вы подписаны' : 'Подписаться' }}
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <div class="flex items-center overflow-hidden rounded-full border border-border bg-[#1d202a]">
            <button type="button" class="flex cursor-pointer items-center gap-1.5 px-4 py-2 text-sm hover:bg-[#252a3d]">
              <RiThumbUpLine class="size-5" />
              {{ video.likes }}
            </button>
            <span class="h-6 w-px bg-white/10" />
            <button type="button" class="cursor-pointer px-3 py-2 hover:bg-[#252a3d]">
              <RiThumbDownLine class="size-5" />
            </button>
          </div>
          <button
            type="button"
            class="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-[#1d202a] px-4 py-2 text-sm hover:bg-[#252a3d]"
          >
            <RiShareForwardLine class="size-5" />
            Поделиться
          </button>
          <button
            type="button"
            class="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-[#1d202a] px-4 py-2 text-sm hover:bg-[#252a3d]"
          >
            <RiPlayListAddLine class="size-5" />
            Сохранить
          </button>
          <button
            type="button"
            class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-[#1d202a] hover:bg-[#252a3d]"
          >
            <RiMore2Fill class="size-5" />
          </button>
        </div>
      </div>

      <!-- описание -->
      <div class="rounded-xl bg-[#1d202a] p-4">
        <p class="text-sm leading-relaxed" :class="{ 'line-clamp-3': !showFullDescription }">
          {{ video.description }}
        </p>
        <button
          type="button"
          class="text-text-secondary mt-2 cursor-pointer text-sm font-medium hover:text-white"
          @click="showFullDescription = !showFullDescription"
        >
          {{ showFullDescription ? 'Свернуть' : 'Ещё' }}
        </button>
      </div>

      <VideoComments :comments="comments" />
    </div>

    <!-- сайдбар -->
    <div class="w-full shrink-0 lg:w-96">
      <VideoWatchSidebar :videos="nextVideos" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  RiVerifiedBadgeFill,
  RiThumbUpLine,
  RiThumbDownLine,
  RiShareForwardLine,
  RiPlayListAddLine,
  RiMore2Fill,
} from '@remixicon/vue'
import VideoPlayer from '@/components/Video/Player.vue'
import VideoWatchSidebar from '@/components/Video/WatchSidebar.vue'
import VideoComments from '@/components/Video/Comments.vue'

const isSubscribed = ref(false)
const showFullDescription = ref(false)

const video = {
  title: 'Путешествие по Океану',
  poster: 'https://avatars.mds.yandex.net/i?id=e035236b2efa962a010223a2fd7fefcb_l-10869844-images-thumbs&n=13',
  duration: '3:02:15',
  currentTime: '30:24',
  progress: 46,
  views: '3 248 765',
  publishedAt: '5 дней назад',
  likes: '322 тыс.',
  description:
    'Погрузитесь в невероятное путешествие по бескрайним просторам океана — от зеркальной глади тропических лагун до таинственных глубин, где царит вечный полумрак. Уникальная подводная съёмка морских обитателей, встречи с островными сообществами и советы для самостоятельных дайв-экспедиций. В этом фильме мы покажем редкие кадры китов, дельфинов и экзотических рыб, расскажем о культуре прибрежных народов и поделимся маршрутами, которые подойдут как опытным дайверам, так и тем, кто впервые надевает маску.',
  channel: {
    name: 'Марат Бин',
    avatar: 'https://avatars.mds.yandex.net/i?id=e035236b2efa962a010223a2fd7fefcb_l-10869844-images-thumbs&n=13',
    subscribers: '481 тыс. подписчиков',
    isVerified: true,
    link: '/channel/mediavideo',
  },
}

const comments = [
  {
    id: 1,
    author: 'Семён Е.',
    avatar: 'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
    date: '9 дней назад',
    text: 'Фантастические виды! Спасибо за то, что показываете такую красоту нашей страны.',
    likes: '512',
    replies: 12,
  },
]

const nextVideos = [
  {
    id: 1,
    title: 'Космос: что мы знаем о Вселенной',
    channel: 'Пределы возможного',
    meta: '785 тыс. просмотров • 1 день назад',
    duration: '23:47',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    link: '/video/kosmos',
  },
  {
    id: 2,
    title: 'Глубины океана: тайны Марианской впадины',
    channel: 'Пределы возможного',
    meta: '620 тыс. просмотров • 3 дня назад',
    duration: '18:22',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    link: '/video/okean',
  },
  {
    id: 3,
    title: 'Арктика: жизнь на краю света',
    channel: 'Пределы возможного',
    meta: '410 тыс. просмотров • 5 дней назад',
    duration: '15:33',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    link: '/video/arktika',
  },
  {
    id: 4,
    title: 'Вулканы: сила и красота планеты',
    channel: 'Пределы возможного',
    meta: '890 тыс. просмотров • 1 неделю назад',
    duration: '21:17',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    link: '/video/vulkany',
  },
  {
    id: 5,
    title: 'Неоновые ночи Токио',
    channel: 'Путешествия мира',
    meta: '1,2 млн просмотров • 2 недели назад',
    duration: '12:45',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    link: '/video/tokio',
  },
]
</script>
