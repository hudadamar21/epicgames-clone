import { reactive } from "vue"

interface State {
  showMobileSearch: boolean
}

export const state = reactive<State>({
  showMobileSearch: false
})