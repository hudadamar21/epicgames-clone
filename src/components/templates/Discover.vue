<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Pagination } from 'swiper';
  import 'swiper/css';
  import { dummyGameList } from "@/data/gameList"
  SwiperCore.use([Pagination]);
</script>

<template>
  <HighlightGame/>
  <GameOnSale/>
    <Swiper
      v-bind="{
        spaceBetween: 20,
        pagination: true,
        slidesPerView: 1,
        breakpoints: {
          768: { 
            pagination: false,
            slidesPerView: 2,
          }
        },
      }"
      class="w-full h-full pr-20 md:pr-0 pb-10 md:pb-0"
    >
      <SwiperSlide
        v-for="({ image, title, description, price }, i) of dummyGameList.slice(0, 2)"
        :key="title"
      >   
        <BigCard v-bind="{ image, title, description, price, isGame: i === 1 }"/>
      </SwiperSlide>
    </Swiper>
  <FreeGames/>
  <GamesWithStatus/>
  <Swiper
    v-bind="{
      spaceBetween: 20,
      pagination: true,
      slidesPerView: 1,
      breakpoints: {
        768: { 
          pagination: false,
          slidesPerView: 2,
        }
      },
    }"
    class="w-full h-full pr-20 md:pr-0 pb-10 md:pb-0"
  >
    <SwiperSlide
      v-for="({ image, title, description, price }, i) of dummyGameList.slice(2, 4)"
      :key="title"
    >   
      <BigCard v-bind="{ image, title, description, price, isGame: i === 1 }"/>
    </SwiperSlide>
  </Swiper>
  <GameList title="Recently Updated" />
  <GameList title="New To The Epic Games Store" />
  <GameList title="Most Popular" />
  <div class="my-20 w-full flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
     <a href="#" class="w-full lg:w-[60%] ar-16/9 bg-gradient-to-br from-black to-epic-blue rounded-2xl flex items-center justify-center px-3 hover:opacity-90 transition duration-200 cursor-pointer">
        <img src="@/assets/images/games/game-collection.png" class="w-full h-full" alt="game collection">
      </a>
    <div class="text-sm font-semibold">
      <h2 class="mb-2.5 lg:mb-4 text-lg lg:text-sm">Browse</h2>
      <p class="mb-10 opacity-60">Explore our catalog for your next favorite game!</p>
      <a href="#" class="hidden lg:inline px-5 py-4 font-normal text-black bg-white rounded-md uppercase">
        Learn More
      </a>
    </div>
  </div>
</template>