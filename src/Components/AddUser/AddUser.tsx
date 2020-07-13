import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { AddUserDialog } from "./Components";

export const AddUser: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="default"
        endIcon={<AddIcon />}
        onClick={handleClickOpen}
      >Добавить</Button>

      <AddUserDialog
        open={open}
        toggleDialogClose={handleClose}
      />
    </>
  );
}