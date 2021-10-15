<script setup lang="ts">
import footerMenus from "@/data/footerMenus";
</script>

<template>
  <footer class="px-5 py-10 text-sm md:px-14 lg:px-20 bg-epic-gray-200">
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-2">
        <Facebook class="social-link" />
        <Twitter class="social-link" />
        <Youtube class="social-link" />
      </div>
      <a
        href="#"
        class="transition duration-200 border-2 cursor-pointer border-white/70 text-white/70 hover:border-epic-blue hover:text-epic-blue"
      >
        <ArrowUp class="h-5 w-5 m-1.5 mt-2 mb-0.5" />
      </a>
    </div>

    <div v-for="menu of footerMenus" class="mb-5 text-white font-medium">
      <div class="mb-2 text-white/50 font-semibold">{{ menu.name }}</div>
      <div class="flex flex-wrap items-center opacity-90">
        <ul v-for="(items, index) of menu.items" :key="index" class="pr-5">
          <li v-for="item of items" :key="item" class="menuitem">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="pt-10 mt-5 text-white border-t border-white/10">
      <p class="w-full pb-10 text-xs leading-loose md:w-1/2 opacity-70">
        © 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic
        Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the
        Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo
        are trademarks or registered trademarks of Epic Games, Inc. in the
        United States of America and elsewhere. Other brands or product names
        are the trademarks of their respective owners. Non-US transactions
        through Epic Games International, S.à r.l.
      </p>
      <div class="flex flex-col gap-5 text-center md:text-left md:flex-row opacity-80">
        <a href="#" class="menuitem">Terms of Service</a>
        <a href="#" class="menuitem">Privacy Policy</a>
        <a href="#" class="menuitem">Store Refund Policy</a>
      </div>
    </div>
  </footer>
</template>

<style>
.menuitem {
  @apply mb-1 hover:text-epic-blue cursor-pointer transition;
}
.social-link {
  @apply h-9 w-9 text-white/70 hover:text-epic-blue transition duration-200 cursor-pointer;
}
</style>
