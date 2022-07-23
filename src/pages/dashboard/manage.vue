<script setup lang="ts">
import DatePicker from "@vuepic/vue-datepicker";
import { storeToRefs } from "pinia";
import { useAdminStore } from "@/stores";
import { COUNTRIES } from "@/utils";
import type { OGXFunctionOrMultiple, QueryCountry, QueryPeriod } from "@/types";
import type { LocationQuery } from "vue-router";
import { isDark } from "@/composables";

//setting up stores
const adminStore = useAdminStore();
const { opportunities, filtering } = storeToRefs(adminStore);

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
adminStore.$state.filters = initialQuery;
const router = useRouter();

//subscribe to filter state to generate new url with appropriate query params
adminStore.$subscribe(async (mutation, state) => {
  const { begin, country, end, type, q } = state.filters;
  let url = "/dashboard/manage";
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
  await adminStore.getOpportunities(adminStore.$state.filters);
});

// #endregion

// #region Common variables
let isLoading = $ref(false);
const manage = ref<HTMLDivElement>();

// #endregion

// #region pagination
let page = $ref(1);
function scrollToTop() {
  if (!manage.value) return;
  manage.value.scrollIntoView({ behavior: "smooth" });
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
  await adminStore.getOpportunities(initialQuery);
  isLoading = false;

  //creating head
});
// #endregion

const resultsCountIndicator = computed(() => {
  return `showing ${showingStart.value} - ${showingEnd.value} of
      ${opportunities.value.length}`;
});

const areFiltersShown = ref(false);
function toggleFilters() {
  console.log("Called");
  areFiltersShown.value = !areFiltersShown.value;
}

async function filter() {
  await adminStore.getOpportunities(adminStore.$state.filters);
}

async function reset() {
  adminStore.$state.filters.country = "";
  adminStore.$state.filters.begin = undefined;
  adminStore.$state.filters.end = undefined;
  adminStore.$state.filters.q = undefined;
  await filter();
}

const filters = ref<HTMLDivElement>();
const filterToggler = ref<HTMLButtonElement>();

onClickOutside(filters, (e) => {
  if (filterToggler.value !== (e as unknown as PointerEvent).target) {
    areFiltersShown.value = false;
  }
});
</script>

<template>
  <h1 class="text-xl my-4" ref="manage">Manage Opportunities</h1>
  <button
    class="toggle-filters flex items-center justify-between w-full p-2 bg-[var(--clr-foreground)]"
    :class="areFiltersShown ? 'active' : ''"
    @click="toggleFilters"
    ref="filterToggler"
  >
    Show filters
    <i-ic-outline-navigate-next
      :class="areFiltersShown ? 'active' : ''"
      class="pointer-events-none"
    />
  </button>
  <transition name="filters">
    <div
      class="filters bg-[var(--clr-foreground)] rounded-4 p-2 gap-2"
      v-if="areFiltersShown"
      ref="filters"
    >
      <AdminOpportunitySearch />
      <CountryFilter
        id="country"
        v-model="adminStore.filters.country"
        :countries="COUNTRIES"
        class="manage-country-filter"
        :high="true"
      />

      <DatePicker
        v-model="adminStore.filters.begin"
        month-picker
        mode-height="240"
        auto-apply
        placeholder="Starts from"
        :year-range="[
          new Date().getFullYear() - 1,
          new Date().getFullYear() + 15,
        ]"
        alt-position
        :dark="isDark"
      />

      <DatePicker
        v-model="adminStore.filters.end"
        month-picker
        mode-height="240"
        auto-apply
        placeholder="Ends in"
        :year-range="[new Date().getFullYear(), new Date().getFullYear() + 15]"
        alt-position
        :dark="isDark"
      />
      <BaseActionButton :outline="true" @click="reset"
        ><i-carbon-reset
      /></BaseActionButton>
      <BaseActionButton @click="filter"
        ><i-carbon-search-locate
      /></BaseActionButton>
    </div>
  </transition>

  <h2
    v-if="!isLoading && !filtering && opportunities.length > 0"
    class="show-count text-sm font-bold text-[var(--clr-text-secondary)] my-4"
  >
    {{ resultsCountIndicator }}
  </h2>
  <div class="opportunities" v-if="!filtering && opportunities.length > 0">
    <OpportunityItem
      v-for="o in paginatedOpportunities"
      :key="o.id"
      :opportunity="o"
    />
  </div>
  <div
    v-if="!filtering && opportunities.length == 0"
    class="h-full flex flex-col items-center justify-center mt-[200px]"
  >
    <p class="text-6xl text-[var(--clr-text-secondary)] text-center">
      No results found
    </p>
    <small class="mt-4 text-center text-[var(--clr-text-secondary)]">
      Try changing the country or time period, or maybe check back later.
    </small>
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
  <div v-if="isLoading" class="opportunities">
    <SkeletonOpportunityItem v-for="index in 12" :key="index" />
  </div>
</template>

<style lang="scss" scoped>
html {
  .filters {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
}
html.dark {
  .filters {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  }
}

.opportunities {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pagination-container {
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transform: translateY(1rem);

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
      background-color: var(--clr-text-secondary);
      color: #fff;
      cursor: not-allowed;
    }
  }
}

.filters {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 6rem;
  background-color: var(--clr-foreground);
  z-index: 1;

  @include mq(lg) {
    flex-direction: row;
    align-items: center;
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(-20px) scale(0.99);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }

  &-enter-to,
  &-leave-from {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
}

.toggle-filters {
  border-radius: 1rem;

  svg {
    transition: all 0.3s ease-in-out;
    &.active {
      transform: rotate(90deg);
    }
  }
}

.manage-country-filter {
  max-width: 100%;

  @include mq(lg) {
    max-width: 20%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
