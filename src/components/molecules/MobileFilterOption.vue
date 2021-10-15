<script setup lang="ts">
import { ResetFilter, closeFilterOption } from "@/store/filter";
</script>

<template>
  <div class="fixed inset-0 z-50 pt-5 overflow-auto bg-epic-black md:hidden">
    <BrowseFilterGameList paddingx="px-8" />
    <div
      class="fixed inset-x-0 bottom-0 flex items-center justify-center py-5 text-xs bg-epic-gray-200"
    >
      <button @click="ResetFilter" class="w-32 py-4 uppercase rounded-md">Clear</button>
      <button @click="closeFilterOption" class="w-32 py-4 uppercase rounded-md bg-epic-blue">Done</button>
    </div>
  </div>
</template>
