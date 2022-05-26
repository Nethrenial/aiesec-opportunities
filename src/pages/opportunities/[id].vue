<script lang="ts" setup>
import { useOpportunitiesStore } from '../../stores/opportunities.store'
import type { Opportunity } from '~/types'
const props = defineProps<{
  id: string
}>()

const opportunity = ref<Opportunity>()

onMounted(async () => {
  const store = useOpportunitiesStore()
  opportunity.value = await store.getOpportunityById(props.id)
})
</script>

<template>
<h1 class="text-8xl">
    {{
        opportunity ? opportunity.description : "Not loaded"
    }}
</h1>
</template>
