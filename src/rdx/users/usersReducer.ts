import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  recieveUCData
} from "./usersActions";

export const usersReducer = createReducer<IUsersData[]>([], {
  [recieveUCData.type]: (_, { payload }: PayloadAction<IUsersData[]>) => {
    return payload;
  }
});