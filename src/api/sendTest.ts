import { db } from "@/fbConfig";

export const sendTest = async ({ dataToSend, uid }: ISendTestData) => {
  return await db.collection(`users/${uid}/tests`).add(dataToSend);
}