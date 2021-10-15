<script setup lang="ts">
defineProps<{
  image: string;
  status: string;
  description: string;
  price: string;
}>();
</script>

<template>
  <div
    class="relative w-full h-full bg-center bg-cover rounded-2xl"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 to-transparent"
    ></div>
    <div
      class="absolute bottom-8 left-5 md:left-8 text-sm  md:font-bold w-[80%] md:w-[40%]"
    >
      <div class="md:text-shadow mb-1.5 font-bold uppercase text-xxs md:text-xs">{{ status }}</div>
      <p class="font-bold md:text-shadow">{{ description }}</p>
      <div class="flex flex-col gap-1 mt-6 md:text-shadow md:flex-row">
        <span class="">Starting at</span>
        <span>IDR {{ price }}</span>
      </div>
      <div class="items-center hidden h-12 gap-2 mt-3 md:flex">
        <BaseButton
          class="px-10 text-xs  text-black bg-white hover:text-black/80"
        >Buy Now</BaseButton>
        <BaseButton class="flex items-center justify-center gap-2 px-5 hover:bg-white/10">
          <AddIcon class="w-6 h-6" />
          <span class="font-bold text-xxs text-shadow w-30">Add To Wishlist</span>
        </BaseButton>
      </div>
    </div>
    <button
      class="absolute flex items-center justify-center w-16 transition duration-150 rounded-md top-2 right-2 h-13 hover:bg-white/10 md:hidden group"
    >
      <div
        class="absolute z-30 top-[112%] right-0 text-white/90 text-sm font-medium tracking-wide px-3 py-2 rounded-md bg-epic-gray-200 shadow-lg whitespace-nowrap hidden group-hover:block transition duration-150"
      >Add to Wishlist</div>
      <AddIcon class="w-6 h-6" />
    </button>
  </div>
</template>
