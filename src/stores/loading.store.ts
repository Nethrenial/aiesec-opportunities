import { acceptHMRUpdate, defineStore } from "pinia";

interface LoadingState {
  filtering: boolean;
}

export const useLoadingStore = defineStore("loading", {
  state: (): LoadingState => {
    return {
      filtering: false,
    };
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot));
