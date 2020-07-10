import { createAction } from "@reduxjs/toolkit";

export const createAdmin = createAction<UserCredentials>("CREATE_ADMIN_START");

export const createAdminFailed = createAction<any>("CREATE_ADMIN_ERROR");

export const createAdminSuccess = createAction("CREATE_ADMIN_SICCESS");