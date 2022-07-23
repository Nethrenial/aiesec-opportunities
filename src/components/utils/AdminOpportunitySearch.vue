<script setup lang="ts">
import { useAdminStore } from "@/stores";
import { storeToRefs } from "pinia";

const adminStore = useAdminStore();
const route = useRoute();
const query = route.query;
const { filters } = storeToRefs(adminStore);
const { q } = toRefs(filters.value);
const focusSearch = () => {
  const search = document.querySelector(
    ".admin-search-input"
  ) as HTMLInputElement;
  search.focus();
};

const search = () => {
  if (searchText.value.trim() === "") {
    adminStore.filters.q = undefined;
    return;
  }
  adminStore.filters.q = searchText.value;
};

const searchText = ref((query.q as string) || "");
if (searchText.value) {
  search();
}

function cancelSearch() {
  searchText.value = "";
  adminStore.filters.q = undefined;
}
</script>

<template>
  <form class="admin-search" @submit.prevent="search">
    <input
      v-model="searchText"
      type="text"
      class="admin-search-input"
      placeholder="Search opportunities"
      @input="search"
      @focus="focusSearch"
    />
    <i-bi-search class="admin-search-icon" @click="focusSearch" v-if="!q" />
    <i-carbon-close
      class="admin-search-icon"
      @click="cancelSearch"
      ref="closeIcon"
      v-else
    />
  </form>
</template>

<style lang="scss" scoped>
.admin-search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 250px;
  flex: 1;
  position: relative;

  &-input {
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
    z-index: 1;
  }
}
</style>
