import {createAction } from "@reduxjs/toolkit";

// SUBSCRIBE_USERS_COLLECTION
// UNSUBSCRIBE_USERS_COLLECTION
// RECIEVE_USERS_COLLECTION_DATA
// REIEVE_ERR_USERS_COLLECTION_DATA

export const subscribeUC = createAction("SUBSCRIBE_USERS_COLLECTION");

export const unsubscrUC = createAction("UNSUBSCRIBE_USERS_COLLECTION");

export const recieveUCData = createAction<IUsersData>("RECIEVE_USERS_COLLECTION_DATA");