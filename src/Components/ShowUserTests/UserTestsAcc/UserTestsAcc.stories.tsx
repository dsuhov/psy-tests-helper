import React from "react";
import { UserTestsAcc } from "./UserTestsAcc";
import { action } from "@storybook/addon-actions";

export default {
  title: "User Tests Accordion",
};

const testData: ITestsDataSorted = {
  shkalaDepressiiBeka: {
    title: "Шкала Депрессии Бека",
    legend: "sdfsdf",
    content: [
      {
        date: "Wed Jul 2 2020 10:23:36 GMT+0300 (Москва, стандартное время)",
        result: 12,
      },
      {
        date: "Wed Jul 4 2020 11:23:36 GMT+0300 (Москва, стандартное время)",
        result: 4,
      },
      {
        date: "Wed Jul 10 2020 08:23:36 GMT+0300 (Москва, стандартное время)",
        result: 5,
      },
      {
        date: "Wed Jul 15 2020 12:23:36 GMT+0300 (Москва, стандартное время)",
        result: 5,
      },
      {
        date: "Wed Jul 15 2020 16:23:36 GMT+0300 (Москва, стандартное время)",
        result: 25,
      },
      {
        date: "Wed Jul 18 2020 16:23:36 GMT+0300 (Москва, стандартное время)",
        result: 21,
      },
      {
        date: "Wed Jul 20 2020 16:23:36 GMT+0300 (Москва, стандартное время)",
        result: 18,
      },
    ]
    },
  shkalaTrevogiBeka: {
    title: "Шкала Тревоги Бека",
    legend: "sdfk sdhfksdhf",
    content: [
      { 
        date: "Wed Jul 2 2020 10:23:36 GMT+0300 (Москва, стандартное время)",
        result: 14,
      },
      {
        date: "Wed Jul 4 2020 11:23:36 GMT+0300 (Москва, стандартное время)",
        result: 33,
      },
      {
        date: "Wed Jul 10 2020 08:23:36 GMT+0300 (Москва, стандартное время)",
        result: 28,
      },
    ]
  }
};

export const withTestData = () => (
  <div style={{ maxWidth: 800 }}>
    <UserTestsAcc data={testData} />
  </div>
);