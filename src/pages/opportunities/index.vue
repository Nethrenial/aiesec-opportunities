<script lang="ts" setup>
import { storeToRefs } from "pinia";
import {
  useOpportunitiesStore,
  useFiltersStore,
  useLoadingStore,
} from "@/stores";
import type { OGXFunctionOrMultiple, QueryCountry, QueryPeriod } from "@/types";
import type { LocationQuery } from "vue-router";
import { COUNTRIES } from "@/utils";

//setting up stores
const filtersStore = useFiltersStore();
const opportunityStore = useOpportunitiesStore();
const loadingStore = useLoadingStore();

//methods
function getQueryObjectFromParams(query: LocationQuery) {
  const queryObject: {
    type: OGXFunctionOrMultiple;
    country: QueryCountry;
    begin: QueryPeriod | undefined;
    end: QueryPeriod | undefined;
  } = {
    type: (query.type as OGXFunctionOrMultiple) || "all",
    country: (query.country as QueryCountry) || "",
    begin: query.begin_year
      ? {
          year: Number(query.begin_year),
          month: Number(query.begin_month),
        }
      : undefined,
    end: query.end_year
      ? {
          year: Number(query.end_year),
          month: Number(query.end_month),
        }
      : undefined,
  };
  return queryObject;
}

// handle initial parsing of url to generate query object
const route = useRoute();
const query = route.query;
const initialQuery = getQueryObjectFromParams(query);
filtersStore.$state = initialQuery;
const router = useRouter();

//subscribe to filter state to generate new url with appropriate query params
filtersStore.$subscribe(async (mutation, state) => {
  const { begin, country, end, type } = state;
  let url = "/opportunities";
  if (type) {
    url += `?type=${type}`;
  }
  if (country) {
    url += `&country=${country}`;
  }
  if (begin) {
    url += `&begin_year=${begin.year}&begin_month=${begin.month}`;
  }

  if (end) {
    url += `&end_year=${end.year}&end_month=${end.month}`;
  }
  console.log("Constructed url = ", url);
  await router.push(url);
});

const { opportunities } = storeToRefs(opportunityStore);
const { filtering } = storeToRefs(loadingStore);
let isLoading = $ref(false);

//handle initial data fetching
onMounted(async () => {
  isLoading = true;
  await opportunityStore.getOpportunities(initialQuery);
  isLoading = false;
});
</script>

<template>
  <div class="opportunity-portal-container">
    <h2
      v-if="!isLoading && !filtering"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
    >
      Showing 20 out of 100 opportunities
    </h2>
    <div v-if="!isLoading && !filtering" class="job-cards">
      <OpportunityCard
        v-for="o in opportunities"
        :key="o.id"
        :opportunity="o"
      />
    </div>
    <h2
      v-if="isLoading || filtering"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
    >
      Loading 20 out of 100 opportunities
    </h2>
    <div v-if="isLoading" class="job-cards">
      <SkeletonOpportunityCard v-for="index in 20" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opportunity-portal-container {
  grid-column: 1 / -1;
  grid-row: 2/ 2;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--clr-foreground);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-background);
  }

  @include mq(md) {
    grid-column: 2 / -1;
  }
}

.job-cards {
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;

  @include mq(sm) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    padding: 1rem 2rem;
  }
  @include mq(md) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 1rem 3rem;
  }
  @include mq(lg) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    padding: 1rem 4rem;
  }
  @include mq(xxl) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    padding: 1rem 5rem;
  }

  &__item {
    aspect-ratio: 1;
    background-color: var(--clr-foreground);
    border-radius: 0.5rem;
    // box-shadow: 2px 2px 5px 2px rgba($color: #000, $alpha: 0.2);
  }
}

.show-count {
  padding-left: 1rem;
  padding-right: 1rem;

  @include mq(sm) {
    padding: 0rem 2rem;
  }
  @include mq(md) {
    padding: 0rem 3rem;
  }
  @include mq(lg) {
    padding: 0rem 4rem;
  }
  @include mq(xxl) {
    padding: 0rem 5rem;
  }
}
</style>
