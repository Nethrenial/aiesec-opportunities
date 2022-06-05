<script setup lang="ts">
const focusSearch = () => {
  const search = document.querySelector(".search-input") as HTMLInputElement;
  search.focus();
};

const searchText = ref("");
</script>

<template>
  <form class="search">
    <input
      v-model="searchText"
      type="text"
      class="search-input"
      placeholder="Search opportunities"
    />
    <i-bi-search class="search-icon" @click="focusSearch" />
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

  svg.search-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    z-index: 2;
  }
}
</style>
