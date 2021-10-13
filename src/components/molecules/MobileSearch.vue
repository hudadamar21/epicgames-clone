<script setup lang="ts">
  import { toRefs } from "vue"
  import { state, resetState } from "@/store"

  const { showMobileSearch } = toRefs(state)

  const hiddenMobileSearch = () => resetState()
</script>

<template>
  <div v-if="showMobileSearch" class="absolute top-0 left-0 z-40 w-full bg-epic-gray-100 h-20 text-white flex items-center px-8">
    <Search class="w-5 h-5 mt-1 opacity-80"/>
    <input type="text" class="w-full h-full bg-transparent font-medium text-sm px-5 focus:outline-none" placeholder="Search">
    <button @click="hiddenMobileSearch">
      <CrossIcon class="w-5 h-5 mt-1 opacity-80"/>
    </button>
  </div>
</template>