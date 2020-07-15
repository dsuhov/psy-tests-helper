import React from "react";
import {
  sendTestStart,
  sendTestClearStatus,
} from "@/rdx/passTest/passTestActions";
import { useSelector, useDispatch } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { deprBeka } from "@/testsData/deprBeka";

interface IPassTestProps {
  testType: string;
}

export const passTestWithDb = (
  Component: React.ComponentType<any>
) => (props: IPassTestProps) => {
  let testData: any;
  const dispatch = useDispatch();
  const sending = useSelector(({ passTest: { inProgress } }: PsyTestsState) => inProgress);
  const sendStatus = useSelector(({ passTest: { status } }: PsyTestsState) => status);
  const error = useSelector(({ passTest: { error } }: PsyTestsState) => error);
  const uid = useSelector(({ user }: PsyTestsState) => user.user!.uid);

  console.log(sending, sendStatus );
  

  switch (props.testType) {
    case "shkalaDepressiiBeka": testData = deprBeka; break;
    default: return null;
  }

  const onReady = (testTitle: string, testIdName: string, testValue: number) => {
    dispatch(sendTestStart({
      dataToSend: {
        title: testTitle, 
        idName: testIdName, 
        result: testValue,
        date: new Date().toString()
      },
      uid: uid
    }));
  }

  const clearStatus = () => dispatch(sendTestClearStatus());

  return <Component
    testData={testData}
    sending={sending}
    sendStatus={sendStatus}
    error={error}
    onReady={onReady}
    onExit={clearStatus}
  />;
}