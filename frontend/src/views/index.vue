<!-- главная страница -->
<template>
  <div class="text-white flex flex-col gap-6">
    <HomeHeroBanner />
    <HomeRecommendations />
    <HomePopular />
  </div>
</template>

<script setup>
import HomeHeroBanner from '@/components/Home/HeroBanner.vue'
import HomeRecommendations from '@/components/Home/Recommendations.vue'
import HomePopular from '@/components/Home/Popular.vue'
</script>
