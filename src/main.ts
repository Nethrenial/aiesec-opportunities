import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import generatedRoutes from "~pages";
import NProgress from "nprogress";

import VueUniversalModal from "vue-universal-modal";

// Import the CSS or use your own!
import "./firebase.config";
import "@unocss/reset/tailwind.css";
import "./styles/main.scss";
import "uno.css";
import "mosha-vue-toastify/dist/style.css";
import "vue-universal-modal/dist/index.css";

const routes = setupLayouts(generatedRoutes);

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.path !== from.path) NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(createHead());
app.use(router);
app.use(createPinia());
app.use(VueUniversalModal, {
  teleportTarget: "#modals",
});
app.mount("#app");
