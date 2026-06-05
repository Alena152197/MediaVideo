<!-- студия канала -->
<template>
  <div class="flex flex-col gap-6 text-white">
    <!-- шапка -->
    <header class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex flex-col gap-1">
        <p class="text-text-secondary text-sm">Главная</p>
        <h1 class="text-2xl font-semibold sm:text-3xl">Студия канала</h1>
        <p class="text-text-secondary max-w-xl text-sm">
          Управляйте контентом, анализируйте статистику и развивайте свой канал.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-text-secondary flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-[#101216] px-3 py-2 text-sm hover:text-white"
        >
          27 мая — 2 июня 2024
          <RiArrowDownSLine class="size-4" />
        </button>
        <button type="button" class="text-text-secondary relative cursor-pointer hover:text-white">
          <RiNotification3Line class="size-5" />
          <span class="bg-primary absolute -top-1 -right-1 size-2 rounded-full" />
        </button>
        <img
          src="https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig"
          alt="Профиль"
          class="size-9 rounded-full object-cover"
        />
      </div>
    </header>

    <!-- статистика -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StudioStatsCard
        v-for="stat in stats"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :change="stat.change"
        :data="stat.data"
      />
    </div>

    <!-- загрузка и график -->
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <StudioUploadZone />
      <StudioEffectivenessChart />
    </div>

    <!-- ваши видео -->
    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-medium">Ваши видео</h2>
      <StudioVideoTable />
    </div>
  </div>
</template>

<script setup>
import { RiArrowDownSLine, RiNotification3Line } from '@remixicon/vue'
import StudioStatsCard from '@/components/Studio/StatsCard.vue'
import StudioUploadZone from '@/components/Studio/UploadZone.vue'
import StudioEffectivenessChart from '@/components/Studio/EffectivenessChart.vue'
import StudioVideoTable from '@/components/Studio/VideoTable.vue'

const stats = [
  { title: 'Просмотры', value: '128 450', change: '+18,6%', data: [8, 12, 10, 18, 15, 22, 28] },
  { title: 'Время просмотра', value: '4 280 ч', change: '+12,3%', data: [6, 10, 14, 12, 18, 16, 24] },
  { title: 'Подписчики', value: '+342', change: '+8,1%', data: [4, 6, 8, 7, 10, 12, 14] },
  { title: 'Расчётный доход', value: '24 680 ₽', change: '+22,4%', data: [5, 9, 11, 16, 14, 20, 26] },
]
</script>
