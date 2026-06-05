<!-- зона загрузки видео -->
<template>
  <div
    class="flex min-h-72 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/20 bg-[#101216] p-8 text-center"
  >
    <div class="bg-primary/15 flex size-14 items-center justify-center rounded-full">
      <RiUploadCloud2Line class="text-primary size-7" />
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-lg font-medium">Загрузите видео</h3>
      <p class="text-text-secondary text-sm">
        Перетащите файл сюда или нажмите для выбора
      </p>
      <p class="text-text-secondary/70 text-xs">MP4, MOV, AVI до 8 ГБ</p>
    </div>
    <button
      type="button"
      class="from-primary to-primary-hover cursor-pointer rounded-full bg-linear-to-r px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
    >
      Выбрать файл
    </button>
  </div>
</template>

<script setup>
import { RiUploadCloud2Line } from '@remixicon/vue'
</script>
