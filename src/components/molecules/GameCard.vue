<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  studio: string;
  discount?: string;
  price: string;
  discountPrice?: string;
}>();
</script>

<template>
  <div class="text-sm font-medium cursor-pointer group focus:bg-epic-gray-50">
    <div class="relative w-full mb-1.5 overflow-hidden rounded-md ar-3/4 bg-white/80">
      <img
        :src="image"
        class="object-cover w-full h-full transition-opacity duration-200 hover:opacity-90"
      />
      <div class="absolute hidden top-3 right-3 group-hover:block">
        <AddIcon class="w-5 h-5" />
      </div>
    </div>
    <div class="py-4">
      <div class="truncate mb-0.5">{{ title }}</div>
      <div class="text-white/50">{{ studio }}</div>
    </div>
    <div class="flex items-center justify-between">
      <div v-if="discount" class="px-2 py-1 rounded bg-epic-blue text-xxs">{{ discount }}</div>
      <div class="flex flex-col items-end text-xs">
        <div
          :class="
            discount ? 'line-through text-white/60' : 'text-white/90 text-sm'
          "
        >IDR {{ price }}</div>
        <div v-if="discount">IDR {{ discountPrice }}</div>
      </div>
    </div>
  </div>
</template>
