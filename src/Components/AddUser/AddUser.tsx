import React from 'react';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

export const AddUser: React.FC = () => {
  return (
    <>
      <Button
        variant="outlined"
        color="default"
        endIcon={<AddIcon />}
      >Добавить</Button>
    </>
  );
}