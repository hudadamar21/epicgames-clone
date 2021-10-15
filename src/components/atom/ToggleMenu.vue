<script setup lang="ts">
defineEmits(["toggle"]);

interface Props {
  isMenuOpen: boolean;
}

withDefaults(defineProps<Props>(), { isMenuOpen: false });
</script>

<template>
  <button
    @click="$emit('toggle')"
    class="toggle-button ar-1"
    :class="isMenuOpen ? 'bg-epic-gray-200' : 'bg-epic-blue'"
  >
    <CrossIcon class="w-8 h-8" v-if="isMenuOpen" />
    <HamburgerMenu v-else />
  </button>
</template>

<style>
.toggle-button {
  @apply absolute top-0 right-0 
      grid place-items-center 
      text-white
      md:hidden h-full text-2xl
      transition;
}
</style>
