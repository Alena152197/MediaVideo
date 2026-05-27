<!-- шапка -->
<template>
  <div class="flex w-full items-center justify-between">
    <AppSearch />
    <nav class="flex items-center gap-4">
      <RouterLink to="/"
        class="text-text-main flex items-center gap-3 text-center text-2xl font-medium uppercase select-none"
        title="Загрузить видео">
        <RiVideoAddLine class="size-6 text-white" />
      </RouterLink>
      <RouterLink to="/"
        class="text-text-main relative flex items-center gap-3 text-center text-2xl font-medium uppercase select-none"
        title="Уведомления">
        <RiNotification3Line class="size-6 text-white" />
        <span
          class="bg-surface absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-xs text-white">
          3
        </span>
      </RouterLink>
      <button type="button" @click="emit('openAuthModal')"
        class="text-text-main text-md cursor-pointer uppercase select-none">
        Вход
      </button>
      <button @click="isOpen = !isOpen"
        class="text-text-main group flex cursor-pointer items-center gap-1 text-center text-2xl font-medium uppercase select-none"
        title="Профиль">
        <img src="https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig"
          class="group-hover:border-surface size-12 rounded-full border-2 object-cover text-white transition-all duration-300 group-hover:scale-105" />
        <RiArrowDownSLine class="group-hover:text-surface transition-color size-5 duration-300" />
      </button>
    </nav>
    <HeaderProfile class="absolute top-4 right-4 panel-soft-pop" :user="currentUser" :isOpen="isOpen" @togle-open="toggleOpen" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RiVideoAddLine, RiNotification3Line, RiArrowDownSLine } from '@remixicon/vue'
import AppSearch from '@/components/App/Search.vue'
import HeaderProfile from '@/components/App/HeaderProfile.vue'

const emit = defineEmits(['openAuthModal'])

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const currentUser = {
  name: 'Екатерина Бим',
  avatar:
    'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
  username: 'ekaterina_bim',
  isVerified: true,
  videoCount: 159,
  subscribers: 7300,
  subscription: 157,
}
</script>
