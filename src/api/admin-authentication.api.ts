import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase.config";

export async function loginAdmin(payload: { email: string; password: string }) {
  const res = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );
  return res.user;
}

export async function logoutAdmin() {
  await signOut(auth);
}
