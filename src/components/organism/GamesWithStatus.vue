<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import gameList from "@/data/gameList";
</script>

<template>
  <Swiper
    v-bind="{
      spaceBetween: 20,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    }"
    class="w-full pl-5 pr-20 md:pr-0 my-14"
  >
    <SwiperSlide v-for="(title, i) of ['New Releases', 'Top Sellers', 'Coming Soon']" :key="i">
      <div :class="i !== 0 && 'border-l pl-5'" class="flex flex-col border-white/10">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-bold">{{ title }}</h2>
          <button
            v-if="title === 'Top Sellers'"
            class="px-4 py-2 tracking-wider uppercase border rounded hover:bg-white/10 text-xxs border-white/60"
          >View More</button>
        </div>
        <ul class="grid flex-grow grid-row-5">
          <li
            v-for="(game, i) of gameList.slice(0, 5)"
            :key="i"
            class="relative flex items-center w-full h-20 gap-2 px-4 py-3 transition cursor-pointer rounded-2xl hover:bg-epic-gray-100 group"
          >
            <div class="h-full overflow-hidden bg-gray-500 rounded-md w-14 ar-3/4">
              <img :src="game.image" class="object-cover w-full h-full"/>
            </div>
            <div class="w-full pl-2 text-white/90">
              <div class="mb-1 text-sm">{{ game.title }}</div>
              <div class="flex items-center justify-between w-[70%]">
                <div v-if="game.discount" class="px-2 py-1 rounded bg-epic-blue text-xxs">{{ game.discount }}</div>
                <div class="flex flex-col items-end text-xs">
                  <div
                    :class="
                      game.discount ? 'line-through text-white/60' : 'text-white/90 text-sm'
                    "
                  >IDR {{ game.price }}</div>
                  <div v-if="game.discount">IDR {{ game.discountPrice }}</div>
                </div>
              </div>
            </div>
            <button
              class="absolute transition -translate-y-1/2 top-1/2 right-5 md:opacity-0 group-hover:opacity-100"
            >
              <AddIcon class="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
