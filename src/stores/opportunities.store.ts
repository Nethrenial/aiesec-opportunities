import { acceptHMRUpdate, defineStore } from "pinia";
import { getOpportunities, getOpportunityById } from "@/api";
import type {
  OGXFunctionOrMultiple,
  Opportunity,
  OpportunityFilters,
} from "@/types";

interface OpportunitiesState {
  opportunities: Opportunity[];
}

export const useOpportunitiesStore = defineStore("opportunities", {
  state: (): OpportunitiesState => {
    return {
      opportunities: [],
    };
  },

  actions: {
    async getOpportunityById(id: string) {
      let result = this.opportunities.find((o) => o.id === id);
      if (!result) {
        result = await getOpportunityById(id);
        return result;
      }

      return result;
    },
    async getOpportunities(
      ogxFunction: OGXFunctionOrMultiple,
      filters?: OpportunityFilters
    ) {
      this.opportunities = await getOpportunities(ogxFunction, filters);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useOpportunitiesStore, import.meta.hot)
  );
}
