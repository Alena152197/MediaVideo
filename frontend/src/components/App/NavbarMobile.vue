<!-- мобильная навигационная панель -->
<template>
  <div class="w-full rounded-t-2xl bg-[#121827]">
    <nav class="text-text-main grid w-full grid-cols-5">
      <RouterLink
        to="/"
        title="Главная"
        class="flex translate-y-4 flex-col items-center text-[12px]"
        :class="{ 'text-surface': $route.path === '/' }"
      >
        <RiHome9Fill class="size-6" />
        Главная
      </RouterLink>
      <RouterLink
        to="/"
        title="История"
        class="flex translate-y-4 flex-col items-center text-[12px]"
      >
        <RiHistoryLine class="size-6" />
        История
      </RouterLink>
      <RouterLink
        to="/"
        title="Добавить видео"
        class="from-primary to-primary-hover flex h-20 w-20 -translate-y-6 flex-col items-center justify-center rounded-full border-8 border-[#121827] bg-radial"
      >
        <RiAddLine class="text-text-main size-12" />
      </RouterLink>
      <RouterLink
        to="/"
        title="Подписки"
        class="flex translate-y-4 flex-col items-center text-[12px]"
      >
        <RiClapperboardLine class="size-6" />
        Подписки
      </RouterLink>
      <RouterLink
        to="/"
        title="Библиотека"
        class="flex translate-y-4 flex-col items-center text-[12px]"
      >
        <RiYoutubeLine class="size-6" />
        Библиотека
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import {
  RiHome9Fill,
  RiAddLine,
  RiHistoryLine,
  RiClapperboardLine,
  RiYoutubeLine,
} from '@remixicon/vue'
</script>
