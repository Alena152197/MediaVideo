<template>
  <div class="grid h-screen w-full lg:grid-cols-12">
    <section class="fixed bottom-0 left-0 z-100 w-full lg:relative lg:col-span-3 lg:h-screen xl:col-span-2">
      <AppNavbarMobile class="block lg:hidden" />
      <AppNavbarDesktop class="hidden lg:block" />
    </section>
    <section class="h-full w-full lg:col-span-9 lg:flex lg:min-h-0 lg:flex-col lg:overflow-y-auto xl:col-span-10">
      <header class="lg:bg-background/80 z-100 p-4 lg:sticky lg:top-0 lg:backdrop-blur-sm">
        <AppHeaderMobile class="flex lg:hidden" />
        <AppHeaderDesktop class="hidden lg:flex" @openAuthModal="openAuthModal" />
      </header>
      <main class="p-4 pb-32 lg:p-4">
        <RouterView />
      </main>
    </section>
    <!-- авторизация -->
    <section>
      <AuthModal v-if="visibleAuthModal" @closeAuthModal="closeAuthModal" />
    </section>
  </div>
</template>

<script setup>
import AppNavbarDesktop from '@/components/App/NavbarDesktop.vue'
import AppNavbarMobile from '@/components/App/NavbarMobile.vue'
import AppHeaderDesktop from '@/components/App/HeaderDesktop.vue'
import AppHeaderMobile from '@/components/App/HeaderMobile.vue'
import AuthModal from '@/components/Auth/Modal.vue'
import { ref } from 'vue'

// состояние модального окна авторизации
const visibleAuthModal = ref(false)
const openAuthModal = () => { visibleAuthModal.value = true }
const closeAuthModal = () => { visibleAuthModal.value = false }
</script>
