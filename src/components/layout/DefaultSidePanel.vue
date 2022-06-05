<script lang="ts" setup>
import { COUNTRIES } from "@/utils";

const selectedCountry = ref(COUNTRIES[0]);
</script>

<template>
  <aside class="default-side-panel">
    <h3 class="mb-4 text-center text-[var(--clr-text-secondary)]">
      Filter opportunities
    </h3>
    <BaseSearchAndSelectInput
      id="country"
      v-model="selectedCountry"
      :options="COUNTRIES"
      label="Select country to filter"
      label-for="country"
    />
  </aside>
</template>

<style lang="scss" scoped>
.default-side-panel {
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
