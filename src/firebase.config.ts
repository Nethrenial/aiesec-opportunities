import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import type { CollectionReference, DocumentData } from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import type { OpportunityResponse } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyBq9KLVB5okQVZkMlQ8ONEV6iw3CaUT-2k",
  authDomain: "ogx-opportunity-portal.firebaseapp.com",
  projectId: "ogx-opportunity-portal",
  storageBucket: "ogx-opportunity-portal.appspot.com",
  messagingSenderId: "330246889461",
  appId: "1:330246889461:web:9de2b47483a8b226be0abc",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});
export const firestore = getFirestore(app);
export const storage = getStorage(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const opportunityCollection =
  createCollection<OpportunityResponse>("opportunities");
