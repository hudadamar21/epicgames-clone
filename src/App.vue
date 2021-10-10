<script setup lang="ts">
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<template>
  <MainLayout>
    <main class="py-13 md:ml-6 container">
      <TabGroup>
        <TabList class="sticky top-13 h-20 lg:h-24 flex items-center justify-between bg-epic-black/90 backdrop-blur z-10">
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
          <SearchInput/>
        </TabList>
        <TabPanels class="text-white">
          <TabPanel>
            <Discover/>
          </TabPanel>
          <TabPanel>
            Browse
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>

    <!-- Mobile Search -->
    <MobileSearch/>
  </MainLayout>
</template>
