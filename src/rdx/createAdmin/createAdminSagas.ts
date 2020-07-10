import * as actions from "./createAdminActions";
import { createAdminWithEmailAndPassword } from "@/api/createAdmin";
import { takeEvery, call, put } from "redux-saga/effects";

function* createAdmin({ payload }: ReturnType<typeof actions.createAdmin>) {
  try {
    yield call(createAdminWithEmailAndPassword, payload);
    yield put(actions.createAdminSuccess());
  } catch (err) {
    console.error(err)
    yield put(actions.createAdminFailed(err))
  }
}

export function* createAdminSaga() {
  yield takeEvery(actions.createAdmin.type, createAdmin);
}