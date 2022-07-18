<script lang="ts" setup>
import { logoutAdmin } from "@/api";

const router = useRouter();

const expanded = ref(false);

const links = [
  { name: "Add New", path: "/dashboard/add-new" },
  { name: "Manage", path: "/dashboard/manage" },
  { name: "Analytics", path: "/dashboard/analytics" },
] as const;

async function logout() {
  await logoutAdmin();
  await router.replace("/login");
}
</script>

<template>
  <transition name="sidebar">
    <aside
      class="admin-side-panel flex flex-col items-center"
      :class="[expanded ? 'expanded' : '']"
    >
      <RouterLink to="/dashboard" class="home-link">
        <img src="../../assets/favicon-white.png" class="w-[36px] h-[36px]" />
        <p>Home</p>
      </RouterLink>
      <div class="dashboard-links">
        <RouterLink
          :to="link.path"
          class="dashboard-links__item"
          v-for="link in links"
          :key="link.name"
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
</template>

<style lang="scss" scoped>
.admin-side-panel {
  background-color: var(--clr-primary);
  display: none;
  width: 60px;
  height: 100%;
  transition: all 0.3s ease-in-out;

  @include mq(md) {
    display: block;
    grid-column: 1 / 2;
  }

  &:hover {
    width: 180px;
  }

  &:hover .dashboard-links__item p {
    font-size: 1rem;
    opacity: 1;
  }

  &:hover .home-link p {
    font-size: 1rem;
    opacity: 1;
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

.dashboard-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  &__item {
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

    &:hover {
      background-color: #fff;

      svg {
        color: var(--clr-primary);
      }

      p {
        color: var(--clr-primary);
      }
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
