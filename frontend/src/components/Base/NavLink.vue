<!-- компонент ссылки навигации -->
<template>
  <RouterLink
    :to="navLinks.to"
    class="animal-fade-in-up relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-light transition-colors hover:bg-[#252a3d]"
    :class="{
      'before:bg-primary before:absolute before:top-1/2 before:left-0 before:h-1/2 before:w-0.5 before:translate-y-[-50%] before:rounded':
        navLinks.to === '/studio' ? $route.path.startsWith('/studio') : $route.path === navLinks.to,
    }"
  >
    <RiHome9Fill v-if="navLinks.icon == 'RiHome9Fill'" class="size-5" />
    <RiClapperboardLine v-if="navLinks.icon == 'RiClapperboardLine'" class="size-5" />
    <RiTimeLine v-if="navLinks.icon == 'RiTimeLine'" class="size-5" />
    <RiHeart2Line v-if="navLinks.icon == 'RiHeart2Line'" class="size-5" />
    <RiHistoryLine v-if="navLinks.icon == 'RiHistoryLine'" class="size-5" />
    <RiPlayList2Line v-if="navLinks.icon == 'RiPlayList2Line'" class="size-5" />
    <RiYoutubeLine v-if="navLinks.icon == 'RiYoutubeLine'" class="size-5" />
    <RiDashboard3Line v-if="navLinks.icon == 'RiDashboard3Line'" class="size-5" />
    <RiArrowDownSLine v-if="navLinks.icon == 'RiArrowDownSLine'" class="size-5" />

    {{ navLinks.title }}
  </RouterLink>
</template>

<script setup>
import {
  RiHome9Fill,
  RiClapperboardLine,
  RiTimeLine,
  RiHeart2Line,
  RiHistoryLine,
  RiPlayList2Line,
  RiYoutubeLine,
  RiDashboard3Line,
  RiArrowDownSLine,
} from '@remixicon/vue'

defineProps({
  navLinks: {
    type: Object,
    required: true,
  },
})
// console.log(props.navLinks)
// console.log(props.navLinks.to)
</script>
