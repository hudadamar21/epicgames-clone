<script setup lang="ts">
import { ref, computed } from "vue";
import Checkbox from "@/components/atom/Checkbox.vue";
import AuthWrapper from "@/components/templates/AuthWrapper.vue";
import useRefValidation from "@/hooks/useRefValidation";

const [ email, setEmail, emailError ] = useRefValidation()
const [ password, setPassword, passwordError ] = useRefValidation()

const rememberMe = ref(false);

const validInput = computed(() => !!(email.value && password.value));

</script>

<template>
  <AuthWrapper title="Sign in with an epic games account">
    <form @submit.prevent action="#" class="w-full mb-8">
      <div class="space-y-6">
        <FloatingInput
          name="email"
          title="Email Address"
          :input="email"
          :error="emailError"
          @value="(val: string) => setEmail(val)"
        />
        <FloatingInput
          name="password"
          title="Password"
          isPassword
          showAndHidden
          autocomplete="true"
          :input="password"
          :error="passwordError"
          @value="(val: string) => setPassword(val)"
        />
      </div>
      <div class="flex items-center justify-between text-[13px] mt-6 mb-10">
        <Checkbox :value="rememberMe">Remember me</Checkbox>
        <a href="#" class="underline">Forgot Your Password</a>
      </div>
      <button
        type="submit"
        :disabled="!validInput"
        class="w-full h-14 bg-epic-blue text-[13px] rounded uppercase font-bold disabled:cursor-default disabled:opacity-40 hover:brightness-110"
      >Log in now</button>
    </form>
  </AuthWrapper>
</template>
