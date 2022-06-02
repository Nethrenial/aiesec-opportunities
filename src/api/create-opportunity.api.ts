import type { AddPrefixToKeys } from 'firebase/firestore'
import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { uploadPoster } from './poster-upload.api'
import { firestore } from '~/firebase.config'
import type {
  CreateOpportunityDTO,
  OpportunityOptional,
} from '~/types'

type UpdateInterface<T> = T & AddPrefixToKeys<string, any>

/**
 *  Create a new opportunity in the firestore database
 * @param opportunityData Data to create a new opportunity
 */
export async function createOpportunity(opportunityData: CreateOpportunityDTO) {
  const {
    country,
    description,
    opportunityLink,
    poster,
    timeslots,
    title,
    category,
    currency,
    salary,
    function: ogxFunction,
  } = opportunityData
  try {
    if (ogxFunction === 'OGT') {
      const opportunityDocRef = await addDoc(
        collection(firestore, 'opportunities'),
        {
          country,
          createdAt: new Date(),
          description,
          function: ogxFunction,
          timeslots,
          title,
          poster: '',
          currency,
          salary,
          opportunityLink,
        } as OpportunityOptional,
      )
      const url = await uploadPoster(opportunityDocRef.id, poster)
      await updateDoc(opportunityDocRef, {
        poster: url,
      } as UpdateInterface<OpportunityOptional>)
    } else if (opportunityData.function === 'OGV') {
      const opportunityDocRef = await addDoc(
        collection(firestore, 'opportunities'),
        {
          country,
          createdAt: new Date(),
          description,
          function: ogxFunction,
          timeslots,
          title,
          poster: '',
          category,
          opportunityLink,
        } as OpportunityOptional,
      )
      const url = await uploadPoster(opportunityDocRef.id, poster)
      await updateDoc(opportunityDocRef, {
        poster: url,
      } as UpdateInterface<OpportunityOptional>)
    }
  } catch (err) {}
}
