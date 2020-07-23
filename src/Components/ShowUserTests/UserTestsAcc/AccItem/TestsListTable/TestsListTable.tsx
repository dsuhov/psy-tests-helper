import React, { FC } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, createStyles  } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  tbFS: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      padding: 10
    }
  },
  table: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%"
    }
  }
}));

export const TestsListTable: FC<{
  testData: Array<{
    date: string;
    result: number;
  }>
}> = ({ testData }) => {
  const matchesDown600 = useMediaQuery("(max-width: 600px)");
  const classes = useStyles();

  return (
    <TableContainer style={{ marginBottom: 20 }}>
      <Table size={matchesDown600 ? "small" : "medium"}>
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Время прохождения</b></TableCell>
            <TableCell align="right"><b>Результат</b> (баллы)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.table}>
          {testData.map(({ date, result }) => {
            const dateObj = new Date(date);
            const dateFormatted = dateObj.toLocaleString("ru", {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
              timeZone: 'Europe/Moscow',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            });

            return (
              <TableRow key={date}>
                <TableCell className={classes.tbFS} align="left">{dateFormatted}</TableCell>
                <TableCell className={classes.tbFS} align="right">
                  <Typography color="secondary">{result}</Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}