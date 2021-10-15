<script setup lang="ts">
import gameList from "@/data/gameList";
import { ref, onMounted } from "vue";
defineProps<{
  title: string;
}>();

const list = ref(gameList.slice(0, 5));

onMounted(() => {
  changeCountGameList(window);
  window.addEventListener("resize", (e: any) => {
    changeCountGameList(e.target);
  });
});

const changeCountGameList = (e: any) => {
  if (e.innerWidth < 1024) {
    list.value = gameList.slice(0, 4);
  } else {
    list.value = gameList.slice(0, 5);
  }
};
</script>

<template>
  <div class="px-5 mt-20 lg:mt-14 md:px-0">
    <h2 class="mb-4 font-bold text-white/90">{{ title }}</h2>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      <GameCard
        v-for="list of list"
        v-bind="list"
        :key="title"
        class="mb-6 md:mb-0"
      />
    </div>
  </div>
</template>
