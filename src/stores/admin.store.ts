import type { User } from "firebase/auth";
import { acceptHMRUpdate, defineStore } from "pinia";
import { createToast } from "mosha-vue-toastify";
import { loginAdmin, logoutAdmin } from "@/api";

interface AdminState {
  admin: User | null;
}

export const useAdminStore = defineStore("admin", {
  state: (): AdminState => {
    return {
      admin: null,
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
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminStore, import.meta.hot));
