import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import generatedRoutes from "~pages";
// Import the CSS or use your own!
import "./firebase.config";
import "@unocss/reset/tailwind.css";
import "./styles/main.scss";
import "uno.css";
import "@/components/index.scss";
import type { UserModule } from "@/types";

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    Object.values(import.meta.glob("./modules/*.ts", { eager: true })).forEach(
      (i) => (i as { install: UserModule }).install?.(ctx)
    );
  }
);
