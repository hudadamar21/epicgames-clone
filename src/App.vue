<script setup lang="ts">
 import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<template>
  <MainLayout>
    <main class="py-13 md:ml-6 container">
      <TabGroup>
        <TabList class="sticky top-13 h-24 flex items-center justify-between bg-epic-black/90 backdrop-blur z-10">
          <div class="text-white text-sm flex items-center gap-5">
            <Tab v-slot="{ selected }" as="template">
              <button :class="!selected && 'opacity-40'">
                Discover  
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button :class="!selected && 'opacity-40'">
                Browser
              </button>
            </Tab>
          </div>
          <div>
            <button class="md:hidden text-white/80">
              <Search class="w-6 h-6"/>
            </button>
            <div class="hidden md:flex items-center gap-3 text-white/80">
              <div class="pl-3 absolute top-1/2 -translate-y-1/2">
                <Search/>
              </div>
              <input type="text" class="py-2.5 pr-3 bg-epic-gray-200 focus:bg-epic-gray-100 text-sm font-medium focus:outline-none pl-10 placeholder-white/50" placeholder="Search">
            </div>
          </div>
        </TabList>
        <TabPanels class="text-white">
          <TabPanel>
            <Discover/>
          </TabPanel>
          <TabPanel>
            brw
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  </MainLayout>
</template>
