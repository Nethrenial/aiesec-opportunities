/* eslint-disable no-console */
import { addDoc, collection } from 'firebase/firestore'
import { categoryOptions, functionOptions } from '../utils/constants.utils'
import {
  COUNTRIES,
  DESCRIPTION,
  JOB_TITLES,
  RANDOM_POSTER_LINK,
} from '~/utils/seed.utils'
import { firestore } from '~/firebase.config'
import type { Opportunity, Timeslot } from '~/types'

function getRandomTimeslotArray() {
  const count = Math.floor(Math.random() * 10)
  const arr: Timeslot[] = []
  for (let index = 0; index < count; index++) {
    const begin = new Date(Date.now() + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 100))
    const end = new Date(Date.now() + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 1000))
    const timeslot: Timeslot = {
      begin,
      end,
    }
    arr.push(timeslot)
  }
  return arr
}

export async function seedInFirebase(count: number) {
  const arr = new Array(count).fill(0)
  arr.forEach(async _ => {
    const ogxFunction
      = functionOptions[Math.floor(Math.random() * functionOptions.length)]
    const category
      = categoryOptions[Math.floor(Math.random() * categoryOptions.length)]
    const title = JOB_TITLES[Math.floor(Math.random() * JOB_TITLES.length)]
    const description = DESCRIPTION
    const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
    const salary = Math.floor(Math.random() * 10000)
    const opportunityLink = RANDOM_POSTER_LINK
    const timeslots = getRandomTimeslotArray()

    if (ogxFunction === 'OGT') {
      const docRef = await addDoc(collection(firestore, 'opportunities'), {
        country,
        createdAt: new Date(),
        description,
        function: ogxFunction,
        timeslots,
        title,
        poster: RANDOM_POSTER_LINK,
        currency: '$',
        salary,
        opportunityLink,
      } as Opportunity)
      console.log('created', docRef.id)
    } else if (ogxFunction === 'OGV') {
      const docRef = await addDoc(collection(firestore, 'opportunities'), {
        country,
        createdAt: new Date(),
        description,
        function: ogxFunction,
        timeslots,
        title,
        poster: RANDOM_POSTER_LINK,
        category,
        opportunityLink,
      } as Opportunity)
      console.log('created', docRef.id)
    }
  })
}
