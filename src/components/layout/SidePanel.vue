<script lang="ts" setup>
import DatePicker from "@vuepic/vue-datepicker";
import { useLoadingStore, useFiltersStore } from "@/stores";
import type { QueryCountry } from "@/types";
import { COUNTRIES } from "@/utils";
import { isDark } from "@/composables";
import { storeToRefs } from "pinia";

const country = $ref<QueryCountry>("");
const beginDate = ref<{ year: number; month: number }>();
const endDate = ref<{ year: number; month: number }>();

const loadingStore = useLoadingStore();
const { filtering } = storeToRefs(loadingStore);

const filtersStore = useFiltersStore();

async function filter() {
  filtersStore.$state = {
    type: filtersStore.$state.type,
    country: country,
    begin: beginDate.value
      ? {
          year: beginDate.value.year,
          month: beginDate.value.month,
        }
      : undefined,
    end: endDate.value
      ? {
          year: endDate.value.year,
          month: endDate.value.month,
        }
      : undefined,
  };
}
</script>

<template>
  <aside
    class="default-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md"
  >
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
      :year-range="[new Date().getFullYear(), new Date().getFullYear() + 15]"
      alt-position
      :dark="isDark"
    />

    <BaseActionButton
      class="w-full mt-auto"
      :loading="filtering"
      @click="filter"
    >
      {{ filtering ? "Filtering..." : "Filter" }}
    </BaseActionButton>
  </aside>
</template>

<style lang="scss" scoped>
.default-side-panel {
  margin: 1rem;
  border-radius: 1rem;
  display: none;
  background-color: var(--clr-foreground);
  padding: 1rem;
  @include mq(md) {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
</style>
