<!-- мобильная шапка -->
<template>
  <div class="text-text-main flex w-full items-center justify-between">
    <AppLogo />
    <RouterLink
      to="/"
      class="text-text-main relative flex items-center gap-3 text-center text-2xl font-medium uppercase"
      title="Уведомления"
    >
      <RiNotification3Line class="size-6 text-white" />
      <span
        class="bg-surface absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-xs text-white"
      >
        3
      </span>
    </RouterLink>
  </div>
</template>

<script setup>
import AppLogo from '@/components/App/Logo.vue'
import { RiNotification3Line } from '@remixicon/vue'
</script>
