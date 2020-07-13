import firebase from "firebase/app";
import { auth } from "@/fbConfig";

export const createAdminWithEmailAndPassword = async (credentials: UserCredentials) => {
  const { email, password } = credentials;
  const createAdmin = firebase.functions().httpsCallable("psyCreateAdmin");
  await createAdmin({email, password});
  const signInResult = await auth.signInWithEmailAndPassword(email, password);
  return signInResult;
}