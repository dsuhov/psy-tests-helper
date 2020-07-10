import { authChange } from "./authStateActions";
import { createReducer } from "@reduxjs/toolkit";

type AuthState = {
  user: any;
  isChecking: boolean;
};

const authState: AuthState = {
  user: null,
  isChecking: true
};

export const authStateReducer = createReducer(authState, {
  [authChange.type]: (state, { payload }: any) => {
    state.user = payload;
    state.isChecking = false
  }
});