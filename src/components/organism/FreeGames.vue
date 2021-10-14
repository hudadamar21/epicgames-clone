<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { freeGames } from "@/data/gameList"
</script>

<template>
  <div class="bg-epic-gray-50 py-5 md:py-6 md:px-10 md:rounded mt-12">
    <div class="px-5 flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <IconGift class="w-8 h-8"/>
        <h2 class="text-lg font-semibold">Free Games</h2>
      </div>
      <button class="py-2 px-4 uppercase border text-xs font-bold rounded">
        View More
      </button>
    </div>
    <Swiper
      v-bind="{
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          768: { 
            slidesPerView: 3,
          }
        },
      }"
      class="w-full h-full pl-5 md:pl-0 pr-20 md:pr-0 pb-10 md:pb-0"
    >
      <SwiperSlide
        v-for="game of freeGames"
        :key="game.title"
      >   
        <a href="#"  class="w-full h-full cursor-pointer">
          <div class="rounded overflow-hidden w-full">
            <div class="block w-full ar-16/9 overflow-hidden bg-white/80 cursor-pointer">
              <img :src="game.image" class="w-full h-full object-cover hover:opacity-90" alt="">
            </div>
            <div 
              class="w-full text-center  py-1 uppercase text-[11px] font-black"
              :class="game.freeNow ? 'bg-epic-blue' : 'bg-black'"  
            >
              {{ game.freeNow ? 'Free Now' : 'Coming Soon'}}
            </div>
          </div>
          <div class="mt-4 text-sm tracking-tight font-semibold">
            <div>{{ game.title }}</div>
            <div class="opacity-60 ">Free {{ game.rangeDate }}</div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>