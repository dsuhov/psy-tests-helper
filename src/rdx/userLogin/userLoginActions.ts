import { createAction } from "@reduxjs/toolkit";

export const userLoggedIn = createAction<UserCredentials>("USER_LOGGED_IN");

export const userLoggedInSuccess = createAction("USER_LOGGED_IN_SUCCESS");

export const userLoggedInFailed = createAction<userLoginErr>("USER_LOGGED_IN_FAILED");

export const userLoggedOut = createAction("USER_LOGGED_OUT");