<script setup lang="ts">
  import { Tab } from '@headlessui/vue'
  import { state, resetState } from "@/store"
  import { toRefs } from "vue"

  const { showMobileTabMenu, showOverlay } = toRefs(state)
  
  const openMobileTabMenu = () => {
    state.showMobileTabMenu = !state.showMobileTabMenu
    state.showOverlay = !state.showOverlay
  }

  const { tabMenuIndex } = toRefs(state)
</script>

<template>
  <div class="flex md:hidden w-10">
  </div>
  <button 
    @click="openMobileTabMenu" 
    class="
      relative z-40 
      flex md:hidden flex-col flex-grow 
      justify-center items-center 
      text-white 
      mx-2 
      border border-transparent
      focus:border-white/10
    "
  >
    <div class="text-[8.5px] font-bold uppercase opacity-60 tracking-wide">Epic Games Store</div>
    <div class="flex items-center text-[13px] tracking-wide font-bold -mt-1">
      {{ tabMenuIndex === 0 ? 'Discover' : 'Browse'}}
      <div 
        class="transition-transform duration-200" 
        :class="showMobileTabMenu && '-rotate-180'"
      >
        <ArrowDown class="w-4 h-4" />
      </div>
    </div>
  </button>
  <div 
    :class="showMobileTabMenu && showOverlay ? 'flex' : 'hidden'" 
    class="
      absolute top-20 left-0 md:static
      z-30 md:z-auto 
      md:flex items-center 
      flex-col md:flex-row 
      gap-10 md:gap-5 
      text-white text-sm py-8
      bg-epic-black md:bg-transparent
      w-full h-[max-content]
    "
  >
    <Tab v-slot="{ selected }" as="template">
      <button 
        @click="resetState" 
        class="font-semibold hover:text-white" 
        :class="!selected && 'text-white/40'"
      >
        Discover  
      </button>
    </Tab>
    <Tab v-slot="{ selected }" as="template">
      <button 
        @click="resetState" 
        class="font-semibold hover:text-white" 
        :class="!selected && 'text-white/40'"
      >
        Browse
      </button>
    </Tab>
  </div>
</template>