<template>
  <nav class="fixed h-14 bg-epic-gray-100 w-full flex justify-between text-white text-[0.7rem]">
    <div class="flex gap-5 pl-5">
      <div class="h-full flex items-center opacity-80 hover:opacity-100 transition duration-200 cursor-pointer">
        <EpicGames class="w-9 h-9"/>
      </div>
      <ul class="flex uppercase">
        <MenuItem title="store" active/>
        <MenuItem title="news"/>
        <MenuItem title="faq"/>
        <MenuItem title="help"/>
        <MenuItem title="unreal engine"/>
      </ul>
    </div>
    <div class="flex text-xxs">
      <button class="mr-5 opacity-70 hover:opacity-100 ">
        <Globe class="w-6 h-6"/>
      </button>
      <a href="#" class="h-full flex items-center px-5 gap-2 opacity-70 hover:opacity-100 tracking-wider">
        <User/>
        SIGN IN
        </a>
      <a href="#" class="h-full flex items-center px-5 bg-epic-blue bg-opacity-90 hover:bg-opacity-100 tracking-wider">GET EPIC GAMES</a>
    </div>
  </nav>
</template>