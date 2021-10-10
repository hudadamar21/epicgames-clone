<script setup lang="ts">
  import { TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/vue'

</script>

<template>
  <MainLayout>
    <main class="py-13 md:ml-6">
      <TabGroup>
        <div class="md:container sticky top-13 h-20 lg:h-24 z-30">
          <TabList class="h-full flex items-center justify-between bg-epic-black/90 backdrop-blur  px-5 md:px-0 border-b border-white/10 md:border-transparent">
            <TabMenu/>
            <SearchInput/>
            <MobileSearch/>
            <MobileTabMenu/>
          </TabList>
        </div>
        <div class="container">
          <TabPanels class="text-white mt-5 md:mt-0">
            <TabPanel>
              <Discover/>
            </TabPanel>
            <TabPanel>
              Browse
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
    </main>

    <!-- Mobile Search -->
    <Overlay />
  </MainLayout>
</template>
