<!-- layout студии канала -->
<template>
  <div class="grid h-screen w-full lg:grid-cols-12">
    <section class="hidden lg:relative lg:col-span-2 lg:block lg:h-screen xl:col-span-2">
      <StudioSidebar />
    </section>
    <section class="h-full w-full overflow-y-auto lg:col-span-10 xl:col-span-10">
      <header class="flex items-center justify-between border-b border-white/10 p-4 lg:hidden">
        <RouterLink to="/" class="text-text-secondary text-sm hover:text-white">
          ← На главную
        </RouterLink>
        <span class="text-sm font-medium">Студия канала</span>
        <RouterLink to="/studio" class="text-primary text-sm">Загрузить</RouterLink>
      </header>
      <main class="p-4 pb-8 lg:p-6">
        <RouterView />
      </main>
    </section>
  </div>
</template>

<script setup>
import StudioSidebar from '@/components/Studio/Sidebar.vue'
</script>
