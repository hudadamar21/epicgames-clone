<script setup lang="ts">
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";

const props = defineProps<{
  name: string;
  open?: boolean;
  lists: string[];
  defaultSelected: string;
  isRequired?: boolean;
}>();

const selectedName = ref(props.defaultSelected || '');

</script>

<template>
  <Listbox
    v-model="selectedName"
    as="div"
    class="relative w-full p-1 px-5 border rounded-md border-white/30"
  >
    <ListboxButton
      class="relative flex items-center justify-between w-full gap-2 py-3 text-sm group"
    >
      <div class="text-left">
        <div class="text-white/60">
          {{ name }} 
          <span v-show="isRequired" class="text-red-400">*</span>
        </div>
        <div>{{ selectedName }}</div>
      </div>
      <ArrowDown :class="open && '-rotate-180'" class="w-4 h-4 transition duration-200" />
    </ListboxButton>
    <ListboxOptions
      class="absolute top-full left-0 mt-1 z-10 max-h-[300px] overflow-auto w-full rounded bg-epic-gray-50 py-3.5 shadow-lg"
    >
      <ListboxOption
        as="template"
        v-for="list of lists"
        :key="list"
        :value="list"
        v-slot="{ selected }"
      >
        <li 
          class="px-5 py-3 text-sm text-white cursor-pointer hover:bg-white/20"
          :class="selected  && 'bg-white/10'"
        >
          {{ list }}
        </li>
        </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
