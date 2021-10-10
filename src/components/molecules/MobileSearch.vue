<script setup lang="ts">
  import { toRefs } from "vue"
  import { state } from "@/store"

  const { showMobileSearch } = toRefs(state)

  const hiddenMobileSearch = () => {
    showMobileSearch.value = false
  }
</script>

<template>
  <Overlay v-if="showMobileSearch" @close="hiddenMobileSearch">
    <div class="absolute top-0 left-0 w-full bg-epic-gray-50 h-20 mt-13 text-white flex items-center px-8">
      <Search class="w-5 h-5 mt-1 opacity-80"/>
      <input type="text" class="w-full h-full bg-transparent text-sm px-5 focus:outline-none" placeholder="Search">
      <button @click="hiddenMobileSearch">
        <CrossIcon class="w-5 h-5 mt-1 opacity-80"/>
      </button>
    </div>
  </Overlay>
</template>