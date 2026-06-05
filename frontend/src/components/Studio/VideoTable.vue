<!-- таблица видео -->
<template>
  <section class="flex flex-col gap-4 rounded-2xl border border-border bg-[#101216] p-5">
    <nav class="hide-scrollbar flex gap-2 overflow-x-auto">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        class="shrink-0 rounded-full px-4 py-2 text-sm transition-colors"
        :class="activeTab === tab
          ? 'bg-primary text-white'
          : 'bg-[#1d202a] text-text-secondary hover:text-white'"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </nav>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr class="text-text-secondary border-b border-white/10">
            <th class="pb-3 pr-4 font-medium">Видео</th>
            <th class="pb-3 pr-4 font-medium">Статус</th>
            <th class="pb-3 pr-4 font-medium">Доступ</th>
            <th class="pb-3 pr-4 font-medium">Просмотры</th>
            <th class="pb-3 pr-4 font-medium">Комментарии</th>
            <th class="pb-3 pr-4 font-medium">Дата</th>
            <th class="pb-3 font-medium" />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="video in videos"
            :key="video.id"
            class="border-b border-white/5 transition-colors hover:bg-[#1d202a]/50"
          >
            <td class="py-4 pr-4">
              <div class="flex items-center gap-3">
                <div class="relative shrink-0">
                  <img
                    :src="video.thumbnail"
                    :alt="video.title"
                    class="aspect-video h-12 w-20 rounded-lg object-cover"
                  />
                  <span class="bg-background/80 absolute right-1 bottom-1 rounded px-1 text-[10px]">
                    {{ video.duration }}
                  </span>
                </div>
                <p class="line-clamp-2 max-w-xs font-medium">{{ video.title }}</p>
              </div>
            </td>
            <td class="py-4 pr-4">
              <span class="flex items-center gap-1.5">
                <span class="bg-success size-2 rounded-full" />
                {{ video.status }}
              </span>
            </td>
            <td class="py-4 pr-4">
              <span class="text-text-secondary flex items-center gap-1.5">
                <RiGlobalLine class="size-4" />
                {{ video.access }}
              </span>
            </td>
            <td class="py-4 pr-4">{{ video.views }}</td>
            <td class="py-4 pr-4">{{ video.comments }}</td>
            <td class="py-4 pr-4 text-text-secondary">{{ video.date }}</td>
            <td class="py-4">
              <button type="button" class="text-text-secondary cursor-pointer hover:text-white">
                <RiMore2Fill class="size-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RiGlobalLine, RiMore2Fill } from '@remixicon/vue'

const tabs = ['Опубликованные', 'Черновики', 'Запланированные', 'Архив']
const activeTab = ref('Опубликованные')

const videos = [
  {
    id: 1,
    title: 'Путешествие по Океану',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '31:12',
    status: 'Опубликовано',
    access: 'Открытый',
    views: '23 450',
    comments: '128',
    date: '2 июн. 2024',
  },
  {
    id: 2,
    title: 'Космос: что мы знаем о Вселенной',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '18:42',
    status: 'Опубликовано',
    access: 'Открытый',
    views: '18 920',
    comments: '94',
    date: '28 мая 2024',
  },
  {
    id: 3,
    title: 'Глубины океана: тайны Марианской впадины',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
    duration: '24:08',
    status: 'Опубликовано',
    access: 'Открытый',
    views: '12 340',
    comments: '67',
    date: '25 мая 2024',
  },
]
</script>
