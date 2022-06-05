import { doc, updateDoc } from "firebase/firestore";
import { uploadPoster } from "./poster-upload.api";
import { firestore } from "@/firebase.config";
import type { UpdateOpportunityDTO } from "@/types";

/**
 *  Create a new opportunity in the firestore database
 * @param opportunityData Data to create a new opportunity
 */
export async function updateOpportunity(opportunityData: UpdateOpportunityDTO) {
  try {
    const docRef = doc(firestore, "opportunities", opportunityData.id);
    let url: string;
    if (opportunityData.poster) {
      url = await uploadPoster(docRef.id, opportunityData.poster as File);
      await updateDoc(docRef, {
        ...opportunityData,
        poster: url,
      });
      return;
    }
    await updateDoc(docRef, {
      ...opportunityData,
    });
  } catch (err) {
    console.log(err);
  }
}
