<script setup lang="ts">
  import gameList from "@/data/gameList"
  import { ref, onMounted } from "vue"
  defineProps<{
    title: string
  }>()

  const list = ref(gameList.slice(0, 5))

  onMounted(() => {
    changeCountGameList(window)
    window.addEventListener('resize', (e: any) => {
      changeCountGameList(e.target)
    })
  })

  const changeCountGameList = (e: any) => {
    if(e.innerWidth < 1024) {
      list.value = gameList.slice(0, 4)
    } else {
      list.value = gameList.slice(0, 5)
    }
  }

</script>

<template>
  <div class="mt-20 lg:mt-14 px-5 md:px-0">
    <h2 class="font-bold mb-4 text-white/90">{{ title }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <GameCard
        v-for="{ title, image, studio, price } of list" 
        v-bind="{ title, image, studio, price }"
        :key="title"
      />
    </div>
  </div>
</template>