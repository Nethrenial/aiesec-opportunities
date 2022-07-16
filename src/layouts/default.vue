<script setup lang="ts">
import { useLayoutStore } from "../stores/layout.store";

const layoutStore = useLayoutStore();
const defaultLayout = ref<HTMLElement>();
const { direction } = useSwipe(defaultLayout);

watch(direction, (newDirection) => {
  if (newDirection === "LEFT") {
    layoutStore.sidebarOpen = false;
  } else if (newDirection === "RIGHT") {
    layoutStore.sidebarOpen = true;
  }
});
</script>

<template>
  <main class="default" ref="defaultLayout">
    <DefaultHeader />
    <SidePanel />
    <MobileSidePanel />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
.default {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px calc(100vh - 60px);
  overflow: hidden;

  @include mq(md) {
    grid-template-rows: 60px calc(100vh - 60px);
    grid-template-columns: 200px 1fr;
  }
  @include mq(lg) {
    grid-template-columns: 250px 1fr;
  }

  @include mq(xl) {
    grid-template-columns: 300px 1fr;
  }
}
</style>
