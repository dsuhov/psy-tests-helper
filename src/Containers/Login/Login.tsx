import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

type RawLoginProps =  {
  tabId: number;
};

type RawLoginState = {
  inputs: {
    email: string;
    password: string;
  }
}

export class Login extends Component<RawLoginProps, RawLoginState > {
  state = {
    inputs: {
      email: "",
      password: ""
    }
  }

  onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const  { value, name } = event.target;
    this.setState((prevState: RawLoginState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    });
  }

  onSubmitHandler = (event: React.FormEvent) => {
    const { email, password } = this.state.inputs;
    event.preventDefault();

    console.log(email, password);
    
  }

  render() {
    const { tabId } = this.props;

    return (
      <form noValidate autoComplete="off" onSubmit={this.onSubmitHandler}>
        <TextField
          id="input-email"
          label="Введите e-mail"
          variant="outlined"
          type="email"
          name="email"
          onChange={this.onChangeField}
          fullWidth
          inputProps={{
            form: {
              autocomplete: 'off',
            },
          }}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="input-password"
          label="Введите пароль"
          variant="outlined"
          type="password"
          name="password"
          fullWidth
          onChange={this.onChangeField}
          style={{ marginBottom: "20px" }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          style={ tabId === 1 ? { marginBottom: "20px" } : {} }
          fullWidth>
          Войти
        </Button>
        {tabId === 1 ? 
          <Button variant="contained" type="submit" fullWidth>
            Зарегистрироваться
          </Button> : null
        }
      </form>
    );
  }
}