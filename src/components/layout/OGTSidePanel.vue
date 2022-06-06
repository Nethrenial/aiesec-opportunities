<script lang="ts" setup>
import DatePicker from "@vuepic/vue-datepicker";
import { useOpportunitiesStore, useLoadingStore } from "@/stores";
import { COUNTRIES } from "@/utils";

const country = $ref("");
const beginDate = ref<{ year: number; month: number }>();
const endDate = ref<{ year: number; month: number }>();

const opportunityStore = useOpportunitiesStore();
const loadingStore = useLoadingStore();

async function filter() {
  loadingStore.$state.ogtFiltering = true;
  if (COUNTRIES.includes(country as typeof COUNTRIES[number])) {
    if (beginDate.value && endDate.value) {
      await opportunityStore.getOpportunities("OGT", {
        country: country as typeof COUNTRIES[number],
        period: {
          begin: new Date(beginDate.value.year, beginDate.value.month),
          end: new Date(endDate.value.year, endDate.value.month),
        },
      });
    } else {
      await opportunityStore.getOpportunities("OGT", {
        country: country as typeof COUNTRIES[number],
      });
    }
  } else if (country === "") {
    if (beginDate.value && endDate.value) {
      await opportunityStore.getOpportunities("OGT", {
        period: {
          begin: new Date(beginDate.value.year, beginDate.value.month),
          end: new Date(endDate.value.year, endDate.value.month),
        },
      });
    } else {
      await opportunityStore.getOpportunities("OGT");
    }
  }
  loadingStore.$state.ogtFiltering = false;
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
    <DatePicker v-model="beginDate" month-picker mode-height="240" auto-apply />
    <label
      class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
    >
      Select end month
    </label>
    <DatePicker v-model="endDate" month-picker mode-height="240" auto-apply />
    <button @click="filter">Filter</button>
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
    display: block;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
</style>
