<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import EyeIcon from "../icons/EyeIcon.vue";
import EyeOffIcon from "../icons/EyeOffIcon.vue";

const emit = defineEmits(["value"]);

interface Props {
  name: string;
  title: string;
  input: string;
  isPassword?: boolean;
  error: string;
  autocomplete?: string;
  showAndHidden?: boolean;
  isRequired?: boolean;
}

const props = defineProps<Props>();

const propInput = computed(() => props.input)

const elInput = ref(null);
const showValue = ref(false);
const type = ref("text");

onBeforeMount(() => {
  if (props.isPassword) {
    type.value = "password";
  }
});

function handleShowValue() {
  showValue.value = !showValue.value;
  type.value = type.value === "text" ? "password" : "text";
}

function handleInput(e: any) {
  emit("value", e.target.value);
}
</script>

<template>
  <div class="relative w-full">
    <input
      @input="handleInput"
      :value="propInput"
      :id="name"
      :type="type"
      ref="elInput"
      :autocomplete="autocomplete"
      :class="
        error
          ? 'border-red-500 focus:border-red-500 '
          : 'border-white/30 focus:border-white '
      "
      class="appearance-none floating-input peer"
    />
    <label
      :for="name"
      class="floating-label peer-focus:-translate-y-5 peer-focus:scale-90"
      :class="propInput ? '-translate-y-5 scale-90' : '-translate-y-1/2'"
    >
      {{ title }}
      <span 
        v-show="isRequired" 
        :class="error ? 'text-red-500' : 'text-red-400'"
      >*</span>
    </label>
    <button
      v-if="showAndHidden"
      @click="handleShowValue"
      class="absolute right-0 z-20 p-2 transition duration-200 -translate-y-1/2 rounded top-1/2 hover:bg-white/20 active:bg-white/30"
    >
      <EyeIcon v-if="showValue" class="w-6 h-6" />
      <EyeOffIcon v-else class="w-6 h-6" />
    </button>
    <span class="absolute left-0 text-red-500 capitalize -bottom-5 text-xxs">
      {{ error }}
    </span>
  </div>
</template>

<style>
.floating-input {
  @apply relative z-10 
      border 
      px-5 pt-8 pb-2 rounded-md 
      transition duration-200 
      bg-transparent w-full 
      focus:outline-none;
}
.floating-label {
  @apply absolute left-5 top-1/2 
      origin-left
      text-[13px] text-white/80
      transition duration-200;
}
</style>
