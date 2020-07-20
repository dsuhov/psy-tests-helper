import { createAction } from "@reduxjs/toolkit";

export const getTestsStart = createAction<string>("GET_TESTS_START");

export const getTestsSuccess = createAction<ITestData[]>("GET_TESTS_SUCCESS");

export const getTestsError = createAction<Error>("GET_TESTS_ERROR");