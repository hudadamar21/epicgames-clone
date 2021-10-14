<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import gameList from "@/data/gameList"
</script>

<template>
   <Swiper
      v-bind="{
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          768: { 
            slidesPerView: 3,
          }
        },
      }"
      class="w-full pr-20 md:pr-0 my-14 pl-5"
    >
    <SwiperSlide v-for="(title, i) of ['New Releases', 'Top Sellers', 'Coming Soon']" :key="i">   
      <div :class="i !== 0 && 'border-l pl-5'" class="flex flex-col border-white/10 ">
        <div class="flex justify-between items-center mb-3">
          <h2 class=" font-bold text-sm">{{ title }}</h2>
          <button v-if="title === 'Top Sellers'" class="uppercase text-xxs py-2 px-4 rounded tracking-wider border border-white/60">View More</button>
        </div>
        <ul class="flex-grow grid grid-row-5 ">
          <li 
            v-for="(game, i) of gameList.slice(0, 5)" :key="i" 
            class="relative flex items-center gap-2 h-20 w-full rounded-2xl py-3 px-4 hover:bg-epic-gray-100 cursor-pointer group transition"
          >
            <div class="bg-gray-500 ar-3/4 h-full rounded-md overflow-hidden">
              <img :src="game.image" class="w-full h-full object-cover" alt="">
            </div>
            <div class=" font-semibold text-white/90">
              <div class="text-sm">{{ game.title }}</div>
              <div class="text-xs">{{ game.price }}</div>
            </div>
            <button class="absolute top-1/2 -translate-y-1/2 right-5 md:opacity-0 group-hover:opacity-100 transition">
              <AddIcon class="w-6 h-6"/>
            </button>
          </li>
        </ul>
      </div>
    </SwiperSlide>
  </Swiper>
</template>