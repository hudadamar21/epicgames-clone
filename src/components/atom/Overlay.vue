<script setup lang="ts">
  defineEmits(['close'])

</script>

<template>
  <div class="fixed inset-0 z-20 md:hidden">
    <div @click="$emit('close')" class="h-full w-full bg-black/50"></div>
    <slot/>
  </div>
</template>