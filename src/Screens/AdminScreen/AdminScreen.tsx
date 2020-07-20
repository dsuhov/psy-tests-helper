import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { AdminDashboard } from "@/Containers/AdminDashboard";
import { useSelector } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LogoutBtn } from "@/UI/LogoutBtn";
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles  } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  userEmail: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  logoutBtn: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto"
    }
  }
}));


export const AdminScreen: React.FC = () => {
  const email = useSelector(({ user: { user } }: PsyTestsState) => user!.email);
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }} className={classes.userEmail}>
              {email}
            </Typography>
            <Button component={Link} to="/users" variant="outlined" color="inherit">Пользователи</Button>
            <div className={classes.logoutBtn}>
              <LogoutBtn />
            </div>
          </Toolbar>
      </AppBar>
      <AdminDashboard />
    </>
  );
};