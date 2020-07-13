interface DialogErrDescr {
  msg: string;
}

export interface IDialogError {
  email?: DialogErrDescr;
  password?: DialogErrDescr;
}

export const validateDialogInputs = (
  email: string,
  password: string
): IDialogError => {
  let errors: IDialogError = {};

  if (email.length === 0) {
    errors = setError(errors, "email", "Поле обязательно");
  }

  if (password.length === 0) {
    errors = setError(errors, "password", "Поле обязательно");
  }

  if (password.length < 6) {
    errors = setError(errors, "password", "Минимум 6 символов");
  }

  if (password.length >= 6) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+/g;
    if (!pattern.test( password )) {
      errors = setError(errors, "password", "Только латинские символы");
    }
  }

  if ( email.length !== 0 ) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test( email )) {
      errors = setError(errors, "email", "Неверный формат почты");
    }
  }

  return errors;
}

const setError = (oldErrObj: IDialogError, type: string, msg: string): IDialogError => {
  return Object.assign({}, oldErrObj, {
    [type]: msg
  });
}