import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LogoutBtn } from "@/UI/LogoutBtn";
import { UserDashboard } from "@/Containers/UserDashboard";
import { Link } from "react-router-dom";
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

export const UserScreen: React.FC = () => {
  const email = useSelector(({ user: { user } }: PsyTestsState) => user!.email);
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }} className={classes.userEmail}>
              {email}
            </Typography>
            <Button component={Link} to="/mytests" variant="outlined" color="inherit" style={{ marginRight: 20 }}>Пройденные тесты</Button>
            <Button component={Link} to="/tests" variant="outlined" color="inherit" style={{ marginRight: 20 }}>Доступные тесты</Button>
            <div className={classes.logoutBtn}>
              <LogoutBtn />
            </div>
          </Toolbar>
      </AppBar>
      <UserDashboard />
    </>
  );
};