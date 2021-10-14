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
  <Menu as="div" class="relative" v-slot="{ open }">
    <MenuButton class="group relative flex items-center gap-2 text-[13px] md:text-sm font-normal md:font-semibold">
      <span class="text-white/60">{{ name }}:</span> 
      <span class="flex items-center">
        {{ selectedName }}
        <ArrowDown :class="open && '-rotate-180'" class="w-4 h-4 transition duration-200" />
      </span>
    </MenuButton>
    <MenuItems class="absolute top-full left-0 pt-2 z-10 ">
      <ul class="bg-epic-gray-200 px-4 py-3.5 space-y-2.5 w-max rounded shadow-lg">
        <MenuItem 
          as="li"
          v-for="list of lists" 
          :key="list"
          @click="changeSelected(list)" 
          class="hover:underline font-semibold text-[13px] hover:text-white cursor-pointer"
          :class="selectedName === list ? 'text-white' : 'text-white/50'"  
        >
          {{ list }}
        </MenuItem>
      </ul>
    </MenuItems>
  </Menu>
</template>