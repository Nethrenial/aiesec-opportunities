<script setup lang="ts">
import { useLayoutStore } from "@/stores";

const layoutStore = useLayoutStore();
</script>

<template>
  <header class="default-header flex">
    <div class="brand flex items-center justify-between">
      <RouterLink to="/">
        <img src="../../assets/Logo-Dark.svg" alt="AIESEC Logo" />
      </RouterLink>
      <i-icon-park-outline-setting-config
        class="filter-toggle w-[28px] h-[28px]"
        @click="layoutStore.sidebarOpen = !layoutStore.sidebarOpen"
      />
    </div>
    <div class="sc flex gap-8">
      <OpportunitySearch class="mx-auto" />
      <div class="toggle-wrapper items-center justify-between gap-4">
        <DarkModeToggle />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
  height: 100px;
  background-color: var(--clr-foreground);
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 2px 2px 10px 2px rgba($color: #000, $alpha: 0.1);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-block: 0.5rem;
  flex-direction: column;

  @include mq(sm) {
    box-shadow: none;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @include mq(md) {
    align-items: center;
    justify-content: center;
    padding-block: 0rem;
    height: 60px;
    flex-direction: row;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  @include mq(lg) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
  @include mq(xl) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }
  @include mq(xxl) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }
}

img {
  height: 40px;
  width: 100%;
}

.sc {
  flex: 1;
  align-items: center;
  // justify-content: center;
}

.toggle-wrapper {
  display: none;

  @include mq(md) {
    display: flex;
  }
}

.filter-toggle {
  @include mq(md) {
    display: none;
  }
}

.brand {
  display: flex;
}
</style>
