<script setup lang="ts">
  defineProps<{
    image: string,
    title: string,
    studio: string,
    discount?: string,
    price: string,
    discountPrice?: string
  }>()
</script>

<template>
  <div class="text-sm group focus:bg-epic-gray-50 cursor-pointer">
    <div class="relative ar-3/4 w-full rounded-md overflow-hidden mb-2 bg-white/80">
      <img :src="image" class="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"  alt="">
      <div class="absolute top-3 right-3 hidden group-hover:block">
        <AddIcon class="w-5 h-5"/>
      </div>
    </div>
    <div class="py-3 text-sm">
      <div class="truncate mb-0.5">{{ title }}</div>
      <div class="text-white/50">{{ studio }}</div>
    </div>
    <div class="flex items-center justify-between">
      <div v-if="discount" class="bg-epic-blue px-2 py-1 text-xxs rounded">
        {{ discount }}
      </div>
      <div class="text-xs flex flex-col items-end">
        <div :class="discount ? 'line-through text-white/60' : 'text-white/90 text-sm'">
          IDR {{ price }}
        </div>
        <div v-if="discount">IDR {{ discountPrice }}</div>
      </div>
    </div>
  </div>
</template>