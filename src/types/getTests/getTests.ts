interface ITestData {
  title: string;
  idName: string;
  result: number;
  date: string;
}


interface ITestsDataSorted {
  [key: string]: {
    title: string;
    legend: string;
    content: Array<{
      date: string;
      result: number;
    }>;
  }
}