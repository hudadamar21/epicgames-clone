<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);

import { dummyGameList } from "@/data/gameList";
import GameCard from "../molecules/GameCard.vue";

const swiperOptions = {
  navigation: {
    prevEl: ".gameonsale-prev",
    nextEl: ".gameonsale-next",
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    480: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 3,
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 4,
    },
    1280: {
      slidesPerGroup: 5,
      slidesPerView: 6,
    },
  },
}
</script>

<template>
  <div class="flex justify-between px-5 mt-12 mb-5 md:px-0">
    <div class="flex items-center gap-1 ">
      <h2>Game On Sale</h2>
      <button class="transition-transform hover:translate-x-1">
        <ArrowRight />
      </button>
    </div>
    <div class="flex items-center gap-3">
      <button class="button-navigate gameonsale-prev">
        <ArrowLeft class="w-5 h-5" />
      </button>
      <button class="button-navigate gameonsale-next">
        <ArrowRight class="w-5 h-5" />
      </button>
    </div>
  </div>
  <div>
    <Swiper v-bind="swiperOptions" class="w-full h-full pl-5 md:pl-3 pr-36 md:pr-0">
      <SwiperSlide
        v-for="{
          image,
          title,
          studio,
          discount,
          price,
          discountPrice,
        } of dummyGameList"
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
