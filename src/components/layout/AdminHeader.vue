<script lang="ts" setup>
import { useAdminStore, useLayoutStore } from "@/stores";

const adminStore = useAdminStore();
const layoutStore = useLayoutStore();

const { adminSidebarOpen } = useLayoutStore();

const router = useRouter();

async function logout() {
  await adminStore.logout();
  await router.push("/login");
}
</script>

<template>
  <header class="admin-header flex items-center justify-between">
    <div class="brand flex items-center justify-between">
      <RouterLink to="/">
        <img src="../../assets/Logo-Dark.svg" alt="AIESEC Logo" />
      </RouterLink>
      <i-ic-outline-menu
        class="menu-toggle w-[28px] h-[28px]"
        @click="layoutStore.adminSidebarOpen = !layoutStore.adminSidebarOpen"
        v-if="!adminSidebarOpen"
      />
    </div>

    <div class="sc flex gap-8">
      <DarkModeToggle />
      <button @click="logout">
        <i-carbon-logout />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.admin-header {
  height: 60px;
  background-color: var(--clr-foreground);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
  width: 100%;
}

.sc {
  display: none;

  @include mq(md) {
    display: flex;
  }
}

.menu-toggle {
  margin-left: auto;

  @include mq(md) {
    margin-left: 0;
  }
}
</style>
