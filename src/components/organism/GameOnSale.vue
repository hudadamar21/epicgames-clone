<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
SwiperCore.use([Navigation]);

import { dummyGameList } from "@/data/gameList"
import swiperOptions from "@/data/gameOnSaleSwiperOptions"
import GameCard from '../molecules/GameCard.vue';

</script>

<template>
  <div class="px-5 md:px-0 flex justify-between mt-12 mb-5">
    <div class="font-semibold flex items-center gap-1">
      <h2>Game On Sale</h2>
      <button class="hover:translate-x-1 transition-transform">
        <ArrowRight/>
      </button>
    </div>
    <div class="flex items-center gap-3">
      <button class="button-navigate gameonsale-prev">
        <ArrowLeft class="w-5 h-5"/>
      </button>
      <button class="button-navigate gameonsale-next">
        <ArrowRight class="w-5 h-5"/>
      </button>
    </div>
  </div>
  <div class="px-5 md:px-0">
    <Swiper
      v-bind="swiperOptions"
      class="w-full h-full pl-0 md:pl-3 pr-36 md:pr-3"
    >
      <SwiperSlide
        v-for="{ image, title, studio, discount, price, discountPrice } of dummyGameList"
        :key="title"
      >   
        <GameCard v-bind="{ image, title, studio, discount, price, discountPrice }" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.button-navigate {
  @apply h-7 w-7 grid place-items-center rounded-full bg-epic-gray-200 cursor-pointer;
}
</style>