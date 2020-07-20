import React, { FC } from 'react';
import { AccItem } from "./AccItem";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import Paper from "@material-ui/core/Paper";

export const UserTestsAcc: FC<{
  data: ITestsDataSorted
}> = ({ data }) => {
  return <Paper>
    {Object.entries(data).map(dataItem => (
      <AccItem title={dataItem[1][0].title} accItemData={dataItem[1]} key={dataItem[1][0].title} />
    ))}
  </Paper>;
}