<script setup lang="ts">
import algoliasearch from "algoliasearch/lite";
import type { SearchHit } from "@/types";

const focusSearch = () => {
  const search = document.querySelector(".search-input") as HTMLInputElement;
  search.focus();
};

const searchText = ref("");
const loading = ref(false);
const modalOpen = ref(false);
const searchResults = ref<Array<SearchHit>>([]);

const searchClient = algoliasearch(
  "5U7Q81A6SV",
  "e87501d22c22cdcc4f36c58d2b56ed82",
  {}
);

const search = useDebounceFn(async () => {
  loading.value = true;
  modalOpen.value = true;
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
</script>

<template>
  <form class="search" @submit.prevent="search">
    <input
      v-model="searchText"
      type="text"
      class="search-input"
      placeholder="Search opportunities"
      @input="search"
    />
    <i-bi-search class="search-icon" @click="focusSearch" />
    <div class="search-results" :class="modalOpen ? 'visible' : ''">
      <RouterLink
        class="search-results__item"
        v-for="sr in searchResults"
        :key="sr.objectID"
        v-html="sr._highlightResult.title.value"
        :to="`/${sr.path}`"
      ></RouterLink>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 400px;
  position: relative;
  display: none;

  @include mq(md) {
    display: block;
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
    background-color: var(--clr-background);
    color: var(--clr-text-primary);
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &__item {
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: var(--clr-background-hover);
      }
    }
  }
}

em {
  font-style: normal;
}
</style>
