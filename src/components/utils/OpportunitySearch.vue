<script setup lang="ts">
import algoliasearch from "algoliasearch/lite";
import { useFiltersStore } from "@/stores";
import type { SearchHit } from "@/types";

const filtersStore = useFiltersStore();
const route = useRoute();
const query = route.query;

const focusSearch = () => {
  const search = document.querySelector(".search-input") as HTMLInputElement;
  modalOpen.value = true;
  search.focus();
};

const search = useDebounceFn(async () => {
  loading.value = true;
  modalOpen.value = true;
  if (searchText.value.trim() === "") {
    loading.value = false;
    searchResults.value = [];
    return;
  }
  filtersStore.q = searchText.value;

  const response = await searchClient.search<SearchHit>(
    [
      {
        indexName: "opportunity_details",
        query: searchText.value,
      },
    ],
    {}
  );
  searchResults.value = response["results"][0]["hits"];
  loading.value = false;
}, 500);

const searchText = ref((query.q as string) || "");
if (searchText.value) {
  search();
}
const loading = ref(false);
const modalOpen = ref(false);
const searchResults = ref<Array<SearchHit>>([]);

const searchClient = algoliasearch(
  "5U7Q81A6SV",
  "e87501d22c22cdcc4f36c58d2b56ed82",
  {}
);

function cancelSearch() {
  searchText.value = "";
  searchResults.value = [];
  modalOpen.value = false;
}
</script>

<template>
  <form class="search" @submit.prevent="search">
    <input
      v-model="searchText"
      type="text"
      class="search-input"
      placeholder="Search opportunities"
      @input="search"
      @focus="focusSearch"
    />
    <i-bi-search class="search-icon" @click="focusSearch" v-if="!modalOpen" />
    <i-carbon-close class="search-icon" @click="cancelSearch" v-else />
    <transition name="search-results">
      <div
        class="search-results flex items-start justify-center p-2"
        v-if="modalOpen"
      >
        <div v-if="loading" class="self-center">
          <i-eos-icons-loading class="w-[48px] h-[48px]" />
        </div>
        <div class="w-100" v-else-if="!loading && searchResults.length > 0">
          <RouterLink
            class="search-results__item block p-2"
            v-for="sr in searchResults"
            :key="sr.objectID"
            :to="`/${sr.path}`"
          >
            <h3 v-html="sr._highlightResult.title.value"></h3>
            <small class="text-[var(--clr-text-secondary)] text-xs"
              >{{ sr.function === "OGT" ? "Work" : "Volunteer" }} in
              {{ sr.country }}</small
            >
          </RouterLink>
        </div>
        <div
          class="self-center h-full w-full flex items-center justify-center"
          v-else-if="modalOpen && searchText.trim() === ''"
        >
          <p class="text-center">Type something to search ...</p>
        </div>
        <div
          class="self-center h-full w-full flex items-center justify-center"
          v-else
        >
          <p class="text-center">No results found</p>
        </div>
      </div>
    </transition>
  </form>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  // min-width: 200px;
  flex: 1;
  max-width: 576px;
  position: relative;

  @include mq(md) {
    max-width: 400px;
  }

  &-input {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border: none;
    border-radius: 100px;
    background-color: var(--clr-background);
    width: 100%;
    color: var(--clr-text-primary);
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.2s;
    padding: 0.5rem 1rem;
    padding-right: 2.5rem;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1) inset;

    &:focus {
      // width: 300px;
      outline: none;
    }

    &::placeholder {
      color: var(--clr-text-primary);
    }
  }

  &-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    z-index: 2;
  }

  &-results {
    min-height: 200px;
    max-height: 200px;
    background-color: var(--clr-background);
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    overflow-y: auto;
    color: var(--clr-text-primary);
    position: absolute;
    top: 2.8rem;
    left: 0;
    right: 0;
    border-radius: 0.5rem;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--clr-foreground);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--clr-primary);
    }

    &__item {
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: var(--clr-primary);
        color: #fff;
      }
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
}
</style>
