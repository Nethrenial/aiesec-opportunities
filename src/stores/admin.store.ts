import type { User } from "firebase/auth";
import { acceptHMRUpdate, defineStore } from "pinia";
import { createToast } from "mosha-vue-toastify";
import {
  deleteOpportunityById,
  getOpportunities,
  getOpportunityById,
  loginAdmin,
  logoutAdmin,
  updateOpportunity,
} from "@/api";
import type {
  OGXFunctionOrMultiple,
  Opportunity,
  QueryCountry,
  QueryPeriod,
  UpdateOpportunityDTO,
} from "@/types";

interface AdminState {
  admin: User | null;
  opportunities: Opportunity[];
  filters: {
    type: OGXFunctionOrMultiple;
    country: QueryCountry;
    begin: QueryPeriod | undefined;
    end: QueryPeriod | undefined;
    q: string | undefined;
  };

  filtering: boolean;
}

export const useAdminStore = defineStore("admin", {
  state: (): AdminState => {
    return {
      admin: null,
      opportunities: [],
      filters: {
        type: "all",
        country: "",
        begin: undefined,
        end: undefined,
        q: undefined,
      },

      filtering: false,
    };
  },

  actions: {
    async login(payload: { email: string; password: string }) {
      this.admin = await loginAdmin(payload);
    },

    async logout() {
      try {
        await logoutAdmin();
        this.admin = null;
      } catch (error) {
        createToast((error as Error).message, {
          position: "bottom-center",
          type: "danger",
        });
      }
    },

    async getOpportunityById(id: string) {
      let result = this.opportunities.find((o) => o.id === id);
      if (!result) {
        result = await getOpportunityById(id);
        return result;
      }

      return result;
    },
    async getOpportunities(queryObject: {
      type: OGXFunctionOrMultiple;
      country: QueryCountry;
      begin: QueryPeriod | undefined;
      end: QueryPeriod | undefined;
      q: string | undefined;
    }) {
      // console.log(queryObject.q);
      const tempOpportunities = await getOpportunities(queryObject);
      this.opportunities = tempOpportunities.filter((o) => {
        if (
          o.title
            .toLowerCase()
            .includes(queryObject.q ? queryObject.q.toLowerCase() : "")
        ) {
          return true;
        } else {
          return false;
        }
      });
      // console.log(temp);
    },

    async deleteOpportunity(id: string) {
      await deleteOpportunityById(id);
      await this.getOpportunities(this.filters);
    },

    async updateOpportunityById(
      payload: UpdateOpportunityDTO,
      originalPoster?: string
    ) {
      await updateOpportunity(payload, originalPoster);
      await this.getOpportunities(this.filters);
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminStore, import.meta.hot));
