<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  price?: string;
  isGame?: boolean;
}>();
</script>

<template>
  <div class="h-full">
    <a href="#" class="block w-full overflow-hidden ar-16/9 bg-white/60 rounded-2xl">
      <img :src="image" class="object-cover w-full h-full hover:opacity-90 transition"/>
    </a>
    <div class="px-3">
      <div class="my-5">
        <a href="#" class="block mb-3">{{ title }}</a>
        <p class="text-sm font-medium opacity-50 line-clamp-3">{{ description }}</p>
      </div>
      <div v-if="isGame && price">IDR {{ price }}</div>
      <a
        v-else
        href="#"
        class="border-b hover:border-b border-white/10 hover:border-white"
      >Learn More</a>
    </div>
  </div>
</template>
