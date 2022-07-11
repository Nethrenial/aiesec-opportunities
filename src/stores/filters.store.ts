import type { COUNTRIES } from "@/utils";
import { acceptHMRUpdate, defineStore } from "pinia";

interface FiltersState {
  allCountry: "" | typeof COUNTRIES[number];
  allBegin: {
    year: number | undefined;
    month: number | undefined;
  };
  allEnd: {
    year: number | undefined;
    month: number | undefined;
  };
  ogtCountry: string | typeof COUNTRIES[number];
  ogtBegin: {
    year: number | undefined;
    month: number | undefined;
  };
  ogtEnd: {
    year: number | undefined;
    month: number | undefined;
  };
  ogvCountry: string | typeof COUNTRIES[number];
  ogvBegin: {
    year: number | undefined;
    month: number | undefined;
  };
  ogvEnd: {
    year: number | undefined;
    month: number | undefined;
  };
}

export const useFiltersStore = defineStore("filters", {
  state: (): FiltersState => {
    return {
      allCountry: "",
      allBegin: {
        year: undefined,
        month: undefined,
      },
      allEnd: {
        year: undefined,
        month: undefined,
      },
      ogtCountry: "",
      ogtBegin: {
        year: undefined,
        month: undefined,
      },
      ogtEnd: {
        year: undefined,
        month: undefined,
      },
      ogvCountry: "",
      ogvBegin: {
        year: undefined,
        month: undefined,
      },
      ogvEnd: {
        year: undefined,
        month: undefined,
      },
    };
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFiltersStore, import.meta.hot));
