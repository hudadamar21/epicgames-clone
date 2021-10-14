<script setup lang="ts">
  import { ref } from "vue"
  import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

  const props = defineProps<{
    name: string,
    open?: boolean,
    lists: string[]
  }>()

  const selectedName = ref(props.lists[0])

  const changeSelected = (list: string) => {
    selectedName.value = list
  }

</script>

<template>
  <Menu as="div" class="relative w-full px-5 p-2 rounded-md border border-white/30" v-slot="{ open }">
    <MenuButton class="group relative flex flex-col gap-2 text-base w-full">
      <span class="text-white/60">{{ name }}:</span> 
      <div class="flex items-center justify-between w-full">
        {{ selectedName }}
        <ArrowDown :class="open && '-rotate-180'" class="w-4 h-4 transition duration-200" />
      </div>
    </MenuButton>
    <MenuItems class="absolute top-full left-0 mt-1 z-10 max-h-[300px] overflow-auto w-full rounded">
      <ul class="bg-epic-gray-50 py-3.5 w-full rounded shadow-lg">
        <MenuItem 
          as="li"
          v-for="list of lists" 
          :key="list"
          @click="changeSelected(list)" 
          class="font-semibold text-base px-5 py-3 hover:bg-white/20 cursor-pointer text-white"
        >
          {{ list }}
        </MenuItem>
      </ul>
    </MenuItems>
  </Menu>
</template>