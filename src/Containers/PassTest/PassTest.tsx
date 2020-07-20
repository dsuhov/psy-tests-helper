import React, { Component } from 'react';
import { TestCell } from "../../Components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { lightGreen } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { passTestWithDb } from "@/HOC/passTestWithDb";

class RawPassTest extends Component<IPassTestProps, any> {
  testProps: any;

  constructor(props: any) {
    super(props);

    const itemsKeys = Object.keys(this.props.testData.items);
    let items: any = {};

    itemsKeys.forEach(itemKey => {

      items = Object.assign(items, {
        [itemKey]: {
          ...(this.props.testData as any).items[itemKey],
          value: -1
        }
      });
    });

    this.state = {
      items: items,
      valid: true
    };

    this.testProps = itemsKeys.map(itemKey => {
      return [itemKey, Object.entries((this.props.testData as any).items[itemKey])]
    })
  }

  onChangehandler = (value: string, name: string) => {
    this.setState((prevState: any) => ({
      ...prevState,
      items: {
        ...prevState.items,
        [name]: {
          ...prevState.items[name],
          value: (this.props.testData as any).mapping[value]
        }
      }
    }));
  }

  onReadyHandler = () => {
    try {
      const resultVal = (Object.values(this.state.items)).reduce((result, { value }: any) => {
        if (parseInt(value) === -1) {
          throw new Error("Не весть тест пройден")
        }
        return result + value;
      }, 0) as number;

      this.setState({ valid: true })

      this.props.onReady(
        this.props.testData.testTitle,
        this.props.testData.idTitle,
        resultVal
        );
      
    } catch (e) {
      this.setState({ valid: false })
    }
  }

  componentWillUnmount() {
    this.props.onExit();
  }

  render() {
    const { sending, sendStatus } = this.props;

    return sendStatus === "ok" ? <Redirect to="/tests" /> : (
      <Paper style={{ padding: 20, marginBottom: 100 }} elevation={3}>
        <Typography variant="h5">{this.props.testData.testTitle}</Typography>
        <Typography variant="subtitle2" style={{ marginBottom: 30 }}>{this.props.testData.instruction}</Typography>
        {this.testProps.map((item: any) => {
          return <TestCell
            key={item[0]}
            onChange={this.onChangehandler}
            itemNum={item[0]}
            itemVals={item[1]}
          />
        })}
        {!this.state.valid && 
          <Typography color="error" variant="body1" style={{ marginBottom: 10 }}>Нужно ответить на все утверждения</Typography>
        }
        <Button
          variant="contained"
          style={{ backgroundColor: lightGreen[400], fontWeight: 600 }}
          endIcon={sending && <CircularProgress size={20} />}
          disabled={sending}
          onClick={this.onReadyHandler}
        >
          Завершить
        </Button>
      </Paper>
    );
  }
}

export const PassTest = passTestWithDb(RawPassTest);