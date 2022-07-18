<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdminStore } from "@/stores";
import type { OGXFunctionOrMultiple, QueryCountry, QueryPeriod } from "@/types";
import type { LocationQuery } from "vue-router";

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
</script>

<template>
  <h1 class="text-xl my-4" ref="manage">Manage Opportunities</h1>
  <div class="filters"></div>
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
</template>

<style lang="scss" scoped>
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
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
