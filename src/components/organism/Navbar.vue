<script setup lang="ts">
  import { ref } from "vue"
  const isMenuOpen = ref(false)
</script>

<template>
  <nav class="nav-container">
    <div class="nav-logo">
      <EpicGames class="w-9 h-9"/>
    </div>
    <div 
      class="nav-menu md:translate-x-0" 
      :class="!isMenuOpen && 'translate-x-full'"
    >
      <ul class="nav-menu-list">
        <MenuItem title="store" active/>
        <MenuItem title="news"/>
        <MenuItem title="faq"/>
        <MenuItem title="help"/>
        <MenuItem title="unreal engine"/>
      </ul>
      <div class="
        shadow-top md:shadow-none 
        flex flex-col md:flex-row 
        text-xxs 
        w-full md:w-auto 
        border-t md:border-none border-white/10 
        h-[6.5rem] md:h-auto
      ">
        <div class="
          flex flex-row-reverse md:flex-row 
          w-full md:w-auto h-full 
          bg-epic-gray-50 md:bg-transparent
        ">
          <button class="
            flex-centered
            h-full w-1/3 md:w-auto
            opacity-70 hover:opacity-100 
            mr-5
          ">
            <Globe class="w-8 md:w-6 h-8 md:h-6"/>
          </button>
          <a href="#" class="
            flex-centered 
            h-full w-2/3 md:w-auto 
            opacity-70 hover:opacity-100 
            px-5 gap-5 md:gap-2 
            tracking-wider 
            border-r border-white/10 md:border-none
          ">
            <User class="w-6 h-6"/>
            SIGN IN
          </a>
        </div>
        <a href="#" class="get-epic-games-button">
          GET EPIC GAMES
        </a>
      </div>
    </div>
    <ToggleMenu 
      @toggle="isMenuOpen = !isMenuOpen" 
      :isMenuOpen="isMenuOpen"
    />
  </nav>
</template>

<style>
  .nav-container {
    @apply 
      fixed flex
      h-14 w-full 
      bg-epic-gray-100 text-white
      text-[0.7rem] font-medium 
      z-20 select-none;
  }
  .nav-logo {
    @apply 
      relative 
      flex items-center 
      opacity-80 hover:opacity-100 
      transition duration-200 
      z-10 h-full pl-5 cursor-pointer;
  }
  .nav-menu {
    @apply 
      fixed md:static top-0 right-0 
      flex flex-col md:flex-row 
      h-screen md:h-auto
      w-[90%] md:w-full
      justify-between gap-5
      pt-14 md:pt-0 pl-0 md:pl-5 flex-grow
      bg-epic-gray-100
      transition-transform duration-300;
  }
  .nav-menu-list {
    @apply 
      flex flex-col md:flex-row 
      uppercase 
      text-xs md:text-xxs 
      divide-y md:divide-none divide-white/5;
  }
  .get-epic-games-button {
    @apply 
      flex items-center justify-center 
      px-5 pt-1 md:pt-0
      bg-epic-blue 
      bg-opacity-90 hover:bg-opacity-100 
      h-full tracking-wider;
  }
  .toggle-button {
    @apply 
      absolute top-0 right-0 
      grid place-items-center 
      text-white bg-epic-blue
      md:hidden h-full text-2xl;
  }
</style>