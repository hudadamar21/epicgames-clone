<script setup lang="ts">
  import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
  defineProps<{
    value: boolean,
    label: string
  }>()
</script>

<template>
  <SwitchGroup>
    <div class="grid grid-flow-col justify-start items-center">
      <div class="h-5 w-5">
        <Switch
          v-model="value"
          :class="value ? 'bg-epic-blue border-black' : 'bg-transparent'"
          class="border h-full w-full ring-8 ring-transparent hover:ring-white/10 grid place-items-center focus:outline-none"
        >
          <CheckIcon v-show="value"/>
        </Switch>
      </div>
      <SwitchLabel class="ml-4 cursor-pointer flex-grow">{{ label }}</SwitchLabel>
    </div>
  </SwitchGroup>
  
</template>