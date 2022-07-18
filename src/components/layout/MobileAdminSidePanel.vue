<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/stores";
import { logoutAdmin } from "@/api";

const layoutStore = useLayoutStore();
const { adminSidebarOpen } = storeToRefs(layoutStore);
const router = useRouter();
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

const links = [
  { name: "Add New", path: "/dashboard/add-new" },
  { name: "Manage", path: "/dashboard/manage" },
  { name: "Analytics", path: "/dashboard/analytics" },
] as const;

async function logout() {
  await logoutAdmin();
  await router.replace("/login");
}

async function gotToLink(path: string) {
  await router.push(path);
  adminSidebarOpen.value = false;
}
</script>

<template>
  <teleport to="body">
    <transition name="sidebar">
      <aside
        class="admin-side-panel flex flex-col items-center"
        v-if="adminSidebarOpen"
        ref="sidePanel"
      >
        <div class="flex">
          <img
            src="../../assets/favicon-white.png"
            alt="AIESEC Logo"
            class="w-1/4"
          />
          <div class="p-4">
            <p class="text-white font-bold text-xl">Opportunity Portal</p>
            <p class="text-white text-lg font-light">AIESEC CC</p>
          </div>
        </div>

        <div class="dashboard-links">
          <RouterLink
            :to="link.path"
            class="dashboard-links__item"
            v-for="link in links"
            :key="link.name"
            @click.prevent="gotToLink(link.path)"
          >
            <i-akar-icons-plus
              class="w-[36px] h-[36px]"
              v-if="link.name === 'Add New'"
            />
            <i-system-uicons-create
              class="w-[36px] h-[36px]"
              v-if="link.name === 'Manage'"
            />
            <i-carbon-analytics
              class="w-[36px] h-[36px]"
              v-if="link.name === 'Analytics'"
            />

            <p>{{ link.name }}</p>
          </RouterLink>
        </div>
        <a
          class="dashboard-links__item cursor-pointer mt-auto mb-4"
          @click.prevent=""
          @click="logout"
        >
          <i-mdi-light-logout class="w-[36px] h-[36px]" />
          <p>Logout</p>
        </a>
      </aside>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.admin-side-panel {
  background-color: var(--clr-primary);
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  z-index: 9999px;

  position: absolute;
  top: 0;
  left: 0;
  right: 20%;
  bottom: 0;
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

.dashboard-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: auto;

  &__item {
    width: 100%;
    padding: 0.5rem 0.4rem 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    svg {
      color: #fff;
    }

    p {
      color: #fff;
      font-weight: 400;
    }
  }
}

.home-link {
  width: 100%;
  padding: 0.5rem 0.4rem 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0rem;

  svg {
    color: #fff;
  }

  p {
    opacity: 0;
    font-size: 0;
    transition: all 0.3s ease-in-out;
    color: #fff;
    font-weight: 400;
  }
}
</style>
