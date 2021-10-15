<script setup lang="ts">
import { FilterValue } from "@/data/filter";

defineProps<{
  value: FilterValue;
}>();
</script>

<template>
  <button
    @click="$emit('checked', value)"
    class="flex items-center justify-between w-full p-3 text-sm  rounded cursor-pointer"
    :class="
      value.checked
        ? 'bg-epic-gray-50 text-white'
        : 'text-white/60 hover:text-white'
    "
  >
    {{ value.name }}
    <CheckIcon v-if="value.checked" />
  </button>
</template>
