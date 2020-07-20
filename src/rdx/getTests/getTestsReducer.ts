import {
  getTestsStart,
  getTestsSuccess,
  getTestsError
} from "./getTestsACctions";

import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface IGetTestsState {
  isRequesting: boolean;
  testsReqData: ITestData[] | null;
  error: Error | null;
}

const getTestsState = {
  isRequesting: false,
  testsReqData: null,
  error: null
}

export const getTestsReducer = createReducer<IGetTestsState>(getTestsState, {
  [getTestsStart.type]: (state) => {
    state.isRequesting = true;
    state.testsReqData = null;
    state.error = null;
  },
  [getTestsSuccess.type]: (state, { payload }: PayloadAction<ITestData[]>) => {
    state.isRequesting = false;
    state.testsReqData = payload;
    state.error = null;
  },
  [getTestsError.type]: (state, { payload }: PayloadAction<Error>) => {
    state.isRequesting = false;
    state.testsReqData = null;
    state.error = payload;
  }
});