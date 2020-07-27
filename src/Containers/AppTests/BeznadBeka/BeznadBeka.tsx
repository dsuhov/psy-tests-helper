import React, { FC, useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from "@material-ui/core/CircularProgress";
import { lightGreen } from "@material-ui/core/colors";
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

interface RawBeznadBekaProps {
  data: IBeznadBekaData,
  sending: boolean;
  sendStatus: string;
  error: string | null;
  onReady: (testTitle: string, testIdName: string, testValue: number) => void;
  onExit: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      marginBottom: 20,
      maxWidth: 600
    }
  })
);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number, current: number, total: number }) {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
      <Typography variant="body2" color="textSecondary">{props.current + 1}/{props.total}</Typography>
      </Box>
    </Box>
  );
}



export const RawBeznadBeka: FC<RawBeznadBekaProps> = ({ data, sending, sendStatus, error, onReady, onExit }) => {
  const classes = useStyles();
  const [testState, setTestState] = useState<number[]>(new Array(Object.keys(data.items).length).fill(-1));
  const [currStep, setCurrStep] = useState(0);
  const [dataAsArray] = useState(Object.entries(data.items));
  const [filled, setFilled] = useState(0);
  const [testPassed, setTestPassed] = useState(false);
  const [turning, setTurning] = useState(false);

  useEffect(() => {
    return () => onExit();
  }, [data.items, onExit]);

  const onChooseHandler = (variant: boolean) => {
    const newTestState = [...testState];
    newTestState[currStep] = 
      dataAsArray[currStep][1].weightVariant === variant ? 1 : 0;

    setTestState(newTestState);
    setTurning(true);

    if (testState[currStep] === -1) {
      setFilled(filled + 1);
    }
    
    setTimeout(() => {
      if (currStep < dataAsArray.length - 1) {
        setCurrStep(currStep + 1);
        setTurning(false);
      } else {
        setTestPassed(true);
        setTurning(false);
      }

    }, 300);
  }
   
  const handleSubmit = () => {
    const result = testState.reduce((res, curr) => res + curr);
    console.log(result);
    
  }

  const moveNext = () => setCurrStep(currStep + 1);
  const movePrev = () => setCurrStep(currStep - 1);


  return (
    <>
      <Typography variant="h5" style={{ marginBottom: 14 }}>{data.testTitle}</Typography>
      <Typography variant="body1" style={{ marginBottom: 30 }}>{data.instruction}</Typography>

      {!testPassed ? <div className={classes.cardContainer}>
        <Card variant="outlined">
          <CardContent>
          <LinearProgressWithLabel 
            value={Math.round(((currStep+ 1)/dataAsArray.length) * 100)} 
            total={dataAsArray.length} 
            current={currStep}
          />
          <Typography variant="h5" component="h2">
            {dataAsArray[currStep][1].assertion}
          </Typography>
          </CardContent>
          
          <CardActions>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => onChooseHandler(false)} 
                  disabled={turning}
                >Не верно</Button>
              </Grid>
              <Grid item xs={6}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => onChooseHandler(true)} 
                  disabled={turning}
                >Верно</Button>
              </Grid>
            </Grid>
          </CardActions>
          <CardActions>
          <Button 
            onClick={movePrev}
            disabled={currStep === 0 || turning}
            size="small" 
            color="primary"
          >
            Назад
          </Button>
          <Button 
            onClick={moveNext}
            disabled={currStep === filled || turning}
            size="small" 
            color="primary"
          >
            Далее
          </Button>
          </CardActions>
        </Card>
      </div> :
      <Typography variant="h5" component="h2" style={{ marginBottom: 14 }}>
        Тест успешно пройден!
      </Typography>
      }

      <Button
        variant="contained"
        style={{ backgroundColor: lightGreen[400], fontWeight: 600 }}
        endIcon={sending && <CircularProgress size={20} />}
        disabled={sending || !testPassed}
        onClick={handleSubmit}
      >
        Завершить
      </Button>
    </>
  );
}