import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import type { CollectionReference, DocumentData } from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import type { OpportunityResponse } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyC5BLRv5JkTysrW2xKpgttJ1p4RX1fKoXY",

  authDomain: "aiesec-opportunities.firebaseapp.com",

  projectId: "aiesec-opportunities",

  storageBucket: "aiesec-opportunities.appspot.com",

  messagingSenderId: "178194258107",

  appId: "1:178194258107:web:25167f0d3d38bc9405719e",

  measurementId: "G-1QP461L60P",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const opportunityCollection =
  createCollection<OpportunityResponse>("opportunities");
