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
    class="relative rounded-xl h-[28rem] bg-cover bg-center w-full"
    :style="{backgroundImage: `url(${image})`}"  
  >
    <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
    <div class="absolute bottom-8 left-8 text-sm font-bold w-[80%] md:w-[40%]">
      <div class="text-shadow mb-2 uppercase text-xs">{{ status }}</div>
      <p class="text-shadow">
        {{ description }}
      </p>
      <div class="mt-5 text-shadow">Starting at IDR {{ price }}</div>
      <div class="h-12 flex items-center gap-2 mt-3">
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
  </div>
</template>

<style>
  .text-shadow {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    @apply tracking-wide;
  }
</style>