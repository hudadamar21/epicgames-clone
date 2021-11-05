<script setup lang="ts">
import { ref } from "vue"
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
const props = defineProps<{
  value: boolean;
}>();

const checkValue = ref(props.value)
</script>

<template>
  <SwitchGroup>
    <div class="grid items-center justify-start grid-flow-col">
      <div class="w-5 h-5">
        <Switch
          v-model="checkValue"
          :class="checkValue ? 'bg-epic-blue border-black' : 'bg-transparent'"
          class="grid w-full h-full border ring-8 ring-transparent hover:ring-white/10 place-items-center focus:outline-none"
        >
          <CheckIcon v-show="checkValue" />
        </Switch>
      </div>
      <SwitchLabel class="flex-grow ml-4 cursor-pointer">
        <slot />
      </SwitchLabel>
    </div>
  </SwitchGroup>
</template>
