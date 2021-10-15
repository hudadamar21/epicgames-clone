<script setup lang="ts">
import { state, resetState } from "@/store";
import { watch, toRefs } from "vue";

defineEmits(["close"]);

const { showOverlay } = toRefs(state);

watch(showOverlay, (newval) => {
  document.body.style.overflow = newval ? 'hidden' : 'auto'
})

const closeOverlay = () => {
  resetState();
};
</script>

<template>
  <div v-if="showOverlay" @click="closeOverlay" class="fixed inset-0 z-20 md:hidden bg-black/60"></div>
</template>
