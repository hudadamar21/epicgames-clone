<script setup lang="ts">
 import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

 import highlightGames from "@/data/highlightGames"
</script>

<template>
    <TabGroup >
      <div class="flex flex-col md:flex-row gap-4">
        <TabPanels class="flex-grow">
          <TabPanel v-for="{ image, title, status, description, price } of highlightGames" :key="title">
            <HighlightGame 
              v-bind="{image, title,status ,description,price}"
            />
          </TabPanel>
        </TabPanels>
        <TabList class="w-full md:w-48 grid grid-cols-2 md:grid-cols-1 grid-rows-6 gap-1">
          <Tab v-for="{ image, title } of highlightGames" v-slot="{ selected }" :key="image" as="template">
            <HighlightGameList 
              v-bind="{image,title, selected}"
            />
          </Tab>
        </TabList>
      </div>
    </TabGroup>
</template>