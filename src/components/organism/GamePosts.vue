<script setup lang="ts">
  import { IGame } from "@/data/gameList"

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Pagination } from 'swiper';
  import 'swiper/css';
  SwiperCore.use([Pagination]);

  defineProps<{
    posts: IGame[]
  }>()

  const swiperOption = {
    spaceBetween: 20,
    pagination: true,
    slidesPerView: 1,
    breakpoints: {
      768: { 
        pagination: false,
        slidesPerView: 2,
      }
    },
  }
</script>


<template>
  <Swiper
    v-bind="swiperOption"
    class="w-full h-full pl-5 md:pl-0 pr-20 md:pr-0 pb-10 md:pb-0 mt-14"
  >
    <SwiperSlide
      v-for="({ image, title, description, price }, i) of posts"
      :key="title"
    >   
      <BigCard v-bind="{ image, title, description, price, isGame: i === 1 }"/>
    </SwiperSlide>
  </Swiper>
</template>