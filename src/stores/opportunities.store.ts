import { acceptHMRUpdate, defineStore } from "pinia";
import {
  getAllOGTOpportunities,
  getAllOGVOpportunities,
  getAllOpportunities,
  getOpportunityById,
  getFilteredOGTOpportunities,
  getFilteredOGVOpportunities,
  getFilteredOpportunities,
} from "@/api";
import type { Opportunity } from "@/types";
import type { COUNTRIES } from "@/utils";

interface OpportunitiesState {
  opportunities: Opportunity[];
  ogtOpportunities: Opportunity[];
  ogvOpportunities: Opportunity[];
}

export const useOpportunitiesStore = defineStore("opportunities", {
  state: (): OpportunitiesState => {
    return {
      opportunities: [],
      ogtOpportunities: [],
      ogvOpportunities: [],
    };
  },

  actions: {
    async getOpportunityById(id: string) {
      let result = [
        ...this.ogtOpportunities,
        ...this.ogvOpportunities,
        ...this.opportunities,
      ].find((o) => o.id === id);
      if (!result) {
        result = await getOpportunityById(id);
        return result;
      }

      return result;
    },
    async getOpportunities() {
      this.opportunities = await getAllOpportunities();
    },
    async getOGTOpportunities() {
      this.ogtOpportunities = await getAllOGTOpportunities();
    },
    async getOGVOpportunities() {
      this.ogvOpportunities = await getAllOGVOpportunities();
    },
    async getOGTOpportunitiesFiltered(filters: {
      country?: typeof COUNTRIES[number];
      period?: {
        begin: Date;
        end: Date;
      };
    }) {
      this.ogtOpportunities = await getFilteredOGTOpportunities(filters);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useOpportunitiesStore, import.meta.hot)
  );
}
