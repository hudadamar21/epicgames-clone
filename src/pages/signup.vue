<script setup lang="ts">
import { reactive, ref, watch, computed } from "vue";
import countries from "@/data/countries";

interface Inputs {
  [index: string]: string;
  country: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
}

const inputs: Inputs = reactive({
  country: "",
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
});

const errors: Inputs = reactive({
  country: "",
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
});

const recieveNews = ref(false);
const agreeTerms = ref(false);

watch(
  () => inputs.firstName,
  () => (errors.firstName = !inputs.firstName ? "required" : "")
);
watch(
  () => inputs.lastName,
  () => (errors.lastName = !inputs.lastName ? "required" : "")
);
watch(
  () => inputs.displayName,
  () => (errors.displayName = !inputs.displayName ? "required" : "")
);
watch(
  () => inputs.email,
  () => (errors.email = !inputs.email ? "required" : "")
);
watch(
  () => inputs.password,
  () => (errors.password = !inputs.password ? "required" : "")
);

const validInput = computed(
  () =>
    !!(
      inputs.firstName &&
      inputs.lastName &&
      inputs.displayName &&
      inputs.email &&
      inputs.password
    )
);

function handleInput({ name, value }: { name: string; value: string }) {
  inputs[name] = value;
}
</script>

<template>
  <AuthWrapper title="Sign Up" isSignUp>
    <form @submit.prevent action="#" class="w-full mb-8">
      <div class="space-y-6">
        <DropdownInput 
          class="z-20" 
          name="Country *" 
          :lists="countries" 
          defaultSelected="indonesia"
          isRequired
        />
        <div class="grid grid-cols-2 gap-4">
          <FloatingInput
            name="firstName"
            title="First Name"
            :input="inputs.firstName"
            :error="errors.firstName"
            @value="handleInput"
            isRequired
          />
          <FloatingInput
            name="lastName"
            title="Last Name *"
            :input="inputs.lastName"
            :error="errors.lastName"
            @value="handleInput"
            isRequired
          />
        </div>
        <FloatingInput
          name="displayName"
          title="Display Name"
          :input="inputs.displayName"
          :error="errors.displayName"
          @value="handleInput"
          isRequired
        />
        <FloatingInput
          name="email"
          title="Email Address"
          :input="inputs.email"
          :error="errors.email"
          @value="handleInput"
          isRequired
        />
        <FloatingInput
          name="password"
          title="Password"
          isPassword
          showAndHidden
          autocomplete="false"
          isRequired
          :input="inputs.password"
          :error="errors.password"
          @value="handleInput"
        />
      </div>
      <div class="space-y-4 text-[13px] mt-6 mb-10 text-white/60">
        <Checkbox :value="recieveNews">
          I would like to receive news, surveys and special offers from Epic
          Games.
        </Checkbox>
        <Checkbox :value="agreeTerms">
          I have read and agree to the
          <a href="#" class="text-white underline">terms of services</a>
        </Checkbox>
      </div>
      <button
        type="submit"
        :disabled="!validInput"
        class="w-full h-14 bg-epic-blue text-[13px] rounded uppercase font-bold disabled:cursor-default disabled:opacity-40 hover:brightness-110"
      >Log in now</button>
    </form>
  </AuthWrapper>
</template>
