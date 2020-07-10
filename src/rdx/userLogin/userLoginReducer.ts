import * as actions from "./userLoginActions";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  userisLogging: boolean;
  userLoinError: any;
}

const userState: UserState = {
  userisLogging: false,
  userLoinError: null
}

export const userLoginReducer = createReducer<UserState>(userState, {
  [actions.userLoggedIn.type]: (state) => {
    state.userisLogging = true;
    state.userLoinError = null;
  },
  [actions.userLoggedInSuccess.type]: (state) => {
    state.userisLogging = false;
    state.userLoinError = null;
  },
  [actions.userLoggedInFailed.type]: (state, { payload }: PayloadAction<any>) => {
    state.userisLogging = false;
    state.userLoinError = payload;
  }
});