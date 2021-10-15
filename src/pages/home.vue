<script setup lang="ts">
import { TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/vue";
import { state } from "@/store";

const changeTab = (tabIndex: any) => {
  window.scrollTo(0, 0);
  state.tabMenuIndex = tabIndex;
};
</script>

<template>
  <MainLayout>
    <main class="py-13 md:ml-6">
      <TabGroup @change="changeTab">
        <div class="sticky z-30 h-20 md:container top-13 lg:h-24">
          <TabList class="tablist">
            <TabMenu />
            <SearchInput />
            <MobileSearch />
            <MobileTabMenu />
          </TabList>
        </div>
        <div class="md:container">
          <TabPanels class="mt-5 text-white md:mt-0">
            <TabPanel>
              <!-- Discover Page -->
              <Discover />
            </TabPanel>
            <TabPanel>
              <!-- Browse Page -->
              <Browse />
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
    </main>
    <Overlay />
  </MainLayout>
</template>

<style scoped>
  .tablist {
    @apply flex items-center justify-between h-full px-5 border-b bg-epic-black/90 backdrop-blur md:px-0 border-white/10 md:border-transparent;
  }
</style>
