<script setup lang="ts">
  defineProps<{
    title: string,
    isSignUp?: boolean
  }>()
</script>

<template>
  <div class="flex items-center justify-center w-full py-10 text-sm select-none">
    <div class="w-full sm:w-[470px] rounded bg-epic-gray-200 h-[90%] px-5 py-14 sm:p-14 grid place-items-center text-white">
      <EpicGames class="w-12 h-12"/>
      <h1 class="uppercase font-bold text-xs w-full mb-5 mt-7">
        {{ title }}
      </h1>
      <slot/>
      <div class="grid place-items-center text-[13px] gap-2">
        <a href="#" class="underline mb-4">Privacy Policy</a>
        <div >
          <span class="text-white/60 mr-1">
            {{ isSignUp ? "Have an Epic Games account?" : "Don't have an Epic Games account?" }}
          </span>
          <router-link v-if="isSignUp" to="/signin" class="underline">Sign In</router-link>
          <router-link v-else to="/signup" class="underline">Sign Up</router-link>
        </div>
        <div>
         <span class="text-white/60 mr-1">Back to</span> <a href="#" class="underline">all sign up options</a>
        </div>
      </div>
    </div>
  </div>
</template>