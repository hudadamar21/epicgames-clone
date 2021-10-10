<script setup lang="ts">
  import { state, resetState } from "@/store"
  import { toRefs } from "vue"

  defineEmits(['close'])

  const { showOverlay } = toRefs(state)

  const closeOverlay = () => {
    resetState()
  }
</script>

<template>
  <div 
    v-if="showOverlay" 
    @click="closeOverlay" 
    class="fixed inset-0 z-20 md:hidden bg-black/60"
  ></div>
</template>