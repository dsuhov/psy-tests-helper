import React, { FC } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { grey, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export interface CellTestProps {
  itemVals: string[][];
  itemNum: string;
  onChange: (value: string, name: string) => void;
}

const useStyles = makeStyles({
  groupWrapper: {
    border: `1px solid ${grey[400]}`,
    borderRadius: 8,
    "&:not(:last-child)": {
      marginBottom: 20
    }
  },
  radioItem: {
    "&:not(:last-child)": {
      borderRight: `1px solid ${grey[200]}`
    }
  },
  label: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    cursor: "pointer",
  },
  input: {
    display: "none",
    "&:checked + label": {
      background: green[300],
      color: grey[900],
      transition: "background 0.2s linear"
    }
  }
});

export const TestCell = React.memo<CellTestProps>(({ itemVals, itemNum, onChange }) => {

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    const name = evt.target.name;
    onChange(val, name);
  }

  const classes = useStyles();

  return (
    <Grid container className={classes.groupWrapper}>
      {itemVals.map(val => (
        <Grid item container className={classes.radioItem} xs={3} key={val[0] + itemNum}>
          <input type="radio" name={itemNum} value={val[0]} id={val[0] + itemNum} className={classes.input} onChange={changeHandler} />
          <label className={classes.label} htmlFor={val[0] + itemNum}>
            <Typography variant="body2" color="textPrimary" align="center">
              {val[1]}
            </Typography>
          </label>
        </Grid>
      ))}
    </Grid>
  );
});
