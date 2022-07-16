import { acceptHMRUpdate, defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    sidebarOpen: false,
  }),
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
