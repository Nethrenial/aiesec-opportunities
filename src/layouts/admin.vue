<script setup lang="ts">
import { useLayoutStore } from "../stores/layout.store";

const layoutStore = useLayoutStore();
const defaultLayout = ref<HTMLElement>();
const { direction } = useSwipe(defaultLayout);

watch(direction, (newDirection) => {
  if (newDirection === "LEFT") {
    layoutStore.adminSidebarOpen = false;
  } else if (newDirection === "RIGHT") {
    layoutStore.adminSidebarOpen = true;
  }
});
</script>

<template>
  <main class="admin">
    <AdminHeader />
    <AdminSidePanel />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.admin {
  width: 100%;
}
</style>
