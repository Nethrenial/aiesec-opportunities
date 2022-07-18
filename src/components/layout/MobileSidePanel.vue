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

onClickOutside(sidePanel, () => {
  layoutStore.sidebarOpen = false;
});

const { direction } = useSwipe(sidePanel);

watch(direction, (newDirection) => {
  if (newDirection === "LEFT") {
    layoutStore.sidebarOpen = false;
  }
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
          {{ isDark ? "Switch to Light mode" : "Switch to Dark mode" }}
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
  z-index: 9999;

  position: absolute;
  top: 0;
  left: 0;
  right: 10%;
  bottom: 0;
  // min-height: -webkit-fill-available;
  // max-height: 100vh;
  overflow-y: scroll;
  // margin-bottom: -100px;

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
