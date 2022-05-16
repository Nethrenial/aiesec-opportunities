import { acceptHMRUpdate, defineStore } from 'pinia'
import { getOpportunities } from '~/api'
import type { Opportunity } from '~/types'

interface OpportunitiesState {
  opportunities: Opportunity[]
}

export const useOpportunitiesStore = defineStore('opportunities', {
  state: (): OpportunitiesState => {
    return {
      opportunities: [],
    }
  },

  actions: {
    async getOpportunities() {
      this.opportunities = await getOpportunities()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useOpportunitiesStore, import.meta.hot))
