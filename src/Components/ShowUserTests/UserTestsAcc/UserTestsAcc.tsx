import React, { FC } from 'react';
import { AccItem } from "./AccItem";

import Paper from "@material-ui/core/Paper";

export const UserTestsAcc: FC<{
  data: ITestsDataSorted
}> = ({ data }) => {
  return <Paper>
    {Object.entries(data).map(dataItem => (
      <AccItem title={dataItem[1].title} accItemData={dataItem[1].content} key={dataItem[0]} />
    ))}
  </Paper>;
}