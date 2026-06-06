<!-- панель профиля в шапке -->
<template>
  <div
    v-if="isOpen"
    class="panel-soft-pop flex w-80 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-[#232227] bg-[#101216] text-white shadow-xl"
  >
    <header class="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <h3 class="font-medium">Профиль</h3>
      <button type="button" class="text-text-secondary cursor-pointer hover:text-white" @click="emit('close')">
        <RiCloseLine class="size-5" />
      </button>
    </header>

    <div class="border-b border-white/10 px-4 py-4">
      <div class="flex items-start gap-4">
        <div class="relative shrink-0">
          <img :src="user.avatar" :alt="user.name" class="size-16 rounded-full object-cover" />
          <button
            type="button"
            class="bg-primary absolute right-0 bottom-0 flex size-6 cursor-pointer items-center justify-center rounded-full"
          >
            <RiPencilFill class="size-3" />
          </button>
        </div>
        <div class="flex min-w-0 flex-col gap-1">
          <h4 class="font-medium">{{ user.name }}</h4>
          <p class="text-text-secondary text-sm">@{{ user.username }}</p>
          <span
            v-if="user.isPremium"
            class="from-primary to-surface mt-1 flex w-max items-center gap-1 rounded-md bg-linear-to-r px-2 py-0.5 text-[11px] font-medium"
          >
            <RiVipCrownFill class="size-3" />
            Премиум
          </span>
        </div>
      </div>
      <div class="mt-4 flex divide-x divide-white/10">
        <p
          v-for="stat in user.stats"
          :key="stat.label"
          class="flex flex-1 flex-col items-center"
        >
          <span class="text-sm font-semibold">{{ stat.value }}</span>
          <span class="text-text-secondary text-[10px]">{{ stat.label }}</span>
        </p>
      </div>
    </div>

    <nav class="flex flex-col py-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        class="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#1d202a]"
        @click="emit('close')"
      >
        <component :is="item.icon" class="text-text-secondary size-5 shrink-0" />
        <div class="min-w-0 flex-1">
          <p class="text-sm">{{ item.title }}</p>
          <p class="text-text-secondary text-xs">{{ item.subtitle }}</p>
        </div>
        <RiArrowRightSLine class="text-text-secondary size-4 shrink-0" />
      </RouterLink>

      <div class="flex items-center gap-3 px-4 py-3">
        <RiMoonLine class="text-text-secondary size-5 shrink-0" />
        <div class="min-w-0 flex-1">
          <p class="text-sm">Тема оформления</p>
          <p class="text-text-secondary text-xs">Тёмная тема</p>
        </div>
        <button
          type="button"
          class="relative h-5 w-9 shrink-0 cursor-pointer rounded-full bg-primary"
          @click="darkTheme = !darkTheme"
        >
          <span
            class="absolute top-0.5 size-4 rounded-full bg-white transition-all"
            :class="darkTheme ? 'left-4' : 'left-0.5'"
          />
        </button>
      </div>

      <button
        type="button"
        class="flex cursor-pointer items-center gap-3 px-4 py-3 text-red-400 transition-colors hover:bg-[#1d202a]"
      >
        <RiLogoutBoxRLine class="size-5 shrink-0" />
        <span class="text-sm">Выйти из аккаунта</span>
      </button>
    </nav>

    <footer class="border-t border-white/10 px-4 py-3">
      <p class="text-text-secondary text-center text-[10px]">MediaVideo</p>
      <div class="text-text-secondary mt-1 flex justify-center gap-2 text-[10px]">
        <button type="button" class="cursor-pointer hover:text-white">Помощь</button>
        <span>·</span>
        <button type="button" class="cursor-pointer hover:text-white">Условия</button>
        <span>·</span>
        <button type="button" class="cursor-pointer hover:text-white">Конфиденциальность</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  RiCloseLine,
  RiPencilFill,
  RiVipCrownFill,
  RiArrowRightSLine,
  RiComputerLine,
  RiBarChart2Line,
  RiPlayList2Line,
  RiTimeLine,
  RiSettings3Line,
  RiMoonLine,
  RiLogoutBoxRLine,
} from '@remixicon/vue'

const emit = defineEmits(['close'])

defineProps({
  user: { type: Object, required: true },
  isOpen: { type: Boolean, required: true },
})

const darkTheme = ref(true)

const menuItems = [
  {
    title: 'Мой канал',
    subtitle: 'Перейти на страницу канала',
    to: '/channel/mediavideo',
    icon: RiComputerLine,
  },
  {
    title: 'Студия автора',
    subtitle: 'Аналитика, видео, монетизация',
    to: '/studio',
    icon: RiBarChart2Line,
  },
  {
    title: 'Плейлисты',
    subtitle: 'Ваши плейлисты и сохранённые видео',
    to: '/user/playlists',
    icon: RiPlayList2Line,
  },
  {
    title: 'Смотреть позже',
    subtitle: 'Видео, которые вы хотите посмотреть',
    to: '/user/watchlist',
    icon: RiTimeLine,
  },
  {
    title: 'Настройки аккаунта',
    subtitle: 'Профиль, безопасность, уведомления',
    to: '/user/videos',
    icon: RiSettings3Line,
  },
]
</script>
