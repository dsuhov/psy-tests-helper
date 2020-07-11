import React, { Component } from "react";
import { TextField, Button, CircularProgress, Box  } from "@material-ui/core";
import { checkValidity } from "@/Shared/utility";
import { connect } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import * as adminCreateActions from "@/rdx/createAdmin/createAdminActions";
import { userLoggedIn } from "@/rdx/userLogin/userLoginActions";
import { LoginError } from "@/Components/LoginError";

const mapStateToProps = (state: PsyTestsState, ownProps: { tabId: number }) => {
  return {
    tabId: ownProps.tabId,
    creationInProgress: state.createAdmin.isCreating || state.userLogin.userisLogging,
    error: state.createAdmin.error || state.userLogin.userLoinError
  }
}

const mapDispatchToProps = {
  createAdmin: adminCreateActions.createAdmin,
  signin: userLoggedIn,
}

type RawLoginProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

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

class RawLogin extends Component<RawLoginProps, RawLoginState > {
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

    if (isEmailValid && isPasswordValid) {
      if (this.props.tabId === 0) {
        this.props.signin({ email: email.value, password: password.value })
      } else {
        this.props.createAdmin({ email: email.value, password: password.value });
      }
    }
  }

  render() {
    const { tabId } = this.props;
    const isValidEmail = this.state.inputs.email.valid;
    const isValidPass = this.state.inputs.password.valid;
    const creatingInProgress = this.props.creationInProgress;

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
        {tabId === 0 ? 
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            fullWidth>
            Войти
          </Button> : 
          <Button variant="contained" type="submit" fullWidth>
            Зарегистрироваться
          </Button> 
        }
        {creatingInProgress &&
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress />
          </Box>
        }
        { this.props.error &&
          <LoginError errMsg={this.props.error.message} />
        }
      </form>
    );
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(RawLogin);