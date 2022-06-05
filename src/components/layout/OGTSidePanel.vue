<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useOpportunitiesStore } from '~/stores/opportunities.store'
import { COUNTRIES } from '~/utils'

const queryData = reactive({
  country: '',
})

const opportunityStore = useOpportunitiesStore()
const { ogtQuery } = storeToRefs(opportunityStore)

watch(queryData, (val) => {
  if (COUNTRIES.includes(val.country as typeof COUNTRIES[number]))
    ogtQuery.value.country = val.country as typeof COUNTRIES[number]
})
</script>

<template>
  <aside class="default-side-panel shadow-light-900 dark:shadow-dark-900  shadow-md ">
    <CountryFilter
      id="country"
      v-model="queryData.country"
      :countries="COUNTRIES"
      label="Select country to filter"
      label-for="country"
    />
  </aside>
</template>

<style lang="scss" scoped>
.default-side-panel {
  margin: 1rem;
  border-radius: 1rem;
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
