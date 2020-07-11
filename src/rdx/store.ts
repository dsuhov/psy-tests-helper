import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { createAdminReducer } from "./createAdmin/createAdminReducer";
import { createAdminSaga } from "./createAdmin/createAdminSagas";
import { userLoginReducer } from "./userLogin/userLoginReducer";
import { userLoginSaga } from "./userLogin/userLoginSaga";
import { authStateReducer } from "./authState/authStateReducer";
import { watchForFirebaseAuth } from "./authState/autStateSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(watchForFirebaseAuth);
  yield fork(createAdminSaga);
  yield fork(userLoginSaga);
}


export const store = configureStore({
  reducer: {
    createAdmin: createAdminReducer,
    userLogin: userLoginReducer,
    user: authStateReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type PsyTestsState = ReturnType<typeof store.getState>;