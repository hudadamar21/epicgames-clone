<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { freeGames } from "@/data/gameList";
</script>

<template>
  <div class="py-5 mt-12 bg-epic-gray-50 md:py-6 md:px-10 md:rounded">
    <div class="flex items-center justify-between px-5 mb-6">
      <div class="flex items-center gap-3">
        <IconGift class="w-8 h-8" />
        <h2 class="text-lg ">Free Games</h2>
      </div>
      <button class="px-4 py-2 text-xs font-bold uppercase border rounded">View More</button>
    </div>
    <Swiper
      v-bind="{
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
      }"
      class="px-5 md:px-0"
    >
      <SwiperSlide v-for="game of freeGames" :key="game.title">
        <a href="#" class="w-full h-full cursor-pointer">
          <div class="w-full overflow-hidden rounded">
            <div class="block w-full overflow-hidden cursor-pointer ar-16/9 bg-white/80">
              <img :src="game.image" class="object-cover w-full h-full hover:opacity-90" />
            </div>
            <div
              class="w-full text-center py-1 uppercase text-[11px] font-black"
              :class="game.freeNow ? 'bg-epic-blue' : 'bg-black'"
            >{{ game.freeNow ? "Free Now" : "Coming Soon" }}</div>
          </div>
          <div class="mt-4 text-sm tracking-tight">
            <div>{{ game.title }}</div>
            <div class="opacity-60">Free {{ game.rangeDate }}</div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
