<!-- карточка видео -->
<template>
  <article class="overflow-hidden rounded-xl border border-[#141722] bg-[#141722]">
    <header class="group relative">
      <div>
        <img src="https://dalvisa.com/wp-content/uploads/2025/10/okean-zovet-vstrecha-s-vechnostyu-1-980x980.webp"
          alt="Океан" class="h-40 w-full rounded-lg object-cover" />
        <p class="bg-background/50 absolute right-2 bottom-2 rounded px-2 py-0.5 text-sm text-white backdrop-blur-sm">
          10:30
        </p>
      </div>
      <RouterLink to="/video/altai"
        class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
        <RiPlayLargeFill
          class="text-primary hover:text-primary-hover size-10 scale-0 transition-all duration-300 group-hover:scale-125" />
      </RouterLink>
    </header>
    <footer class="flex flex-col gap-2 p-2">
      <RouterLink to="/video/altai" class="group transition-colors hover:text-white">
        <h4 class="group-hover:underline">Океан: всё о путешествии в подводном мире</h4>
      </RouterLink>
      <div class="flex items-center text-white/50">
        <img src="https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig"
          alt="Фото профиля" class="mr-2 h-6 w-6 rounded-full object-cover" />
        <div class="flex flex-col">
          <RouterLink to="/" class="text-md group flex w-max items-center gap-1 transition-colors hover:text-white">
            <h5 class="group-hover:underline">Екатерина Бим</h5>
            <RiVerifiedBadgeFill class="text-primary size-4" />
          </RouterLink>
          <p class="text-[12px]">520 тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </footer>
  </article>
</template>

<script setup>
import { RiVerifiedBadgeFill, RiPlayLargeFill } from '@remixicon/vue'
</script>
