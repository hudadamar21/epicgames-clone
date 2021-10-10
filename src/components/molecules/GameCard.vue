<script setup lang="ts">
  defineProps<{
    image: string,
    title: string,
    studio: string,
    discount: string,
    price: string,
    discountPrice: string
  }>()
</script>

<template>
  <a href="#" class="text-sm group focus:bg-epic-gray-50 cursor-pointer">
    <div class="relative h-48 w-full rounded-md overflow-hidden mb-2 bg-white/80">
      <img :src="image" class="w-full h-full object-cover hover:opacity-90 transition-opacity"  alt="">
      <div class="absolute top-3 right-3 hidden group-hover:block">
        <AddIcon class="w-5 h-5"/>
      </div>
    </div>
    <div class="py-4 text-sm">
      <div class="truncate font-medium">{{ title }}</div>
      <div class="text-white/60 font-medium">{{ studio }}</div>
    </div>
    <div class="flex items-center justify-between">
      <div class="bg-epic-blue px-2 py-1 text-xxs rounded font-semibold">
        {{ discount }}
      </div>
      <div class="text-xs flex flex-col items-end">
        <div class="line-through text-white/60 font-semibold">
          IDR {{ price }}
        </div>
        <div class="font-semibold">IDR {{ discountPrice }}</div>
      </div>
    </div>
  </a>
</template>