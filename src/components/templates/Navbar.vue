<script setup lang="ts">
import { toRefs } from "vue";
import { resetState, state } from "@/store"

function openMenu () {
  state.isMenuOpen = !state.isMenuOpen
  if(state.isMenuOpen) {
    state.showOverlay = true
  } else {
    resetState()
  }
}

const { isMenuOpen } = toRefs(state)

</script>

<template>
  <nav class="nav-container">
    <Logo />
    <div class="nav-menu md:translate-x-0" :class="!isMenuOpen && 'translate-x-full'">
      <ul class="nav-menu-list">
        <MenuItem title="store" active />
        <MenuItem title="news" />
        <MenuItem title="faq" />
        <MenuItem title="help" />
        <MenuItem title="unreal engine" />
      </ul>
      <div class="nav-second-menu shadow-top md:shadow-none">
        <div
          class="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
        >
          <button class="w-1/3 h-full mr-5 flex-centered md:w-auto opacity-70 hover:opacity-100">
            <Globe class="w-8 h-8 md:w-6 md:h-6" />
          </button>
          <router-link to="/signin" class="flex-centered signin-button">
            <User class="w-7 md:w-5 h-7 md:h-5" />SIGN IN
          </router-link>
        </div>
        <a href="#" class="get-epic-games-button">GET EPIC GAMES</a>
      </div>
    </div>
    <ToggleMenu @toggle="openMenu" :isMenuOpen="isMenuOpen" />
  </nav>
</template>

<style>
.nav-container {
  @apply fixed flex
      h-13 w-full 
      bg-epic-gray-100 text-white
      text-[0.7rem]
      z-40 select-none;
}

.nav-menu {
  @apply fixed md:static top-0 right-0 
      flex flex-col md:flex-row 
      h-screen md:h-auto
      w-[90%] md:w-full
      justify-between gap-5
      pt-14 md:pt-0 pl-0 md:pl-5 flex-grow
      bg-epic-gray-100
      transition-transform duration-300;
}

.nav-menu-list {
  @apply flex flex-col md:flex-row 
      uppercase 
      text-xs md:text-[10.5px]  
      divide-y md:divide-none divide-white/5;
}

.nav-second-menu {
  @apply
      fixed bottom-0 right-0  md:static 
      flex flex-col md:flex-row 
      text-[8.75px]
      w-[90%] md:w-auto 
      border-t md:border-none border-white/10 
      h-[6.5rem] md:h-auto;
}

.signin-button {
  @apply h-full w-2/3 md:w-auto 
      opacity-70 hover:opacity-100 
      px-5 gap-5 md:gap-3 
      tracking-widest font-bold
      border-r border-white/10 md:border-none;
}

.get-epic-games-button {
  @apply flex items-center justify-center 
      px-6 pt-1 md:pt-0
      bg-epic-blue font-bold
      bg-opacity-90 hover:bg-opacity-100 
      h-full tracking-widest;
}
</style>
