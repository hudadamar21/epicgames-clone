<script setup lang="ts">
import { ref } from "vue"
import { highlightGames } from "@/data/gameList"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Thumbs, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/thumbs"
import "swiper/css/pagination"
SwiperCore.use([Autoplay, Thumbs, Pagination]);

const thumbsSwiper = ref(null)

function onSwiper (swiper: any){
  console.log(swiper)
}

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}

const handleSlideChange = (s: any) => {
  console.log(s)
}

</script>

<template>
  <div class="flex flex-col md:flex-row h-[28rem] w-full">
    <Swiper
      v-bind="{
        spaceBetween: 10,
        navigation: true,
        thumbs: { swiper: thumbsSwiper },
        autoplay: {
          delay: 7000,
        },
        breakpoints: {
          768: { pagination: false }
        },
        pagination: { clickable: true },
      }"
      @swiper="onSwiper"
      @slideChange="handleSlideChange"
      class="w-full md:w-[80%] h-full pb-8 md:pb-0 cursor-pointer"
    >
      <SwiperSlide 
        v-for="{ image, title, status, description, price } of highlightGames" 
        :key="title"
      >
        <HighlightGameImage v-bind="{ image, title, status, description, price }" />
      </SwiperSlide>
    </Swiper>
    <Swiper
      v-bind="{
        direction: `vertical`,
        spaceBetween: 10,
        slidesPerView: 6,
        autoplay: {
          delay: 7000,
        },
        watchSlidesProgress: true
      }"
      @swiper="setThumbsSwiper" 
      class="hidden md:block discover-swiper h-full w-max pl-4 cursor-pointer"
    >
      <SwiperSlide 
        v-for="{ image, title } of highlightGames" 
        :key="title"
      >
        <HighlightGameList v-bind="{image, title}" />
      </SwiperSlide>
    </Swiper>
  </div>
  
</template>

<style>
.discover-swiper .swiper-slide-thumb-active .hightlight-game-list {
  @apply bg-epic-gray-100;
}
.swiper-pagination {
  @apply flex md:hidden items-center justify-center gap-1;
}

.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-white;
}
.swiper-pagination .swiper-pagination-bullet {
  @apply bg-white/50 w-1.5 h-1.5 ;
}
</style>