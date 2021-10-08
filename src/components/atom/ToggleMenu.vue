<script setup lang="ts">
  defineEmits(['toggle'])

  interface Props {
    isMenuOpen: boolean
  }

  withDefaults(
    defineProps<Props>(),
    { isMenuOpen: false }
  )
</script>

<template>
  <button @click="$emit('toggle')" class="toggle-button ar-1">
    <CrossIcon v-if="isMenuOpen" />
    <HamburgerMenu v-else />
  </button>
</template>