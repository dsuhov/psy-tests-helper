import { createAction } from "@reduxjs/toolkit";

export const sendTestStart = createAction<ISendTestData>("SEND_TEST_START");

export const sendTestSuccess = createAction("SEND_TEST_SUCCESS");

export const sendTestErr = createAction<Error>("SEND_TEST_ERROR");

export const sendTestClearStatus = createAction("SEND_TEST_CLEAR_STATUS");