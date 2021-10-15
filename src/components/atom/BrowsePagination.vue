<template>
  <div class="flex items-center justify-center mt-10 text-[13px] font-bold">
    <a class="pagination-link">1</a>
    <a class="pagination-link">2</a>
    <a class="pagination-link">3</a>
    <a class="pagination-link">4</a>
    <a class="pagination-link">5</a>
    <div class="px-3">...</div>
    <a class="pagination-link">20</a>
    <a class="pagination-link">
      <ArrowRight class="w-4 h-4" />
    </a>
  </div>
</template>

<style>
.pagination-link {
  @apply text-white/50 hover:text-white cursor-pointer py-2 px-3;
}
</style>
