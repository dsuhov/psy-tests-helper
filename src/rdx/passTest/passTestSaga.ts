import {
  sendTestStart,
  sendTestSuccess,
  sendTestErr,
} from "./passTestActions";
import { call, put, takeLatest } from "redux-saga/effects";
import { sendTest } from "@/api/sendTest";

function* sendTestData({ payload }: ReturnType<typeof sendTestStart>) {
  try {
    const response = yield call(sendTest, payload);
    console.log(response);
    
    yield put(sendTestSuccess());
  } catch (e) {
    yield put(sendTestErr(e));
  }
}

export function* watchSendTest() {
  yield takeLatest(sendTestStart.type, sendTestData);
}