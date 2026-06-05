<!-- секция комментариев -->
<template>
  <section class="flex flex-col gap-5">
    <h3 class="text-lg font-medium">Комментарии {{ total }}</h3>

    <div class="flex items-start gap-3">
      <img
        :src="currentUser.avatar"
        :alt="currentUser.name"
        class="size-10 shrink-0 rounded-full object-cover"
      />
      <input
        type="text"
        placeholder="Оставьте комментарий..."
        class="border-b border-white/20 bg-transparent py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/50 w-full"
      />
    </div>

    <article
      v-for="comment in comments"
      :key="comment.id"
      class="flex gap-3"
    >
      <img
        :src="comment.avatar"
        :alt="comment.author"
        class="size-10 shrink-0 rounded-full object-cover"
      />
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">{{ comment.author }}</span>
          <span class="text-text-secondary text-xs">{{ comment.date }}</span>
        </div>
        <p class="text-sm leading-relaxed">{{ comment.text }}</p>
        <div class="flex items-center gap-4">
          <button type="button" class="text-text-secondary flex cursor-pointer items-center gap-1 text-xs hover:text-white">
            <RiThumbUpLine class="size-4" />
            {{ comment.likes }}
          </button>
          <button type="button" class="text-text-secondary cursor-pointer text-xs hover:text-white">
            <RiThumbDownLine class="size-4" />
          </button>
          <button type="button" class="text-text-secondary cursor-pointer text-xs hover:text-white">
            Ответить
          </button>
        </div>
        <button
          v-if="comment.replies"
          type="button"
          class="text-primary w-max cursor-pointer text-xs hover:underline"
        >
          Показать ещё {{ comment.replies }} ответов
        </button>
      </div>
    </article>
  </section>
</template>

<script setup>
import { RiThumbUpLine, RiThumbDownLine } from '@remixicon/vue'

defineProps({
  total: { type: String, default: '1,2 тыс.' },
  currentUser: {
    type: Object,
    default: () => ({
      name: 'Алексей',
      avatar: 'https://avatars.mds.yandex.net/get-yapic/28439/U4aEaMvhIxRtQb0VMIYkVxr5s-1/orig',
    }),
  },
  comments: {
    type: Array,
    required: true,
  },
})
</script>
