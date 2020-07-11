import * as actions from "./userLoginActions";
import { loginAdminWithEmailAndPassword } from "@/api/login";
import { takeEvery, call, put } from "redux-saga/effects";

function* logInUser({ payload }: ReturnType<typeof actions.userLoggedIn>) {
  try {
    yield call(loginAdminWithEmailAndPassword, payload);
    yield put(actions.userLoggedInSuccess());
  } catch (err) {
    yield put(actions.userLoggedInFailed(err))
  }
}

export function* userLoginSaga() {
  yield takeEvery(actions.userLoggedIn, logInUser);
}