<!-- шапка -->
<template>
  <div class="relative flex w-full items-center justify-between">
    <AppSearch />
    <nav class="flex items-center gap-4">
      <RouterLink
        to="/studio"
        class="text-text-main flex items-center gap-3 text-center text-2xl font-medium uppercase select-none"
        title="Загрузить видео"
      >
        <RiVideoAddLine class="size-6 text-white" />
      </RouterLink>

      <button
        type="button"
        class="text-text-main relative flex cursor-pointer items-center gap-3 text-center text-2xl font-medium uppercase select-none"
        title="Уведомления"
        @click="toggleNotifications"
      >
        <RiNotification3Line class="size-6 text-white" />
        <span
          class="bg-primary absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[10px] text-white"
        >
          1
        </span>
      </button>

      <button
        type="button"
        class="text-text-main group flex cursor-pointer items-center gap-1 text-center text-2xl font-medium uppercase select-none"
        title="Профиль"
        @click="toggleProfile"
      >
        <img
          :src="currentUser.avatar"
          class="group-hover:border-surface size-12 rounded-full border-2 object-cover text-white transition-all duration-300 group-hover:scale-105"
        />
        <RiArrowDownSLine class="group-hover:text-surface transition-color size-5 duration-300" />
      </button>
    </nav>

    <div class="absolute top-full right-0 z-50 mt-2 flex gap-3">
      <NotificationModal
        :is-open="isNotificationsOpen"
        @close="isNotificationsOpen = false"
      />
      <HeaderProfile
        :user="currentUser"
        :is-open="isProfileOpen"
        @close="isProfileOpen = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RiVideoAddLine, RiNotification3Line, RiArrowDownSLine } from '@remixicon/vue'
import AppSearch from '@/components/App/Search.vue'
import HeaderProfile from '@/components/App/HeaderProfile.vue'
import NotificationModal from '@/components/Notification/Modal.vue'

const isProfileOpen = ref(false)
const isNotificationsOpen = ref(false)

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
  if (isProfileOpen.value) isNotificationsOpen.value = false
}

const toggleNotifications = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value
  if (isNotificationsOpen.value) isProfileOpen.value = false
}

const currentUser = {
  name: 'Екатерина Бим',
  avatar: 'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
  username: 'ekaterina_bim',
  isPremium: true,
  stats: [
    { value: '158', label: 'Видео' },
    { value: '55.2K', label: 'Подписчики' },
    { value: '956', label: 'Подписки' },
  ],
}
</script>
