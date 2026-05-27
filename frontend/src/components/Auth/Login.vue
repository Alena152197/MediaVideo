<!-- авторизация -->
<template>
  <div class="flex flex-col gap-4 text-center">
    <header class="flex flex-col gap-1">
      <h2 class="text-2xl">Вход</h2>
      <p class="text-xs text-white/40">Добро пожаловать!</p>
    </header>
    <form @submit.prevent="" class="flex flex-col gap-2 text-xs">
      <label class="relative flex items-center text-white/40">
        <RiUserLine class="absolute left-4 size-4" />
        <input
          type="text"
          placeholder="Email или имя пользователя"
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
      <label class="flex items-center gap-1">
        <input
          tabindex="-1"
          type="checkbox"
          class="block size-3 appearance-none rounded-xs border border-white/20 checked:appearance-auto checked:accent-violet-400"
        />
        <div class="flex w-full justify-between">
          <p class="text-xs select-none">Запомнить меня</p>
          <button tabindex="-1" class="cursor-pointer text-xs text-violet-400 hover:underline">
            Забыл пароль?
          </button>
        </div>
      </label>
      <button
        type="submit"
        class="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-linear-[170deg] from-[#8856d4] to-[#563b99] p-2 text-xs font-medium transition-all hover:brightness-90"
      >
        Войти
      </button>
    </form>

    <div class="relative flex items-center justify-center gap-1">
      <div class="absolute h-px w-full bg-white/10"></div>
      <p class="z-10 bg-[#16171f] px-2 text-xs text-white/40">или войдите через</p>
    </div>

    <RouterLink
      to="/"
      class="flex w-full items-center justify-center rounded-lg border border-white/20 p-2 transition-colors hover:border-[#347ed7]/50"
    >
      <p class="text-xs font-medium text-[#347ed7]">ВКонтакте</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { RiUserLine, RiEyeLine, RiEyeOffLine, RiLockPasswordLine } from '@remixicon/vue'
</script>
