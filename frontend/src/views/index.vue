<!-- главная страница -->
<template>
  <div class="text-white flex flex-col gap-4">
    <HomeRecommendations />
    <HomePopular />
  </div>
</template>

<script setup>
import HomeRecommendations from '@/components/Home/Recommendations.vue'
import HomePopular from '@/components/Home/Popular.vue'
</script>
