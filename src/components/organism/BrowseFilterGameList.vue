<script setup lang="ts">
import { filters, filterCheckedCount, ResetFilter } from "@/store/filter";

defineProps<{
  paddingx?: string;
}>();
</script>

<template>
  <div>
    <div
      class="grid grid-cols-2 pb-4 text-sm  border-b border-white/10"
      :class="paddingx || 'px-1'"
    >
      <h2>Filter ({{ filterCheckedCount }})</h2>
      <button
        v-if="filterCheckedCount > 0"
        @click="ResetFilter"
        class="hidden w-full h-full text-xs  uppercase md:block"
      >Reset</button>
    </div>
    <div class="min-h-60">
      <Collapse
        v-for="filter of filters"
        :key="filter.name"
        open
        :paddingx="paddingx"
        :name="filter.name"
        :lists="filter.lists"
      />
    </div>
  </div>
</template>
