<script setup lang="ts">
import { dummyGameList } from "@/data/gameList";
</script>

<template>
  <HighlightGame />
  <GameOnSale />
  <GamePosts :posts="dummyGameList.slice(0, 3)" :slidePerView="3" />
  <FreeGames />
  <GamesWithStatus />
  <GamePosts :posts="dummyGameList.slice(3, 5)" />
  <GameList title="Recently Updated" />
  <GameList title="New To The Epic Games Store" />
  <GameList title="Most Popular" />
  <div class="flex flex-col items-center w-full gap-5 px-5 my-20 md:px-0 lg:flex-row lg:gap-8">
    <a
      href="#"
      class="w-full lg:w-[60%] ar-16/9 bg-gradient-to-br from-black to-epic-blue rounded-2xl flex items-center justify-center px-3 hover:opacity-90 transition duration-200 cursor-pointer"
    >
      <img src="@/assets/images/games/game-collection.webp" class="w-full" alt="game collection" />
    </a>
    <div class="text-sm ">
      <h2 class="mb-2.5 lg:mb-4 text-lg md:text-base">Browse</h2>
      <p class="mb-10 opacity-60">Explore our catalog for your next favorite game!</p>
      <a
        href="#"
        class="hidden px-5 py-4 font-normal text-black uppercase bg-white rounded-md lg:inline"
      >Learn More</a>
    </div>
  </div>
</template>
