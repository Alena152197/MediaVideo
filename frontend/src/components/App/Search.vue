<!-- поиск -->
<template>
  <form @submit.prevent="handleSearch">
    <label class="relative block h-max translate-x-10">
      <RiSearchLine class="text-text-secondary absolute top-1/2 left-3 size-5 translate-y-[-50%]" />
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Поиск видео, каналов, плейлистов..."
        class="text-text-secondary focus:ring-primary min-w-lg rounded-lg bg-[#1a1d29] px-4 py-2 pl-10 text-sm focus:ring-2 focus:outline-none"
      />
      <RouterLink
        to="/"
        class="bg-primary hover:bg-primary-hover absolute top-1/2 right-2 flex size-5 w-max translate-y-[-50%] cursor-pointer items-center justify-center rounded p-3 text-[10px] font-bold text-black/75 uppercase transition-colors hover:text-white focus:outline-none"
      >
        Поиск
      </RouterLink>
    </label>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { RiSearchLine } from '@remixicon/vue'

const searchQuery = ref('')

const handleSearch = () => {
  // Handle search logic here
}
</script>
