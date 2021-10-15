import { Ref, ref, watch } from "vue";

const useRefValidation = () => {
  type RefValidation = [Ref<string>, (value: string) => void, Ref<string>]

  const state = ref<string>('')
  const error = ref<string>('')

  const setState = (value: string): void => {
    state.value = value
  }

  watch(() => state.value, (newval) => {
    error.value = !newval ? 'required' : ''
  })

  return [ state , setState, error ] as RefValidation
}

export default useRefValidation