<!-- модальное окно -->
<template>
  <div class="fixed top-0 left-0 z-100 flex h-screen w-screen items-center justify-center bg-black/60 transition-all">
    <div
      class="modal-fade-in-up relative m-auto flex h-max w-max items-start justify-center gap-8 rounded-lg border border-[#2f303b] bg-[#16171f] p-4 text-white">
      <AuthSignup />

      <div class="relative flex h-full w-full items-center justify-center">
        <div class="h-75 w-px bg-white/20"></div>
      </div>

      <AuthLogin />

      <button type="button" @click="emit('closeAuthModal')"
        class="absolute top-3 right-3 cursor-pointer text-white/40 transition-colors hover:text-white">
        <RiCloseLine />
      </button>
    </div>
  </div>
</template>

<script setup>
import AuthLogin from '@/components/Auth/Login.vue'
import AuthSignup from '@/components/Auth/Signup.vue'
import { RiCloseLine } from '@remixicon/vue'
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['closeAuthModal'])
const onEscape = (event) => {
  if (event.key === 'Escape') {
    emit('closeAuthModal')
  }
}

onMounted(() => document.addEventListener('keydown', onEscape))
onUnmounted(() => document.removeEventListener('keydown', onEscape))
</script>
