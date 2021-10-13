<script setup lang="ts">
  import { dummyGameList } from "@/data/gameList"
</script>

<template>
  <HighlightGame/>
  <GameOnSale/>
  <GamePosts :posts="dummyGameList.slice(0, 2)"/>
  <FreeGames/>
  <GamesWithStatus/>
  <GamePosts :posts="dummyGameList.slice(2, 4)"/>
  <GameList title="Recently Updated" />
  <GameList title="New To The Epic Games Store" />
  <GameList title="Most Popular" />
  <div class="px-5 md:px-0 my-20 w-full flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
     <a href="#" class="w-full lg:w-[60%] ar-16/9 bg-gradient-to-br from-black to-epic-blue rounded-2xl flex items-center justify-center px-3 hover:opacity-90 transition duration-200 cursor-pointer">
        <img src="@/assets/images/games/game-collection.png" class="w-full" alt="game collection">
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