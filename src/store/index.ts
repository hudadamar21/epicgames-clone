import { reactive } from "vue";

interface State {
  showMobileSearch: boolean;
  showMobileTabMenu: boolean;
  showOverlay: boolean;
  tabMenuIndex: number;
  isMenuOpen: boolean
}

export const state = reactive<State>({
  isMenuOpen: false,
  showMobileSearch: false,
  showMobileTabMenu: false,
  showOverlay: false,
  tabMenuIndex: 0,
});

export const resetState = () => {
  state.isMenuOpen = false
  state.showMobileSearch = false;
  state.showMobileTabMenu = false;
  state.showOverlay = false;
};

