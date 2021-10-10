<script setup lang="ts">
  import { state } from "@/store"

  const openMobileSearch = () => {
    state.showMobileSearch = true
  }
</script>

<template>
  <div>
    <button @click="openMobileSearch" class="md:hidden text-white/80 mt-1.5">
      <Search class="w-5 h-5"/>
    </button>
    <div class="hidden md:flex items-center gap-3 text-white/80">
      <div class="pl-3 absolute top-1/2 -translate-y-1/2">
        <Search/>
      </div>
      <input type="text" class="py-2.5 pr-3 bg-epic-gray-200 focus:bg-epic-gray-100 text-sm font-medium focus:outline-none pl-10 placeholder-white/50" placeholder="Search">
    </div>
  </div>
  
  
</template>