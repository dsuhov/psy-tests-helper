import { auth } from "@/fbConfig";

export const loginAdminWithEmailAndPassword = async (credentials: UserCredentials) => {
  const { email, password } = credentials;

  const signInResult = await auth.signInWithEmailAndPassword(email, password);
  return signInResult;
}