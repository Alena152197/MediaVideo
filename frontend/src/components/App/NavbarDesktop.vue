<!-- десктопная навигационная панель -->
<template>
  <div
    class="text-text-main flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-linear-to-r from-[#0f1524] to-[#0f131e] p-4"
  >
    <AppLogo />

    <nav class="flex flex-col gap-1">
      <NavLink v-for="link in mainLinks" :key="link" :navLinks="link" />
    </nav>

    <hr class="my-4 border-white/10" />

    <h3 class="my-2 text-sm text-white/50 uppercase">Библиотека</h3>
    <nav class="flex flex-col gap-1">
      <NavLink v-for="link in libraryLinks" :key="link.to + link.title" :navLinks="link" />
    </nav>

    <hr class="my-4 border-white/10" />

    <h3 class="my-2 text-sm text-white/50 uppercase">Подписки</h3>
    <nav class="flex flex-col gap-1">
      <RouterLink
        v-for="link in visibleSubscriptionLinks"
        :key="link.to + link.title"
        :to="link.to"
        :title="link.title"
        class="animal-fade-in-up relative flex items-center gap-3 truncate rounded-lg px-3 py-2 text-sm font-light text-ellipsis transition-colors hover:bg-[#252a3d]"
        :class="{
          'before:bg-primary before:absolute before:top-1/2 before:left-0 before:h-1/2 before:w-0.5 before:translate-y-[-50%] before:rounded':
            $route.path === link.to,
        }"
      >
        <img :src="link.src" :alt="link.title" class="size-6 rounded-full object-cover" />
        {{ link.title }}
      </RouterLink>
      <button
        class="relative flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-light transition-colors hover:bg-[#252a3d]"
        :class="{
          'before:bg-primary before:absolute before:top-1/2 before:left-0 before:h-1/2 before:w-0.5 before:translate-y-[-50%] before:rounded':
            $route.path === '/user/subscriptions',
        }"
        @click="subscriptionLength = !subscriptionLength"
      >
        <RiArrowDownSLine v-if="!subscriptionLength" class="size-5" />
        <RiArrowUpSLine v-else class="size-5" />
        {{ subscriptionLength ? 'Свернуть' : 'Развернуть' }}
      </button>
    </nav>
  </div>
</template>

<script setup>
import AppLogo from '@/components/App/Logo.vue'
import NavLink from '@/components/Base/NavLink.vue'
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/vue'
import { reactive, ref, computed } from 'vue'

const mainLinks = reactive([
  { to: '/', title: 'Главная', icon: 'RiHome9Fill' },
  { to: '/user/subscriptions', title: 'Подписки', icon: 'RiClapperboardLine' },
  { to: '/user/watchlist', title: 'Смотреть позже', icon: 'RiTimeLine' },
  { to: '/user/liked', title: 'Понравившиеся', icon: 'RiHeart2Line' },
])

const libraryLinks = reactive([
  { to: '/user/history', title: 'История', icon: 'RiHistoryLine' },
  { to: '/user/playlists', title: 'Плейлисты', icon: 'RiPlayList2Line' },
  { to: '/user/videos', title: 'Ваши видео', icon: 'RiYoutubeLine' },
])

const subscriptionLinks = reactive([
  {
    to: '/',
    title: 'Канал Юрий Гагарин',
    icon: 'RiRocketLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Александр Пушкин',
    icon: 'RiQuillPenLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Виктор Цой',
    icon: 'RiMusic2Line',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Лев Толстой',
    icon: 'RiBookOpenLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Анна Ахматова',
    icon: 'RiBook2Line',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Дмитрий Менделеев',
    icon: 'RiFlaskLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Пётр I',
    icon: 'RiUserStarLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Фёдор Достоевский',
    icon: 'RiBookOpenLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Сергей Есенин',
    icon: 'RiLeafLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
  {
    to: '/',
    title: 'Канал Михаил Ломоносов',
    icon: 'RiGraduationCapLine',
    src: 'https://i.pinimg.com/736x/cb/80/3a/cb803ac7814c66c7bd6e4258341297b9.jpg',
  },
])

const subscriptionLength = ref(false)
const visibleSubscriptionLinks = computed(() => {
  return subscriptionLinks.slice(0, subscriptionLength.value ? subscriptionLinks.length : 3)
})
</script>
