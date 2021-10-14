<script setup lang="ts">
  import { reactive, ref, watch, computed } from 'vue';
import Checkbox from '@/components/atom/Checkbox.vue';
import AuthWrapper from '@/components/molecules/AuthWrapper.vue';

  interface Inputs {
    [index: string]: string,
    email: string,
    password: string
  }

  const inputs: Inputs = reactive({ 
    email: '',
    password: ''
  })

  const errors: Inputs = reactive({
    email: '',
    password: ''
  })

  const rememberMe = ref(false)

  const validInput = computed(() => !!(inputs.email && inputs.password))

  watch(() => inputs.email, () => {
    errors.email = !inputs.email ? 'required' : '' 
  })
  watch(() => inputs.password, () => {
    errors.password = !inputs.password ? 'required' : '' 
  })

  function handleInput({name, value}: {name: string, value: string}) {
    inputs[name] = value
  }

</script>

<template>
  <AuthWrapper title="Sign in with an epic games account">
    <form @submit.prevent action="#" class="w-full mb-8">
      <div class="space-y-6">
        <FloatingInput
          name="email"
          title="Email Address" 
          :input="inputs.email"
          :error="errors.email"
          @value="handleInput"
        />
        <FloatingInput 
          name="password"
          title="Password"
          isPassword
          showAndHidden
          autocomplete="true"
          :input="inputs.password"
          :error="errors.password"
          @value="handleInput"
        />
      </div>
      <div class="flex items-center justify-between text-[13px] mt-6 mb-10">
        <Checkbox :value="rememberMe" label="Remember me"/>
        <a href="#" class="underline">Forgot Your Password</a>
      </div>
      <button type="submit" :disabled="!validInput" class="w-full h-14 bg-epic-blue  text-[13px] rounded uppercase font-bold disabled:cursor-default disabled:opacity-40 hover:brightness-110">
        Log in now
      </button>
    </form>
  </AuthWrapper>
</template>