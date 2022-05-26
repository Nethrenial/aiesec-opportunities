<script lang="ts" setup></script>

<template>
  <header class="admin-header flex items-center justify-between">
    <RouterLink to="/dashboard/manage">
      <img src="../../assets/Logo-Dark.svg" />
    </RouterLink>
    <OpportunitySearch />
    <div class="flex items-center justify-between gap-4">
      <DarkModeToggle />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.admin-header {
  height: 60px;
  background-color: var(--clr-foreground);
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  //   border: 1px solid rgba($color: #000, $alpha: 0.2);
  // box-shadow: 2px 2px 10px 2px rgba($color: #000, $alpha: 0.1);
  padding-left: 1rem;
  padding-right: 1rem;

  @include mq(sm) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @include mq(md) {
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
  // flex: 1;
}
</style>
