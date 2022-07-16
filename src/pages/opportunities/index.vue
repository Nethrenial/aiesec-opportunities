<script lang="ts" setup>
import { storeToRefs } from "pinia";
import {
  useOpportunitiesStore,
  useFiltersStore,
  useLoadingStore,
} from "@/stores";
import type { OGXFunctionOrMultiple, QueryCountry, QueryPeriod } from "@/types";
import type { LocationQuery } from "vue-router";

//setting up stores
const filtersStore = useFiltersStore();
const opportunityStore = useOpportunitiesStore();
const loadingStore = useLoadingStore();
const { opportunities } = storeToRefs(opportunityStore);
const { filtering } = storeToRefs(loadingStore);

// #region Query Parameter Handling
function getQueryObjectFromParams(query: LocationQuery) {
  const queryObject: {
    type: OGXFunctionOrMultiple;
    country: QueryCountry;
    begin: QueryPeriod | undefined;
    end: QueryPeriod | undefined;
    q: string | undefined;
  } = {
    type: query.type ? (query.type as OGXFunctionOrMultiple) : "all",
    country: query.country ? (query.country as QueryCountry) : "",
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
    q: query.q as string | undefined,
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
  const { begin, country, end, type, q } = state;
  let url = "/opportunities";
  if (type) {
    url += `?type=${type.toLowerCase()}`;
  }
  if (country) {
    url += `&country=${country.toLowerCase()}`;
  }
  if (begin) {
    url += `&begin_year=${begin.year}&begin_month=${begin.month}`;
  }

  if (end) {
    url += `&end_year=${end.year}&end_month=${end.month}`;
  }

  if (q) {
    url += `&q=${q}`;
  }
  await router.push(url);
});

// #endregion

// #region Common variables
let isLoading = $ref(false);
const showCount = ref<HTMLDivElement>();

// #endregion

// #region pagination
let page = $ref(1);
function scrollToTop() {
  showCount.value?.scrollIntoView({ behavior: "smooth" });
}

const paginatedOpportunities = computed(() => {
  return opportunities.value.slice((page - 1) * 12, page * 12);
});

const pageCount = computed(() => {
  return Math.ceil(opportunities.value.length / 12);
});

const showingStart = computed(() => {
  return (page - 1) * 12 + 1;
});

const showingEnd = computed(() => {
  return Math.min(page * 12, opportunities.value.length);
});

const isPreviousPage = computed(() => {
  return page > 1;
});
const isNextPage = computed(() => {
  return page < pageCount.value;
});

function prev() {
  if (page > 1) {
    page--;
    scrollToTop();
  }
}

function next() {
  if (page < pageCount.value) {
    page++;
    scrollToTop();
  }
}

function goTo(pageNumber: number) {
  if (pageNumber > 0 && pageNumber <= pageCount.value) {
    page = pageNumber;
    scrollToTop();
  }
}

// #endregion

// #region SEO
useHead({
  title:
    initialQuery.type === "all"
      ? "Opportunities - Colombo Central | AIESEC"
      : (initialQuery.type === "OGT"
          ? "Paid opportunities"
          : "Volunteering opportunities") + " - Colombo Central | AIESEC",
  meta: [
    {
      name: "description",
      content:
        initialQuery.type === "all"
          ? "Opportunities"
          : initialQuery.type === "OGT"
          ? "Paid opportunities"
          : "Volunteering opportunities",
    },
    {
      name: "keywords",
      content: "opportunities, open government, data, government, jobs",
    },
  ],
});
// #endregion

// #region handle initial data fetching
onMounted(async () => {
  isLoading = true;
  await opportunityStore.getOpportunities(initialQuery);
  isLoading = false;

  //creating head
});
// #endregion

const resultsCountIndicator = computed(() => {
  return `showing ${showingStart.value} - ${showingEnd.value} of
      ${opportunities.value.length}`;
});
</script>

<template>
  <div class="opportunity-portal-container">
    <h2
      v-if="!isLoading && !filtering && opportunities.length > 0"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
      ref="showCount"
    >
      {{ resultsCountIndicator }}
    </h2>
    <div
      v-if="!isLoading && !filtering && opportunities.length > 0"
      class="job-cards"
    >
      <OpportunityCard
        v-for="o in paginatedOpportunities"
        :key="o.id"
        :opportunity="o"
      />
    </div>
    <div
      v-if="!isLoading && !filtering && opportunities.length > 0"
      class="pagination-container"
    >
      <button @click="prev" :class="!isPreviousPage ? 'disabled' : ''">
        <i-ic-round-navigate-before />
      </button>
      <button
        v-for="i in pageCount"
        :key="i"
        @click="goTo(i)"
        :class="page === i ? 'active' : ''"
      >
        {{ i }}
      </button>
      <button @click="next" :class="!isNextPage ? 'disabled' : ''">
        <i-ic-round-navigate-next />
      </button>
    </div>
    <div
      v-if="!isLoading && !filtering && opportunities.length == 0"
      class="h-full flex flex-col items-center justify-center"
    >
      <p class="text-6xl text-[var(--clr-text-secondary)] text-center">
        No results found
      </p>
      <small class="mt-4 text-center text-[var(--clr-text-secondary)]">
        Try changing the country or time period, or maybe check back later.
      </small>
    </div>
    <h2
      v-if="isLoading || filtering"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
    >
      Searching for opportunities...
    </h2>
    <div v-if="isLoading" class="job-cards">
      <SkeletonOpportunityCard v-for="index in 12" :key="index" />
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

.pagination-container {
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    width: 30px;
    border: 2px solid var(--clr-primary);
    background-color: transparent;
    color: var(--clr-primary);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--clr-primary);
      color: #fff;
    }

    &.active {
      background-color: var(--clr-primary);
      color: #fff;
    }

    &.disabled {
      border: none;
      // width: 34px;
      background-color: var(--clr-text-secondary);
      color: #fff;
      cursor: not-allowed;
    }
  }
}
</style>
