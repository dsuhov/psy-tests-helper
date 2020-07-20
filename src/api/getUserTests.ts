import { db } from "@/fbConfig";

export const getUserTests = async (uid: string) => {
  const response = await db.collection(`users/${uid}/tests`).get();
  return response.docs.map(doc => doc.data());
}