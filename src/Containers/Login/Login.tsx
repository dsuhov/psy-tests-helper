import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { checkValidity } from "@/Shared/utility";

type RawLoginProps =  {
  tabId: number;
};

type RawLoginState = {
  inputs: {
    email: {
      value: string;
      validation: ValidationRules;
      valid: boolean;
    },
    password: {
      value: string;
      validation: ValidationRules;
      valid: boolean;
    }
  }
}

export class Login extends Component<RawLoginProps, RawLoginState > {
  state = {
    inputs: {
      email: {
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: true
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 6,
          isPassword: true
        },
        valid: true
      }
    }
  }

  onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const  { value, name } = event.target;
    this.setState((prevState: RawLoginState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: {
            ...prevState.inputs[name as "email" | "password"],
            value: value,
            valid: true
          }
        }
      }
    });
  }

  onSubmitHandler = (event: React.FormEvent) => {
    const { email, password } = this.state.inputs;
    event.preventDefault();

    const isEmailValid = checkValidity(email.value, email.validation);
    const isPasswordValid = checkValidity(password.value, password.validation);

    this.setState((prevState: RawLoginState) => {
      return {
        inputs: {
          email: {
            ...prevState.inputs.email,
            valid: isEmailValid
          },
          password: {
            ...prevState.inputs.password,
            valid: isPasswordValid
          }
        }
      }
    });

    console.log(email.value, password.value);
  }

  render() {
    const { tabId } = this.props;
    const isValidEmail = this.state.inputs.email.valid;
    const isValidPass = this.state.inputs.password.valid;

    return (
      <form autoComplete="off" onSubmit={this.onSubmitHandler}>
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
          error={!isValidEmail}
          helperText={!isValidEmail && "Некорректный e-mail"}
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
          error={!isValidPass}
          helperText={!isValidPass && "Некорректный пароль"}
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