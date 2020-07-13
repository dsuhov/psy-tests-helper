import React, { FC, useRef, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { validateDialogInputs, IDialogError } from "./validateDialogInputs";
import firebase from "firebase/app";

const useStyles = makeStyles({
  root: {
    marginBottom: "20px"
  }
});

interface Props {
  open: boolean;
  toggleDialogClose: () => void;
}

export const AddUserDialog: FC<Props> = ({
  toggleDialogClose,
  open
}) => {
  const classes = useStyles();
  const [error, setError] = useState<IDialogError>({});
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);

  const commitHandler = () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const name = nameRef.current!.value;
    const comment = commentRef.current!.value;

    const errResult = validateDialogInputs(email, password);

    if (Object.keys(errResult).length > 0) {
      setError(errResult);
    } else {
      setError({});
      const adduser = firebase.functions().httpsCallable("createUser");
      adduser({
        email,
        password,
        displayName: name,
        comment
      });
    }
    
  }

  return (
    <Dialog open={open} onClose={toggleDialogClose}>
      <DialogTitle id="form-dialog-add-user">Добавить пользователя</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.root}
          id="add-user-email"
          label="Email"
          type="email"
          fullWidth
          required
          inputRef={emailRef}
          error={"email" in error}
          helperText={error.email}
        />
        <TextField
        className={classes.root}
          id="add-user-password"
          label="Пароль"
          type="text"
          fullWidth
          required
          inputRef={passwordRef}
          error={"password" in error}
          helperText={error.password}
        />
        <TextField
          className={classes.root}
          id="add-user-name"
          label="Имя пользователя"
          type="text"
          fullWidth
          inputRef={nameRef}
        />
        <TextField
          className={classes.root}
          id="add-user-comment"
          label="Комментарий"
          multiline
          fullWidth
          inputRef={commentRef}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={toggleDialogClose}
        >
          Отмена
        </Button>
        <Button
          onClick={() => {
            commitHandler()
            toggleDialogClose();
          }}
          variant="contained"
          color="primary"
        >Создать</Button>
      </DialogActions>
    </Dialog>
  );
}