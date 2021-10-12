<script setup lang="ts">
import { dummyGameList } from "@/data/gameList"

const sortByList = [
  'Relavance',
  'New Release',
  'Release Date',
  'Alphabetical',
  'Price: Low to High',
  'Price: High to Low'
]

</script>

<template>
  <div class="grid grid-cols-12 mt-6 mb-16">
    <div class="col-span-9">
      <Dropdown name="Sort By" :lists="sortByList" />
      <div class="grid grid-cols-4 gap-4 mt-5">
        <GameCard
          class="mb-8"
          v-for="{ image, title, studio, discount, discountPrice, price } of dummyGameList"
          v-bind="{ image, title, studio, discount, discountPrice, price }"
        />
      </div>
      <BrowsePagination/>
    </div>
    <BrowseFilterGameList class="col-span-3 ml-5" />
  </div>
</template>