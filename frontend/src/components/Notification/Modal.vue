<!-- панель уведомлений -->
<template>
  <div
    v-if="isOpen"
    class="panel-soft-pop flex w-96 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-[#232227] bg-[#101216] text-white shadow-xl"
  >
    <header class="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <h3 class="font-medium">Уведомления</h3>
      <button type="button" class="text-text-secondary cursor-pointer hover:text-white" @click="emit('close')">
        <RiCloseLine class="size-5" />
      </button>
    </header>

    <nav class="flex border-b border-white/10 px-2">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="relative flex cursor-pointer items-center gap-1.5 px-3 py-3 text-sm transition-colors"
        :class="activeTab === tab.id ? 'text-white' : 'text-text-secondary hover:text-white'"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
        <span
          class="rounded-full px-1.5 py-0.5 text-[10px]"
          :class="activeTab === tab.id ? 'bg-primary text-white' : 'bg-white/10 text-text-secondary'"
        >
          {{ tab.count }}
        </span>
        <span
          v-if="activeTab === tab.id"
          class="bg-primary absolute inset-x-2 bottom-0 h-0.5 rounded-full"
        />
      </button>
    </nav>

    <ul class="hide-scrollbar max-h-96 overflow-y-auto">
      <li
        v-for="item in filteredNotifications"
        :key="item.id"
        class="flex gap-3 border-b border-white/5 px-4 py-3 transition-colors hover:bg-[#1d202a]/50"
        :class="{ 'bg-primary/5': item.unread }"
      >
        <div class="relative shrink-0">
          <img
            v-if="item.avatar"
            :src="item.avatar"
            :alt="item.title"
            class="size-10 rounded-full object-cover"
          />
          <span
            v-else
            class="flex size-10 items-center justify-center rounded-full"
            :class="item.iconBg"
          >
            <component :is="item.icon" class="size-5 text-white" />
          </span>
          <span
            v-if="item.unread"
            class="bg-primary absolute -top-0.5 -left-0.5 size-2 rounded-full"
          />
        </div>

        <div class="min-w-0 flex-1">
          <p class="text-sm leading-snug">{{ item.title }}</p>
          <p v-if="item.subtitle" class="text-text-secondary mt-0.5 line-clamp-2 text-xs">
            {{ item.subtitle }}
          </p>
          <p class="text-text-secondary mt-1 text-xs">{{ item.time }}</p>
          <button
            v-if="item.action"
            type="button"
            class="bg-primary/20 text-primary mt-2 cursor-pointer rounded-full px-3 py-1 text-xs font-medium hover:bg-primary/30"
          >
            {{ item.action }}
          </button>
        </div>

        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title"
          class="aspect-video h-12 w-20 shrink-0 rounded-lg object-cover"
        />
      </li>
    </ul>

    <footer class="flex items-center justify-between border-t border-white/10 px-4 py-3">
      <button type="button" class="text-text-secondary flex cursor-pointer items-center gap-1.5 text-xs hover:text-white">
        <RiSettings3Line class="size-4" />
        Настройки уведомлений
      </button>
      <button type="button" class="text-primary cursor-pointer text-xs hover:underline">
        Отметить все как прочитанные
      </button>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  RiCloseLine,
  RiSettings3Line,
  RiHeartFill,
  RiUploadCloud2Line,
  RiMegaphoneLine,
} from '@remixicon/vue'

const emit = defineEmits(['close'])

defineProps({
  isOpen: { type: Boolean, required: true },
})

const activeTab = ref('all')

const tabs = [
  { id: 'all', label: 'Все', count: 12 },
  { id: 'unread', label: 'Непрочитанные', count: 5 },
  { id: 'mentions', label: 'Упоминания', count: 2 },
]

const notifications = [
  {
    id: 1,
    tab: 'all',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    title: 'Иван Петров подписался на вас',
    time: '5 минут назад',
    action: 'Подписаться в ответ',
  },
  {
    id: 2,
    tab: 'all',
    unread: true,
    icon: RiHeartFill,
    iconBg: 'bg-primary',
    title: 'Ваше видео понравилось 128 людям',
    subtitle: 'Путешествие по Океану',
    time: '1 час назад',
    thumbnail: 'https://images.unsplash.com/photo-1516738901171-8eb4ec13bd3a?w=200&q=80',
  },
  {
    id: 3,
    tab: 'mentions',
    unread: true,
    avatar: 'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
    title: 'Мария Смирнова прокомментировала ваше видео',
    subtitle: 'Отличное видео! Очень полезно 👍',
    time: '2 часа назад',
    thumbnail: 'https://images.unsplash.com/photo-1516738901171-8eb4ec13bd3a?w=200&q=80',
  },
  {
    id: 4,
    tab: 'all',
    unread: false,
    icon: RiUploadCloud2Line,
    iconBg: 'bg-primary',
    title: 'Ваше видео загружено',
    subtitle: 'Космос: что мы знаем о Вселенной',
    time: '3 часа назад',
    thumbnail: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=200&q=80',
  },
  {
    id: 5,
    tab: 'unread',
    unread: true,
    icon: RiMegaphoneLine,
    iconBg: 'bg-accent',
    title: 'Новый комментарий',
    subtitle: 'Алексей оставил комментарий к вашему видео',
    time: '5 часов назад',
    thumbnail: 'https://img.ixbt.site/live/images/original/08/11/28/2025/05/25/51ee4052a2.png',
  },
  {
    id: 6,
    tab: 'all',
    unread: false,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    title: 'Дмитрий Кузнецов поделился вашим видео',
    time: 'Вчера, 22:15',
    thumbnail: 'https://images.unsplash.com/photo-1516738901171-8eb4ec13bd3a?w=200&q=80',
  },
]

const filteredNotifications = computed(() => {
  if (activeTab.value === 'all') return notifications
  if (activeTab.value === 'unread') return notifications.filter((n) => n.unread)
  return notifications.filter((n) => n.tab === 'mentions')
})
</script>
