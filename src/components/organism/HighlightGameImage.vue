<script setup lang="ts">
  defineProps<{
    image: string,
    status: string,
    description: string,
    price: string
  }>()
</script>

<template>
  <div 
    class="relative rounded-xl h-full bg-cover bg-center w-full"
    :style="{backgroundImage: `url(${image})`}"  
  >
    <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 to-transparent"></div>
    <div class="absolute bottom-8 left-5 md:left-8 text-sm font-semibold md:font-bold w-[80%] md:w-[40%]">
      <div class="md:text-shadow mb-2 uppercase text-xxs md:text-xs">{{ status }}</div>
      <p class="md:text-shadow">
        {{ description }}
      </p>
      <div class="mt-6 md:text-shadow flex flex-col md:flex-row">
        <span class="font-normal">Starting at </span>
        <span>IDR {{ price }}</span>
      </div>
      <div class="hidden md:flex items-center gap-2 mt-3 h-12">
        <BaseButton class="bg-white px-10 font-semibold text-black hover:text-black/80 text-xs">
           Buy Now
        </BaseButton>
        <BaseButton class="hover:bg-white/10 px-5 flex items-center justify-center gap-2">
          <AddIcon class="w-6 h-6"/>
          <span class="text-xxs text-shadow font-semibold w-30">
            Add To Wishlist
          </span>
        </BaseButton>
      </div>
    </div>
    <button class="absolute top-2 right-2 h-13 w-16 hover:bg-white/10 flex md:hidden items-center justify-center rounded-md transition duration-150 group">
      <div class="absolute z-30 top-[112%] right-0 text-white/90 text-sm font-medium tracking-wide px-3 py-2 rounded-md bg-epic-gray-200 shadow-lg whitespace-nowrap hidden group-hover:block transition duration-150">
        Add to Wishlist
      </div>
      <AddIcon class="w-6 h-6"/>
    </button>
  </div>
</template>

<style>
  .text-shadow {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    @apply tracking-wide;
  }
</style>