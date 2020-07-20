import {
  getTestsStart,
  getTestsSuccess,
  getTestsError
} from "./getTestsACctions";

import { call, put, takeLatest } from "redux-saga/effects";
import { getUserTests } from "@/api/getUserTests";

function* getTests({ payload }: ReturnType<typeof getTestsStart>) {
  try {
    const response = yield call(getUserTests, payload);
    
    yield put(getTestsSuccess(response));
  } catch (e) {
    yield put(getTestsError(e));
  }
}

export function* watchGetTests() {
  yield takeLatest(getTestsStart.type, getTests);
}