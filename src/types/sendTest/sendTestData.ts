interface ISendTestData {
  dataToSend: {
    title: string;
    idName: string;
    result: number;
    date: string;
  };
  uid: string;
}

interface IPassTestProps {
  testData: any;
  sending: boolean;
  sendStatus: string;
  error: string;
  onReady: (testTitle: string, testIdName: string, testValue: number) => void;
  onExit: () => void;
}