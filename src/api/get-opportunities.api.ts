import type { Query, QueryDocumentSnapshot } from 'firebase/firestore'
import { getDocs, limit, query, startAfter, where } from 'firebase/firestore'

import type { OpportunityResponse } from '../types/opportunities.types'
import type { Opportunity } from '~/types'
import { opportunityCollection } from '~/firebase.config'

let lastSnapshot: QueryDocumentSnapshot<OpportunityResponse> | undefined

export async function getOpportunities() {
  const opportunities: Opportunity[] = []
  let q: Query<OpportunityResponse> | undefined
  if (!lastSnapshot)
    q = query(opportunityCollection, limit(25))
  else
    q = query(opportunityCollection, startAfter(lastSnapshot), limit(25))

  const querySnapshot = await getDocs(q)
  lastSnapshot = querySnapshot.docs[querySnapshot.docs.length - 1]
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

export async function getOpportunityById(id: string) {
  const q = query(opportunityCollection, where('id', '==', id))
  const querySnapshot = await getDocs(q)
  if ((querySnapshot).docs.length === 0)
  { return undefined }

  else {
    const doc = querySnapshot.docs[0].data()
    return { ...doc, id } as Opportunity
  }
}
