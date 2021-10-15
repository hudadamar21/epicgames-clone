<script setup lang="ts">
import { ref, computed } from "vue";
import countries from "@/data/countries";
import useRefValidation from "@/hooks/useRefValidation";

const [ country, setCountry, countryError ] = useRefValidation()
const [ firstName, setFirstName, firstNameError ] = useRefValidation()
const [ lastName, setLastName, lastNameError ] = useRefValidation()
const [ displayName, setDisplayName, displayNameError ] = useRefValidation()
const [ email, setEmail, emailError ] = useRefValidation()
const [ password, setPassword, passwordError ] = useRefValidation()


const recieveNews = ref(false);
const agreeTerms = ref(false);

const validInput = computed(() => 
  !!(firstName && lastName && displayName && email && password)
);
</script>

<template>
  <AuthWrapper title="Sign Up" isSignUp>
    <form @submit.prevent action="#" class="w-full mb-8">
      <div class="space-y-6">
        <DropdownInput 
          class="z-20" 
          name="Country" 
          :lists="countries" 
          defaultSelected="indonesia"
          isRequired
        />
        <div class="grid grid-cols-2 gap-4">
          <FloatingInput
            name="firstName"
            title="First Name"
            :input="firstName"
            :error="firstNameError"
            @value="(val:string) => setFirstName(val)"
            isRequired
          />
          <FloatingInput
            name="lastName"
            title="Last Name"
            :input="lastName"
            :error="lastNameError"
            @value="(val:string) => setLastName(val)"
            isRequired
          />
        </div>
        <FloatingInput
          name="displayName"
          title="Display Name"
          :input="displayName"
          :error="displayNameError"
          @value="(val:string) => setDisplayName(val)"
          isRequired
        />
        <FloatingInput
          name="email"
          title="Email Address"
          :input="email"
          :error="emailError"
          @value="(val:string) => setEmail(val)"
          isRequired
        />
        <FloatingInput
          name="password"
          title="Password"
          isPassword
          showAndHidden
          autocomplete="false"
          isRequired
          :input="password"
          :error="passwordError"
          @value="(val:string) => setPassword(val)"
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
      >Register now</button>
    </form>
  </AuthWrapper>
</template>
