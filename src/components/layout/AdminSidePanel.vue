<script lang="ts" setup>
import { useLayoutStore } from "@/stores";
import { COUNTRIES } from "@/utils";
import { isDark } from "@/composables";
import { storeToRefs } from "pinia";

//setting up stores
const layoutStore = useLayoutStore();

const { adminSidebarOpen } = storeToRefs(layoutStore);

const sidePanel = ref<HTMLDivElement>();

onClickOutside(sidePanel, () => {
  layoutStore.adminSidebarOpen = false;
});

const { direction } = useSwipe(sidePanel);

watch(direction, (newDirection) => {
  if (newDirection === "LEFT") {
    layoutStore.adminSidebarOpen = false;
  }
});
</script>

<template>
  <teleport to="body">
    <transition name="sidebar">
      <aside
        class="admin-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md"
        v-if="adminSidebarOpen"
        ref="sidePanel"
      >
        <label
          id="sidebar-dark-toggle-label"
          for="sidebar-dark-toggle"
          class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
        >
          {{ isDark ? "Switch to Light mode" : "Switch to Dark mode" }}
        </label>
        <DarkModeToggle id="sidebar-dark-toggle" name="sidebar-dark-toggle" />
      </aside>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.admin-side-panel {
  background-color: var(--clr-foreground);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 9999;

  position: absolute;
  top: 0;
  left: 0;
  right: 10%;
  bottom: 0;
  overflow-y: scroll;

  @include mq(md) {
    display: none;
  }
}

.sidebar {
  &-leave-active {
    transition: all 0.1s ease-out;
  }
  &-enter-active {
    transition: all 0.15s ease-in;
  }

  &-leave-to,
  &-enter-from {
    transform: translateX(-100%);
    opacity: 0.5;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
