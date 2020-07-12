import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { auth } from "@/fbConfig";
import { authChange } from "./authStateActions";


function getAuthChannel() {
  let authChannel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          (user as any).admin = idTokenResult.claims.admin;
          emit({ user });
        });
      } else {
        emit({ user })
      }
      
      
    });
    return unsubscribe;
  });

  return authChannel;
}

export function* watchForFirebaseAuth() {
  
  const channel = yield call(getAuthChannel);

  while (true) {
    const result = yield take(channel);
    
    yield put(authChange(result.user));
  }
}