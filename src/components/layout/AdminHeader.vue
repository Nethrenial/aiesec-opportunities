<script lang="ts" setup>
import { useAdminStore } from "@/stores/admin.store";

const adminStore = useAdminStore();
const router = useRouter();

async function logout() {
  await adminStore.logout();
  await router.push("/login");
}
</script>

<template>
  <header class="admin-header flex items-center justify-between">
    <RouterLink to="/dashboard/manage">
      <img src="../../assets/Logo-Dark.svg" alt="AIESEC Logo" />
    </RouterLink>
    <div class="flex items-center justify-between gap-4">
      <DarkModeToggle />
      <button @click="logout">
        <i-carbon-logout />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
html.dark .admin-header {
  box-shadow: 3px 3px 6px 3px rgba($color: #000, $alpha: 0.3);
}

.admin-header {
  height: 120px;
  background-color: var(--clr-foreground);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 3px 3px 6px 3px rgba($color: #000, $alpha: 0.2);
  padding-left: 1rem;
  padding-right: 1rem;

  @include mq(sm) {
    height: 60px;
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
</style>
