import { reactive } from "vue"

interface State {
  showMobileSearch: boolean,
  showMobileTabMenu: boolean,
  tabMenuIndex: number,
  showOverlay: boolean
}

export const state = reactive<State>({
  showMobileSearch: false,
  showMobileTabMenu: false,
  showOverlay: false,
  tabMenuIndex: 0,
})

export const resetState = () => {
  state.showOverlay = false
  state.showMobileTabMenu = false
  state.showMobileSearch = false
}