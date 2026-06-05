<!-- сайдбар студии канала -->
<template>
  <aside
    class="text-text-main flex h-full w-full flex-col overflow-y-auto bg-linear-to-b from-[#0f1524] to-[#0f131e] p-4"
  >
    <RouterLink to="/" class="mb-6 flex items-center gap-2">
      <span class="from-primary to-surface flex size-9 items-center justify-center rounded-lg bg-linear-to-br text-lg font-bold">
        S
      </span>
      <span class="text-lg font-semibold">MediaVideo</span>
    </RouterLink>

    <nav class="flex flex-col gap-1">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
        :class="isActive(link)
          ? 'bg-primary text-white'
          : 'text-white/70 hover:bg-[#252a3d] hover:text-white'"
      >
        <component :is="link.icon" class="size-5 shrink-0" />
        {{ link.title }}
      </RouterLink>
    </nav>

    <RouterLink
      to="/studio"
      class="from-primary to-primary-hover mt-6 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r py-3 text-sm font-medium transition-opacity hover:opacity-90"
    >
      <RiAddLine class="size-5" />
      Загрузить видео
    </RouterLink>

    <div class="mt-auto flex flex-col gap-3 pt-6">
      <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101216] p-3">
        <img
          :src="user.avatar"
          :alt="user.name"
          class="size-10 rounded-full object-cover"
        />
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium">{{ user.name }}</p>
          <p class="text-text-secondary truncate text-xs">{{ user.role }}</p>
        </div>
        <button type="button" class="text-text-secondary cursor-pointer hover:text-white">
          <RiMore2Fill class="size-5" />
        </button>
      </div>
      <RouterLink
        to="/channel/mediavideo"
        class="flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm transition-colors hover:bg-[#1d202a]"
      >
        <RiExternalLinkLine class="size-4" />
        Перейти на канал
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {
  RiDashboard3Line,
  RiHome9Line,
  RiVideoLine,
  RiBarChart2Line,
  RiChat3Line,
  RiMoneyDollarCircleLine,
  RiSettings3Line,
  RiAddLine,
  RiMore2Fill,
  RiExternalLinkLine,
} from '@remixicon/vue'

const route = useRoute()

const user = {
  name: 'Екатерина Б.',
  role: 'Профи канал',
  avatar: 'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
}

const navLinks = [
  { to: '/studio', title: 'Студия', icon: RiDashboard3Line, active: true },
  { to: '/studio', title: 'Главная', icon: RiHome9Line },
  { to: '/studio', title: 'Контент', icon: RiVideoLine },
  { to: '/studio', title: 'Аналитика', icon: RiBarChart2Line },
  { to: '/studio', title: 'Комментарии', icon: RiChat3Line },
  { to: '/studio', title: 'Монетизация', icon: RiMoneyDollarCircleLine },
  { to: '/studio', title: 'Настройки канала', icon: RiSettings3Line },
]

const isActive = (link) => link.title === 'Студия' && route.path.startsWith('/studio')
</script>
