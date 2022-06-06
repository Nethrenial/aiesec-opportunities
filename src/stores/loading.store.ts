import { acceptHMRUpdate, defineStore } from "pinia";

interface LoadingState {
  ogtFiltering: boolean;
  ogvFiltering: boolean;
  allFiltering: boolean;
}

export const useLoadingStore = defineStore("loading", {
  state: (): LoadingState => {
    return {
      allFiltering: false,
      ogtFiltering: false,
      ogvFiltering: false,
    };
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot));
