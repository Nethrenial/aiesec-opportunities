<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAdminStore } from "@/stores/admin.store";

const { admin } = storeToRefs(useAdminStore());

onMounted(async () => {
  if (!admin.value) {
    const router = useRouter();
    await router.push("/login");
  }
});

useHead({
  title: "Dashboard | AIESEC Opportunity Portal",
});
</script>

<template>
  <div class="dashboard-container">
    <div class="tab-header flex items-center gap-4">
      <RouterLink
        class="tab-heading flex items-center justify-evenly h-full"
        to="/dashboard"
      >
        <i-flat-color-icons-add-database />
        Add
      </RouterLink>
      <RouterLink
        class="tab-heading flex items-center justify-evenly h-full"
        to="/dashboard/manage"
      >
        <i-flat-color-icons-manager />
        Manage
      </RouterLink>
      <RouterLink
        class="tab-heading flex items-center justify-evenly h-full"
        to="/dashboard/analytics"
      >
        <i-flat-color-icons-bearish />
        Analytics
      </RouterLink>
    </div>
    <div class="tab-content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  @include container;
  padding: 1rem;
  margin-top: 50px;
  overflow-y: hidden;
}

.tab {
  &-header {
    height: 40px;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    overflow-y: auto;
  }

  &-heading {
    width: 150px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: var(--clr-primary);
      bottom: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    &.router-link-exact-active {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
