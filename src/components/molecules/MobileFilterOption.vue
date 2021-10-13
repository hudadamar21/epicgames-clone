<script setup lang="ts">
    import { ResetFilter, closeFilterOption } from "@/store/filter";
</script>

<template>
  <div class="fixed inset-0 bg-epic-black z-50 overflow-auto pt-5 md:hidden">
    <BrowseFilterGameList paddingx="px-8"/>
    <div class="fixed bottom-0 inset-x-0 bg-epic-gray-200 py-5 flex items-center justify-center text-xs">
      <button 
        @click="ResetFilter" 
        class="w-32 py-4 rounded-md uppercase"
      >
        Clear
      </button>
      <button 
        @click="closeFilterOption" 
        class="w-32 py-4 rounded-md uppercase bg-epic-blue"
      >
        Done
      </button>
    </div>
  </div>
</template>