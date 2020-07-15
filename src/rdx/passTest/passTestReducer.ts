import {
  sendTestStart,
  sendTestSuccess,
  sendTestErr,
  sendTestClearStatus,
} from "./passTestActions";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const sendTestState = {
  inProgress: false,
  status: "",
  error: null
}

export const passTestReducer = createReducer<{
  inProgress: boolean;
  status: string;
  error: null | Error;
}>(sendTestState, {
  [sendTestStart.type]: (state) => {
    state.inProgress = true;
    state.status = "";
    state.error = null;
  },
  [sendTestSuccess.type]: (state) => {
    state.inProgress = false;
    state.status = "ok";
  },
  [sendTestErr.type]: (state, { payload }: PayloadAction<Error>) => {
    state.inProgress = false;
    state.status = "";
    state.error = payload;
  },
  [sendTestClearStatus.type]: (state) => {
    state.status = "";
  }
});