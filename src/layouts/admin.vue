<script setup lang="ts">
import { useLayoutStore } from "../stores/layout.store";

const layoutStore = useLayoutStore();
const adminLayout = ref<HTMLElement>();
const { direction } = useSwipe(adminLayout);

watch(direction, (newDirection) => {
  if (newDirection === "LEFT") {
    layoutStore.adminSidebarOpen = false;
  } else if (newDirection === "RIGHT") {
    layoutStore.adminSidebarOpen = true;
  }
});
</script>

<template>
  <main class="admin" ref="adminLayout">
    <AdminSidePanel />
    <MobileAdminSidePanel />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
.admin {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  overflow: hidden;

  @include mq(md) {
    grid-template-columns: min-content 1fr;
  }
}
</style>
