<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import EyeIcon from '../icons/EyeIcon.vue';
import EyeOffIcon from '../icons/EyeOffIcon.vue';

  const emit = defineEmits(['value'])

  interface Props {
    name: string,
    title: string,
    input: string,
    isPassword?: boolean,
    error: string,
    autocomplete?: string,
    showAndHidden?: boolean
  }

  const props = defineProps<Props>()

  const elInput = ref(null)
  const showValue = ref(false)
  const type = ref('text')

  onBeforeMount(() => {
    if(props.isPassword) {
      type.value = 'password'
    }
  })

  function handleShowValue() {
    showValue.value = !showValue.value
    type.value = type.value === 'text' ? 'password' : 'text'
  }

  function handleInput(e:any) {
    emit('value', { name: props.name, value: e.target.value})
  }
</script>

<template>
  <div class="relative w-full">
    <input 
      @input="handleInput" 
      :value="input" 
      :id="name" 
      :type="type"
      ref="elInput"
      :autocomplete="autocomplete"
      :class="error 
        ? 'border-red-500 focus:border-red-500 ' 
        : 'border-white/30 focus:border-white '
      "
      class="floating-input peer appearance-none"
    >
    <label 
      :for="name"  
      :class="input ? '-translate-y-6 scale-90' : ''"
      class="floating-label peer-focus:-translate-y-6 peer-focus:scale-90"
    >
      {{ title }}
    </label>
    <button 
      v-if="showAndHidden"
      @click="handleShowValue"
      class="
        absolute right-0 top-1/2 
        -translate-y-1/2 z-20 
        hover:bg-white/20 active:bg-white/30 
        p-2 rounded
        transition duration-200
      "
    >
      <EyeIcon v-if="showValue" class="w-6 h-6" />
      <EyeOffIcon v-else class="w-6 h-6" />
    </button>
    <span class="absolute -bottom-5 left-0 capitalize text-xxs text-red-500">
      {{ error }}
    </span>
  </div>
</template>

<style>
  .floating-input {
    @apply 
      relative z-10 
      border 
      px-5 pt-8 pb-3 rounded-md 
      transition duration-200 
      bg-transparent w-full 
      focus:outline-none;
  }
  .floating-label {
    @apply
      absolute left-5 top-1/2 
      -translate-y-1/2 origin-left
      text-[13px] text-white/80
      transition duration-200;
  }
</style>