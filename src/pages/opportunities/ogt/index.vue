<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useOpportunitiesStore } from "@/stores/opportunities.store";

const opportunityStore = useOpportunitiesStore();
const { ogtOpportunities } = storeToRefs(opportunityStore);

let isLoading = $ref(false);

onMounted(async () => {
  if (ogtOpportunities.value.length === 0) {
    isLoading = true;
    await opportunityStore.getOGTOpportunities();
    isLoading = false;
  }
});

useHead({
  title: "Internship opportunities | AIESEC",
  meta: [
    {
      name: "description",
      content: "Currently available internship opportunities in AIESEC CC",
    },
  ],
});
</script>

<template>
  <div class="opportunity-portal-container">
    <h2
      v-if="!isLoading"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
    >
      Showing Internship opportunities
    </h2>
    <div v-if="!isLoading" class="job-cards">
      <OpportunityCard
        v-for="o in ogtOpportunities"
        :key="o.id"
        :opportunity="o"
      />
    </div>
    <h2
      v-if="isLoading"
      class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]"
    >
      Loading Internship opportunities
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
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 1rem 2rem;
  }
  @include mq(md) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 3rem;
  }
  @include mq(lg) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1rem 4rem;
  }
  @include mq(xxl) {
    grid-template-columns: repeat(4, 1fr);
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

<route lang="yaml">
meta:
  layout: ogt
</route>
