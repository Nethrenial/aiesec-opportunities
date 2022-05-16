import { getDocs, query, where } from 'firebase/firestore'
import type { Opportunity } from '~/types'
import { opportunityCollection } from '~/firebase.config'

export async function getOpportunities() {
  const q = query(opportunityCollection)
  const querySnapshot = await getDocs(q)
  const opportunities: Opportunity[] = []
  querySnapshot.docs.forEach(doc => {
    const id = doc.id
    const data = doc.data()
    opportunities.push({
      ...data,
      id,
    })
  })
  return opportunities
}
