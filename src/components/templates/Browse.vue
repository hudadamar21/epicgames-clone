<script setup lang="ts">
import { onMounted } from "vue";
import { dummyGameList } from "@/data/gameList"
import { mobileFilterOption, openFilterOption } from "@/store/filter";

const sortByList = [
  'Relavance',
  'New Release',
  'Release Date',
  'Alphabetical',
  'Price: Low to High',
  'Price: High to Low'
]

  onMounted(() => {
    showScroll(window)
    window.addEventListener('resize', (e: any) => {
      showScroll(e.target)
    })
  })

  const showScroll = (e: any) => {
    if(mobileFilterOption.value === true && e.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      mobileFilterOption.value = false
    }
  }
  
</script>

<template>
  <div class="grid grid-cols-12 mt-6 mb-16">
    <div class="col-span-12 lg:col-span-9 px-5">
      <div class="flex items-center justify-between">
        <Dropdown name="Sort By" :lists="sortByList" />
        <button @click="openFilterOption" class="flex items-center gap-2 text-[13px]">
          Filter
          <FilterIcon />
        </button>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3 lg:mt-5">
        <GameCard
          class="mb-8"
          v-for="{ image, title, studio, discount, discountPrice, price } of dummyGameList"
          v-bind="{ image, title, studio, discount, discountPrice, price }"
        />
      </div>
      <BrowsePagination/>
    </div>
    <BrowseFilterGameList class="hidden lg:block col-span-3 ml-5" />
  </div>
  <MobileFilterOption v-show="mobileFilterOption"/>
</template>