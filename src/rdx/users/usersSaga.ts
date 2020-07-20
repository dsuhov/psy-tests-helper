import { eventChannel } from "redux-saga";
// import { call, put, take } from "redux-saga/effects";
import { db, auth } from "@/fbConfig";
import { take, call, put, cancel, cancelled, fork } from "redux-saga/effects";
import {
  subscribeUC,
  unsubscrUC,
  recieveUCData
} from "./usersActions";

function getSnapshotChannell() {
  return eventChannel((emitter) => {
    return db.collection('users').where("createdBy", "==", auth.currentUser?.uid).onSnapshot((snapshot) => {
      const posts = snapshot.docs.map<IUsersData>(doc => {
        return {
          ...doc.data(),
          id: doc.id
        } as IUsersData
      });

      emitter(posts);
    });
  });
}

function* uCSync() {
  const subscription = yield call(getSnapshotChannell);

  try {
    while (true) {
      const result = yield take(subscription);
      yield put(recieveUCData(result));
    }
  } finally {
    if (yield cancelled()) {
      subscription.close();
    }
  }
}

export function* watchUsersSnapshot() {
  while (yield take(subscribeUC.type)) {
    const uCSyncTask = yield fork(uCSync);
    yield take(unsubscrUC.type);
    yield cancel(uCSyncTask);
  }
}