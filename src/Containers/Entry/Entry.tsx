import React, { FC } from "react";
import { useSelector } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LoginScreen } from "@/Screens/LoginScreen/LoginScreen";
import { CenterContent } from "@/Layout/CenterContent";
import { CircularProgress } from "@material-ui/core";
import { AdminScreen } from "@/Screens/AdminScreen";

const getUser = (state: PsyTestsState) => {
  return state.user.user;
}

const isCheckingState = (state: PsyTestsState) => state.user.isChecking;

export const Entry: FC = () => {
  const user = useSelector(getUser);
  const isChecking = useSelector(isCheckingState);

  if (isChecking) {
    return <CenterContent>
      <CircularProgress size={60} />
    </CenterContent>
  }
  
  if (user) {
    return <AdminScreen />;
  }

  return <LoginScreen />;
}