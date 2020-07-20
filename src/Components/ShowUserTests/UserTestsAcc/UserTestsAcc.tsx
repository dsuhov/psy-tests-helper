import React, { FC } from 'react';
import { AccItem } from "./AccItem";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import Paper from "@material-ui/core/Paper";

export const UserTestsAcc: FC<{
  data: ITestsDataSorted
}> = ({ data }) => {
  const dataKeys = Object.keys(data);

  return <Paper>
    <AccItem title={data[dataKeys[0]][0].title} accItemData={data[dataKeys[0]]} />
  </Paper>;
}