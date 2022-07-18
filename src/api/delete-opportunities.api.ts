import { doc, deleteDoc } from "firebase/firestore";

import { opportunityCollection } from "@/firebase.config";

export async function deleteOpportunityById(id: string) {
  const opportunityRef = doc(opportunityCollection, id);
  await deleteDoc(opportunityRef);
}
