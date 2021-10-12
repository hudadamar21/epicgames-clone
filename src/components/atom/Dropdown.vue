<script setup lang="ts">
  import { ref } from "vue"

  const props = defineProps<{
    name: string,
    open?: boolean,
    lists: string[]
  }>()

  const selectedName = ref(props.lists[0])
  const isOpen = ref(props.open)

  const changeSelected = (list: string) => {
    selectedName.value = list
    toggleDropdown()
  }

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div class="relative">
    <button @click="toggleDropdown" class="group relative flex items-center gap-2 text-sm font-semibold">
      <span class="text-white/60">{{ name }}:</span> 
      <span class="flex items-center">
        {{ selectedName }}
        <ArrowDown class="w-4 h-4"/>
      </span>
    </button>
    <div class="absolute top-full left-0 pt-2 z-10">
      <ul v-show="isOpen" class=" bg-epic-gray-200 px-4 py-3.5 space-y-2.5 w-max rounded shadow-lg">
        <li
          v-for="list of lists" 
          :key="list"
          @click="changeSelected(list)" 
          class="hover:underline font-semibold text-[13px] hover:text-white cursor-pointer"
          :class="selectedName === list ? 'text-white' : 'text-white/50'"
        >
          {{ list }}
        </li>
      </ul>
    </div>
  </div>
</template>