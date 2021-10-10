<script setup lang="ts">
  defineProps<{
    image: string,
    title: string
  }>()
</script>

<template>
  <li class="hightlight-game-list">
    <img :src="image" class="w-12 bg-epic-blue rounded-lg h-14 md:h-full object-cover select-none" alt="cover-game" />
    <p class="flex-grow text-xs font-semibold text-left">
      {{ title }}
    </p>
  </li>
</template>

<style>
  .hightlight-game-list {
    @apply flex items-center gap-2.5 h-full px-2.5 py-2 rounded-2xl hover:bg-epic-gray-100 transition duration-200 cursor-pointer md:w-48;
  }
</style>