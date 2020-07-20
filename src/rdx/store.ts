import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { createAdminReducer } from "./createAdmin/createAdminReducer";
import { createAdminSaga } from "./createAdmin/createAdminSagas";
import { userLoginReducer } from "./userLogin/userLoginReducer";
import { userLoginSaga } from "./userLogin/userLoginSaga";
import { authStateReducer } from "./authState/authStateReducer";
import { watchForFirebaseAuth } from "./authState/autStateSaga";
import { watchUsersSnapshot } from "./users/usersSaga";
import { usersReducer } from "./users/usersReducer";

import { watchSendTest, passTestReducer } from "./passTest";
import { getTestsReducer, watchGetTests } from "./getTests";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(watchForFirebaseAuth);
  yield fork(createAdminSaga);
  yield fork(userLoginSaga);
  yield fork(watchUsersSnapshot);
  yield fork(watchSendTest);
  yield fork(watchGetTests);
}


export const store = configureStore({
  reducer: {
    createAdmin: createAdminReducer,
    userLogin: userLoginReducer,
    user: authStateReducer,
    users: usersReducer,
    passTest: passTestReducer,
    userTests: getTestsReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type PsyTestsState = ReturnType<typeof store.getState>;
