<!-- компонент профиля в шапке -->
<template>
  <div v-if="props.isOpen"
    class="flex w-sm flex-col gap-4 rounded-lg border border-[#232227] bg-[#101216] p-4 text-white">
    <header class="flex justify-between">
      <h3 class="text-base">Профиль</h3>
      <button class="cursor-pointer" @click="emit('togle-open')">
        <RiCloseLine :class="props.isOpen ? 'rotate-90' : ''" />
      </button>
    </header>
    <main>
      <div class="flex items-start gap-4">
        <!-- аватар -->
        <div class="relative">
          <img :src="user.avatar" class="size-20 rounded-full object-cover" />
          <button class="bg-primary absolute right-1 bottom-0  cursor-pointer rounded-full p-1">
            <RiPencilFill class="size-4" />
          </button>
        </div>

        <!-- информация о пользователе -->
        <div class="flex flex-col gap-1">
          <h4 class="text-lg font-medium">{{ user.name }}</h4>
          <p class="text-sm text-gray-400">@{{ user.username }}</p>
          <div class="bg-primary/10 flex items-center gap-1 rounded-lg px-2 py-1 w-max">
            <RiVerifiedBadgeFill class="text-primary size-4" />
            <span class="text-[12px] text-gray-400">Подтверждено</span>
          </div>
          <div class="flex select-none divide-x divide-solid divide-white/20 py-2">
            <p class="flex flex-col items-center px-3">159<span class="text-white/60 text-[10px]">Видео</span></p>
            <p class="flex flex-col items-center px-3">7.3К<span class="text-white/60 text-[10px]">Подписчики</span></p>
            <p class="flex flex-col items-center px-3">157<span class="text-white/60 text-[10px]">Подписки</span></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RiCloseLine, RiPencilFill, RiVerifiedBadgeFill } from '@remixicon/vue'

const emit = defineEmits(['togle-open'])
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})
</script>
