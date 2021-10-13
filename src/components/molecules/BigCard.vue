<script setup lang="ts">
  defineProps<{
    title: string,
    description: string,
    image: string,
    price?: string,
    isGame?: boolean
  }>()
</script>

<template>
  <div class="h-full">
    <a href="#" class="block w-full ar-16/9 bg-white/60 rounded-2xl overflow-hidden">
      <img :src="image" class="w-full h-full object-cover hover:opacity-80" alt="">
    </a>
    <div class="px-3">
      <div class=" my-5 ">
        <a href="#" class="block mb-3 text-base font-semibold">
          {{ title}}
        </a>
        <p class="text-sm font-semibold opacity-60">
          {{ description }}
        </p>
      </div>
      <div v-if="isGame && price" class="font-semibold text-base">IDR {{ price }}</div>
      <a v-else href="#" class="font-semibold text-base hover:border-b ">Learn More</a>
    </div>
  </div>
</template>