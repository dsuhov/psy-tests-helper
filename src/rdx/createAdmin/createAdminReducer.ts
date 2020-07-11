import * as actions from "./createAdminActions";
import { createReducer } from "@reduxjs/toolkit";

interface AdminCreatorState {
  isCreating: boolean;
  error: any;
}

const adminCreatorSate: AdminCreatorState = {
  isCreating: false,
  error: null
}

export const createAdminReducer = createReducer<AdminCreatorState>(adminCreatorSate, {
  [actions.createAdmin.type]: (state) => {
    state.isCreating = true;
    state.error = null;
  },
  [actions.createAdminFailed.type]: (state, action) => {
    state.isCreating = false;
    state.error = action.payload;
  },
  [actions.createAdminSuccess.type]: (state) => {
    state.isCreating = false;
    state.error = null;
  }
});