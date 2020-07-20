import React, { useState, useEffect } from "react";
import { Cell } from "./Cell";

import {Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { lightGreen } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { passTestWithDb } from "@/HOC/passTestWithDb";

interface ITrevogiBekaProps {
  testData: ITrevogiBekaData;
  sending: boolean;
  sendStatus: string;
  error: string;
  onReady: (testTitle: string, testIdName: string, testValue: number) => void;
  onExit: () => void;
}

// exmpl item1: var2
type ITrevBekaTestState = Record<string, number | null>;

export const RawTrevogiBeka: React.FC<ITrevogiBekaProps> = ({ testData, onExit, onReady, sendStatus, sending }) => {
  const tdItems = Object.entries(testData.items);

  const [test, setTest] = useState<ITrevBekaTestState>({});
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const testStateItems: ITrevBekaTestState = {};

    Object.keys(testData.items).forEach(item => {
      testStateItems[item] = null;
    });

    setTest(testStateItems)
    
    return () => {
      onExit();
    };
  }, [onExit, testData]);

  const onReadyHandler = () => {

    try {
      const resultVal = (Object.values(test)).reduce((result: number, value: number | null) => {
        if (value === null) {
          throw new Error("Не весть тест пройден")
        }
        return result + value;
      }, 0);

      setIsValid(true);
      
      onReady(
        testData.testTitle,
        testData.idTitle,
        resultVal
        );
      
    } catch (e) {
      setIsValid(false);
    }
  }

  const onChangehandler = (value: string, name: string) => {
    setTest({
      ...test,
      [name]: testData.mapping[value]
    }); 
  }

  return sendStatus === "ok" ? <Redirect to="/tests" /> : (
    <Paper style={{ padding: 20, marginBottom: 100 }} elevation={3}>
      <Typography variant="h5">{testData.testTitle}</Typography>
      <Typography variant="subtitle2" style={{ marginBottom: 30 }}>{testData.instruction}</Typography>
      {tdItems.map((item) => (
        <Cell 
          key={item[0]}
          itemVals={item[1]}
          itemNum={item[0]}
          onChange={onChangehandler}
        />
      ))}
      {!isValid && 
        <Typography color="error" variant="body1" style={{ marginBottom: 10 }}>Нужно ответить на все утверждения</Typography>
      }
      <Button
        variant="contained"
        style={{ backgroundColor: lightGreen[400], fontWeight: 600 }}
        endIcon={sending && <CircularProgress size={20} />}
        disabled={sending}
        onClick={onReadyHandler}
      >
        Завершить
      </Button>
    </Paper>
  );
}

export const TrevogiBeka = passTestWithDb(RawTrevogiBeka);