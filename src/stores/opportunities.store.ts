import { acceptHMRUpdate, defineStore } from 'pinia'
import { getOpportunities, getOpportunityById } from '~/api'
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
      const result = await getOpportunities()
      this.opportunities = [...this.opportunities, ...result]
    },

    async getOpportunityById(id: string) {
      if (this.opportunities.length === 0)
        await this.getOpportunities()

      return this.opportunities.find(o => o.id === id)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useOpportunitiesStore, import.meta.hot),
  )
}
