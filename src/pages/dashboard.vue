<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAdminStore, useLayoutStore } from "@/stores";

const { admin } = storeToRefs(useAdminStore());
const layoutStore = useLayoutStore();

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
    <i-carbon-menu
      class="menu-toggle w-[32px] h-[32px]"
      @click="layoutStore.adminSidebarOpen = true"
    />
    <dark-mode-toggle class="toggle" :inverted="true" />
    <div class="tab-content relative">
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
  @include padding-container;
  grid-column: 1 / -1;
  overflow-y: auto;
  min-height: 100vh;
  height: 100vh;
  position: relative;

  @include mq(md) {
    grid-column: 2 / -1;
  }
}

.toggle {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.menu-toggle {
  position: absolute;
  top: 1rem;
  left: 1rem;

  @include mq(md) {
    display: none;
  }
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
