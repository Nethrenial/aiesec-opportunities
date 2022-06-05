import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "@/firebase.config";

/**
 * Uploads the poster image to firebase and get the public URL
 * @param posterId id of the poster document
 * @param posterFile poster image file
 */
export async function uploadPoster(posterId: string, posterFile: File) {
  const posterRef = storageRef(
    storage,
    `posters/${posterId}/${posterFile.name}`
  );

  const snapshot = await uploadBytes(posterRef, posterFile);
  const url = await getDownloadURL(snapshot.ref);
  return url;
}
