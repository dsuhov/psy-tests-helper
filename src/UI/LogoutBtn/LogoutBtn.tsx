import React, { FC } from 'react';
import { IconButton  } from "@material-ui/core";
import { auth } from "@/fbConfig";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export const LogoutBtn: FC = () => (
  <IconButton color="inherit"
    aria-label="Выход"
    onClick={() => {
      auth.signOut();
      window.location.replace("/");
    }}
  ><ExitToAppRoundedIcon /></IconButton>
);