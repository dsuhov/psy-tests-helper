import { auth } from "@/fbConfig";

export const createAdminWithEmailAndPassword = async (credentials: UserCredentials) => {
  const { email, password } = credentials;

  const createAdminResult = await auth.createUserWithEmailAndPassword(email, password);
  return createAdminResult;
}