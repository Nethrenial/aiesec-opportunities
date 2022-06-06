<script lang="ts" setup>
import DatePicker from "@vuepic/vue-datepicker";
import { useOpportunitiesStore, useLoadingStore } from "@/stores";
import { COUNTRIES } from "@/utils";
import { isDark } from "@/composables";
import { storeToRefs } from "pinia";

const country = $ref("");
const beginDate = ref<{ year: number; month: number }>();
const endDate = ref<{ year: number; month: number }>();

const opportunityStore = useOpportunitiesStore();
const loadingStore = useLoadingStore();
const { ogvFiltering } = storeToRefs(loadingStore);

async function filter() {
  loadingStore.$state.ogvFiltering = true;
  if (COUNTRIES.includes(country as typeof COUNTRIES[number])) {
    if (beginDate.value && endDate.value) {
      await opportunityStore.getOpportunities("OGV", {
        country: country as typeof COUNTRIES[number],
        period: {
          begin: new Date(beginDate.value.year, beginDate.value.month),
          end: new Date(endDate.value.year, endDate.value.month),
        },
      });
    } else {
      await opportunityStore.getOpportunities("OGV", {
        country: country as typeof COUNTRIES[number],
      });
    }
  } else if (country === "") {
    if (beginDate.value && endDate.value) {
      await opportunityStore.getOpportunities("OGV", {
        period: {
          begin: new Date(beginDate.value.year, beginDate.value.month),
          end: new Date(endDate.value.year, endDate.value.month),
        },
      });
    } else {
      await opportunityStore.getOpportunities("OGV");
    }
  }
  loadingStore.$state.ogvFiltering = false;
}
</script>

<template>
  <aside
    class="default-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md"
  >
    <CountryFilter
      id="country"
      v-model="country"
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
      v-model="beginDate"
      month-picker
      mode-height="240"
      auto-apply
      placeholder="Select month"
      :year-range="[new Date().getFullYear() - 1, new Date().getFullYear() + 5]"
      alt-position
      :dark="isDark"
    />
    <label
      class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
    >
      Select end month
    </label>
    <DatePicker
      v-model="endDate"
      month-picker
      mode-height="240"
      auto-apply
      placeholder="Select month"
      :year-range="[new Date().getFullYear(), new Date().getFullYear() + 3]"
      alt-position
      :dark="isDark"
    />

    <BaseActionButton
      class="w-full mt-auto"
      :loading="ogvFiltering"
      @click="filter"
    >
      {{ ogvFiltering ? "Filtering..." : "Filter" }}
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
