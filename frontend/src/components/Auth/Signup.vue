<!-- регистрация -->
<template>
  <div class="flex flex-col gap-4 text-center">
    <header class="flex flex-col gap-1">
      <h2 class="text-2xl">Регистрация</h2>
      <p class="text-xs text-white/40">Создайте новый аккаунт</p>
    </header>
    <form @submit.prevent="" class="flex flex-col gap-2 text-xs">
      <label class="relative flex items-center text-white/40">
        <RiUserLine class="absolute left-4 size-4" />
        <input
          type="text"
          placeholder="Имя пользователя"
          class="focus:outline-primary min-w-60 rounded-lg border border-[#2f303b] p-2 pl-10 focus:outline"
          required
        />
      </label>
      <label class="relative flex items-center text-white/40">
        <RiMailLine class="absolute left-4 size-4" />
        <input
          type="email"
          placeholder="Email"
          class="focus:outline-primary min-w-60 rounded-lg border border-[#2f303b] p-2 pl-10 focus:outline"
          required
        />
      </label>
      <label class="relative flex items-center text-white/40">
        <RiLockPasswordLine class="absolute left-4 size-4" />
        <input
          type="text"
          placeholder="Пароль"
          class="focus:outline-primary min-w-60 rounded-lg border border-[#2f303b] p-2 pl-10 focus:outline"
          required
        />
        <button tabindex="-1" class="absolute right-4 cursor-pointer hover:text-white">
          <RiEyeLine class="size-4" v-if="true" />
          <RiEyeOffLine class="size-4" v-else />
        </button>
      </label>
      <label class="relative flex items-center text-white/40">
        <RiLockPasswordLine class="absolute left-4 size-4" />
        <input
          type="text"
          placeholder="Повторите пароль"
          class="focus:outline-primary min-w-60 rounded-lg border border-[#2f303b] p-2 pl-10 focus:outline"
          required
        />
        <button tabindex="-1" class="absolute right-4 cursor-pointer hover:text-white">
          <RiEyeLine class="size-4" v-if="true" />
          <RiEyeOffLine class="size-4" v-else />
        </button>
      </label>
      <label class="flex items-center gap-1">
        <input
          tabindex="-1"
          type="checkbox"
          class="block size-3 appearance-none rounded-xs border border-white/20 checked:appearance-auto checked:accent-violet-400"
        />
        <p class="text-xs select-none">
          Я согласен с
          <RouterLink tabindex="-1" to="/" target="_blank" class="text-violet-400 hover:underline"
            >условиями использования</RouterLink
          >
        </p>
      </label>
      <button
        type="submit"
        class="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-linear-[170deg] from-[#8856d4] to-[#563b99] p-2 text-xs font-medium transition-all hover:brightness-90"
      >
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<script setup>
import { RiUserLine, RiEyeLine, RiEyeOffLine, RiMailLine, RiLockPasswordLine } from '@remixicon/vue'
</script>
