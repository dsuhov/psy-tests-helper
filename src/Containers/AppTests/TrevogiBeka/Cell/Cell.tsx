import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { grey, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';

export interface CellTrevBekaTestProps {
  itemVals: ITrvogiBekaItem;
  itemNum: string;
  onChange: (value: string, name: string) => void;
}

interface StyleProps {
  media: boolean;
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
      borderRight: (props: StyleProps) => props.media ? "none" : `1px solid ${grey[200]}`,
      borderBottom: (props: StyleProps) => props.media ? `1px solid ${grey[200]}` : "none"
    },

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
  },
  title: {
    fontSize: (props: StyleProps) => props.media ? "16px" : "initital",
    marginBottom: 14
  }
});

export const Cell = React.memo<CellTrevBekaTestProps>(({ itemVals: { vars, question }, itemNum, onChange }) => {
  const matchesDown600 = useMediaQuery("(max-width: 600px)");

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    const name = evt.target.name;
    onChange(val, name);
  }

  const classes = useStyles({ media: matchesDown600 });

  return (
    <>
      <Typography variant="h6" className={classes.title}>{question}</Typography>
      <Grid container className={classes.groupWrapper} direction={matchesDown600 ? "column" : "row"}>
        {vars.map(val => (
          <Grid item container 
            className={classes.radioItem} 
            xs={12} sm={3}
            key={val[0] + itemNum} 
          >
            <input type="radio" name={itemNum} value={val[0]} id={val[0] + itemNum} className={classes.input} onChange={changeHandler} />
            <label className={classes.label} htmlFor={val[0] + itemNum}>
              <Typography variant="body2" color="textPrimary" align="center">
                {val[1]}
              </Typography>
            </label>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ marginBottom: 10 }} />
    </>
  );
});
