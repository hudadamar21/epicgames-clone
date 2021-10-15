<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { HIGHLIGHT_GAME_AUTOPLAY_DELAY } from "@/constant";
const props = defineProps<{
  image: string;
  title: string;
  isActive: boolean;
  activeIndex: number;
}>();

watch(
  () => props.activeIndex,
  () => timerDelayed()
);

onMounted(() => timerDelayed());

const timer = ref<number>(0);

const timerPercent = computed(() => timer.value / 70 + "%");

const timerDelayed = () => {
  timer.value = 0;
  if (props.isActive) {
    const delay = setInterval(() => {
      if (timer.value < HIGHLIGHT_GAME_AUTOPLAY_DELAY) {
        timer.value += 100;
      } else {
        clearInterval(delay);
      }
    }, 100);
  }
};
</script>

<template>
  <li class="hightlight-game-list">
    <div
      class="absolute top-0 left-0 h-full bg-epic-gray-50"
      :style="{
        width: isActive ? timerPercent : 0,
      }"
    ></div>
    <div class="relative flex items-center gap-2.5 h-full">
      <img
        :src="image"
        :class="isActive && 'animate-zoom'"
        class="object-cover w-12 rounded-lg select-none bg-epic-blue h-14 md:h-full"
        alt="cover-game"
      />
      <p class="flex-grow text-xs  text-left">{{ title }}</p>
    </div>
  </li>
</template>

<style>
.discover-swiper .swiper-slide-thumb-active .hightlight-game-list {
  @apply bg-epic-gray-200 rounded-2xl;
}
.hightlight-game-list {
  @apply relative h-full px-2.5 py-2 overflow-hidden rounded-2xl hover:bg-epic-gray-200 transition duration-200 cursor-pointer md:w-48;
}

.animate-zoom {
  animation: zoomin 0.3s forwards ease-in-out;
}
@keyframes zoomin {
  0%,
  100% {
    transform: scale(100%);
  }
  50% {
    transform: scale(108%);
  }
}
</style>
