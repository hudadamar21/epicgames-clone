<script setup lang="ts">
  import { toRefs } from "vue"
  import { state } from "@/store"

  const { showMobileTabMenu } = toRefs(state)

  const hiddenMobileTabMenu = () => {
    showMobileTabMenu.value = false
  }
</script>

<template>
  <Overlay v-if="showMobileTabMenu" @close="hiddenMobileTabMenu">
    
  </Overlay>
</template>