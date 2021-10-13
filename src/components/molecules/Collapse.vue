<script setup lang="ts">
  import { ref } from "vue"
  import { FilterValue } from "@/data/filter"
  import { changeCheckedFilterValue } from "@/store/filter"

  const props = defineProps<{
    name: string,
    lists: FilterValue[],
    paddingx?: string
  }>()

  const isOpen = ref(false)

  const handleCheckedValue = (value: FilterValue) => {
    changeCheckedFilterValue(value, props.name)
  }
  
</script>

<template>
  <details class="text-xs border-b py-2 border-white/10" @toggle="isOpen = !isOpen">
    <summary 
      :class="paddingx"
      class="cursor-pointer px-3 py-4 uppercase font-bold text-white/60 hover:text-white flex items-center justify-between"
    >
      {{ name }}
      <ArrowDown 
        class="w-5 h-5 transition-duration duration-200" 
        :class="isOpen && '-rotate-180'"
      />
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