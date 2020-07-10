import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { auth } from "@/fbConfig";
import { authChange } from "./authStateActions";

function getAuthChannel() {
  let authChannel;
  if (!authChannel) {
    authChannel = eventChannel(emit => {
      const unsubscribe = auth.onAuthStateChanged(user => emit({ user }));
      return unsubscribe;
    });
  }
  return authChannel;
}

export function* watchForFirebaseAuth() {
  
  const channel = yield call(getAuthChannel);

  while (true) {
    const result = yield take(channel);
    
    yield put(authChange(result.user));
  }
}