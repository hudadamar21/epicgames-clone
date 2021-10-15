<script setup lang="ts">
import { IGame } from "@/data/gameList";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
SwiperCore.use([Pagination]);

const props = defineProps<{
  posts: IGame[];
  slidePerView?: number
}>();

const swiperOption = {
  spaceBetween: 20,
  pagination: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      pagination: false,
      slidesPerView: props.slidePerView || 2,
    },
  },
};
</script>

<template>
  <Swiper
    v-bind="swiperOption"
    class="w-full h-full pb-10 pl-5 pr-20 md:pl-0 md:pr-0 md:pb-0 mt-14"
  >
    <SwiperSlide v-for="({ image, title, description, price }, i) of posts" :key="title">
      <BigCard v-bind="{ image, title, description, price, isGame: i === 1 }" />
    </SwiperSlide>
  </Swiper>
</template>
