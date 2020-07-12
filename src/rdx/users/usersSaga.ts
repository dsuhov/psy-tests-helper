import { eventChannel } from "redux-saga";
// import { call, put, take } from "redux-saga/effects";
import { db } from "@/fbConfig";


function getSnapshotChannel() {
  return eventChannel((emitter) => {
    return db.collection('users').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      });

      emitter(posts);
    });
  });
}
