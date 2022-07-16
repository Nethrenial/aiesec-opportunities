<script lang="ts" setup>
import DatePicker from "@vuepic/vue-datepicker";
import {
  useLoadingStore,
  useFiltersStore,
  useOpportunitiesStore,
  useLayoutStore,
} from "@/stores";
import { COUNTRIES } from "@/utils";
import { isDark } from "@/composables";
import { storeToRefs } from "pinia";

//setting up stores
const loadingStore = useLoadingStore();
const filtersStore = useFiltersStore();
const opportunitiesStore = useOpportunitiesStore();
const layoutStore = useLayoutStore();

const { filtering } = storeToRefs(loadingStore);
const { sidebarOpen } = storeToRefs(layoutStore);

async function filter() {
  await opportunitiesStore.getOpportunities(filtersStore.$state);
}

async function reset() {
  filtersStore.$state.country = "";
  filtersStore.$state.begin = undefined;
  filtersStore.$state.end = undefined;
  filtersStore.$state.q = undefined;
  await filter();
}

const sidePanel = ref<HTMLDivElement>();

onClickOutside(sidePanel, (e) => {
  const event = e as unknown as PointerEvent;
  if ((event.target as HTMLElement).classList.contains("filter-toggle")) {
    console.log("true");
    return;
  }

  layoutStore.sidebarOpen = false;
});
</script>

<template>
  <teleport to="body">
    <transition name="sidebar">
      <aside
        class="mobile-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md"
        v-if="sidebarOpen"
        ref="sidePanel"
      >
        <label
          id="sidebar-dark-toggle-label"
          for="sidebar-dark-toggle"
          class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
        >
          {{ isDark ? "Switch to Dark mode" : "Switch to Light mode" }}
        </label>
        <DarkModeToggle id="sidebar-dark-toggle" name="sidebar-dark-toggle" />
        <CountryFilter
          id="country"
          v-model="filtersStore.country"
          :countries="COUNTRIES"
          label="Select country to filter"
          label-for="country"
        />
        <label
          class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
        >
          Select start month
        </label>
        <DatePicker
          v-model="filtersStore.begin"
          month-picker
          mode-height="240"
          auto-apply
          placeholder="Select month"
          :year-range="[
            new Date().getFullYear() - 1,
            new Date().getFullYear() + 15,
          ]"
          alt-position
          :dark="isDark"
        />
        <label
          class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
        >
          Select end month
        </label>
        <DatePicker
          v-model="filtersStore.end"
          month-picker
          mode-height="240"
          auto-apply
          placeholder="Select month"
          :year-range="[
            new Date().getFullYear(),
            new Date().getFullYear() + 15,
          ]"
          alt-position
          :dark="isDark"
        />
        <div class="mt-auto">
          <BaseActionButton class="w-full mt-auto" @click="reset" outline>
            Reset
          </BaseActionButton>

          <BaseActionButton
            class="w-full mt-2"
            :loading="filtering"
            @click="filter"
          >
            {{ filtering ? "Filtering..." : "Filter" }}
          </BaseActionButton>
        </div>
      </aside>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.mobile-side-panel {
  background-color: var(--clr-foreground);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;

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
