<script setup lang="ts">
  import footerMenus from "@/data/footerMenus"
</script>

<template>
  <footer class="px-5 md:px-14 lg:px-20 bg-epic-gray-200 py-10 text-sm">
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-2">
        <Facebook class="h-9 w-9 text-white/70 hover:text-epic-blue transition duration-200" />
        <Twitter class="h-9 w-9 text-white/70 hover:text-epic-blue transition duration-200" />
        <Youtube class="h-9 w-9 text-white/70 hover:text-epic-blue transition duration-200" />
      </div>
      <a href="#" class="border-2 border-white/70 text-white/70 hover:border-epic-blue hover:text-epic-blue transition duration-200 cursor-pointer">
        <ArrowUp class="h-5 w-5 m-1.5 mt-2 mb-0.5"/>
      </a>
    </div>

    <div v-for="menu of footerMenus" class="text-white mb-5">
      <div class="text-white/50 mb-2">{{ menu.name}}</div>
      <div class="flex items-center flex-wrap opacity-90">
        <ul v-for="(items, index) of menu.items" :key="index" class="pr-5">
          <li v-for="item of items" :key="item" class="menuitem">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="border-t mt-5 pt-10 border-white/10 text-white">
      <p class="text-xs w-full md:w-1/2 opacity-70 leading-loose pb-10">
        © 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   
      </p>
      <div class="text-center md:text-left flex flex-col md:flex-row gap-5 opacity-80">
        <a href="#" class="menuitem">Terms of Service</a>
        <a href="#" class="menuitem">Privacy Policy</a>
        <a href="#" class="menuitem">Store Refund Policy</a>
      </div>
    </div>
  </footer>
</template>

<style>
  .menuitem {
    @apply mb-1 hover:text-epic-blue cursor-pointer transition
  }
</style>