<!-- шапка профиля пользователя -->
<template>
  <header class="flex flex-col gap-6 rounded-2xl border border-border bg-[#101216] p-5 sm:p-6">
    <!-- верхняя строка -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex gap-4">
        <img
          :src="user.avatar"
          :alt="user.name"
          class="size-20 shrink-0 rounded-full border-2 border-white/20 object-cover sm:size-24"
        />
        <div class="flex flex-col gap-1.5">
          <h1 class="text-xl font-semibold sm:text-2xl">{{ user.name }}</h1>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-text-secondary text-sm">@{{ user.username }}</span>
            <span
              v-if="user.isPremium"
              class="from-primary to-surface rounded-full bg-linear-to-r px-2.5 py-0.5 text-[11px] font-medium text-white"
            >
              Премиум
            </span>
          </div>
          <p v-if="user.bio" class="text-text-secondary mt-1 max-w-md text-sm leading-relaxed">
            {{ user.bio }}
          </p>
          <p v-if="user.joinDate" class="text-text-secondary/70 text-xs">
            {{ user.joinDate }}
          </p>
        </div>
      </div>
      <button
        type="button"
        class="flex w-max shrink-0 cursor-pointer items-center gap-2 rounded-full border border-border bg-[#1d202a] px-4 py-2 text-sm transition-colors hover:bg-[#252a3d]"
      >
        <RiPencilLine class="size-4" />
        Редактировать профиль
      </button>
    </div>

    <!-- статистика -->
    <div class="flex flex-wrap justify-between gap-y-4 border-t border-white/10 pt-5 sm:divide-x sm:divide-white/10">
      <p
        v-for="(stat, index) in user.stats"
        :key="stat.label"
        class="flex min-w-[4.5rem] flex-1 flex-col items-center px-2 sm:px-4"
        :class="{ 'sm:pl-0': index === 0 }"
      >
        <span class="text-lg font-semibold">{{ stat.value }}</span>
        <span class="text-text-secondary text-xs">{{ stat.label }}</span>
      </p>
    </div>
  </header>
</template>

<script setup>
import { RiPencilLine } from '@remixicon/vue'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>
