import { acceptHMRUpdate, defineStore } from "pinia";
import type { QueryCountry, QueryPeriod, OGXFunctionOrMultiple } from "@/types";

interface FiltersState {
  type: OGXFunctionOrMultiple;
  country: QueryCountry;
  begin: QueryPeriod | undefined;
  end: QueryPeriod | undefined;
}

export const useFiltersStore = defineStore("filters", {
  state: (): FiltersState => {
    return {
      type: "all",
      country: "",
      begin: undefined,
      end: undefined,
    };
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFiltersStore, import.meta.hot));
