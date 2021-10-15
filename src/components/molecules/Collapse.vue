<script setup lang="ts">
import { ref } from "vue";
import { FilterValue } from "@/data/filter";
import { changeCheckedFilterValue } from "@/store/filter";

const props = defineProps<{
  name: string;
  lists: FilterValue[];
  paddingx?: string;
}>();

const isOpen = ref(false);

const handleCheckedValue = (value: FilterValue) => {
  changeCheckedFilterValue(value, props.name);
};
</script>

<template>
  <details class="py-2 text-xs border-b border-white/10" @toggle="isOpen = !isOpen">
    <summary
      :class="paddingx"
      class="flex items-center justify-between px-3 py-4 font-bold uppercase cursor-pointer text-white/60 hover:text-white"
    >
      {{ name }}
      <ArrowDown class="w-5 h-5 duration-200 transition-duration" :class="isOpen && '-rotate-180'" />
    </summary>
    <div class="space-y-1" :class="paddingx ? `${paddingx} -mx-2` : ''">
      <Checkable
        @checked="handleCheckedValue"
        v-for="value of lists"
        :value="value"
        :key="value.name"
      />
    </div>
  </details>
</template>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
