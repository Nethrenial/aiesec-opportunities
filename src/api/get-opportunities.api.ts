import { doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import type { Opportunity } from '~/types'
import { opportunityCollection } from '~/firebase.config'

export async function getOpportunityById(id: string) {
  const opportunityRef = doc(opportunityCollection, id)
  const opportunity = await getDoc(opportunityRef)
  if (opportunity.exists()) return { ...opportunity.data(), id: opportunity.id }
  else return undefined
}

export async function getAllOpportunities() {
  const opportunities: Opportunity[] = []
  const q = query(opportunityCollection)
  const querySnapshot = await getDocs(q)
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

export async function getAllOGTOpportunities() {
  const opportunities: Opportunity[] = []
  const q = query(opportunityCollection, where('function', '==', 'OGT'))

  const querySnapshot = await getDocs(q)
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

export async function getAllOGVOpportunities() {
  const opportunities: Opportunity[] = []
  const q = query(opportunityCollection, where('function', '==', 'OGV'))
  const querySnapshot = await getDocs(q)
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
