import { reactive } from "vue";

interface State {
  showMobileSearch: boolean;
  showMobileTabMenu: boolean;
  showOverlay: boolean;
  tabMenuIndex: number;
}

export const state = reactive<State>({
  showMobileSearch: false,
  showMobileTabMenu: false,
  showOverlay: false,
  tabMenuIndex: 0,
});

export const resetState = () => {
  state.showMobileSearch = false;
  state.showMobileTabMenu = false;
  state.showOverlay = false;
};
