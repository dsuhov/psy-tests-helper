interface ITestData {
  title: string;
  idName: string;
  result: number;
  date: string;
}


interface ITestsDataSorted {
  [key: string]: Array<{
    title: string;
    date: string;
    result: number;
  }>;
}