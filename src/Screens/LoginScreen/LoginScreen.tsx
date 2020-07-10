import React, { Component } from "react";
import { Grid, Paper, Box, Tabs, Tab } from "@material-ui/core";
import { AppBar } from '@material-ui/core';
import { Login } from "@/Containers/Login/Login";

export class LoginScreen extends Component {
  state = {
    tabState: 0
  }

  tabChangeHandler = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ tabState: newValue });
  }

  render() {
    const { tabState } = this.state;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}>
        <Grid item lg={3} md={4} sm={6} xs={10}>
          <Paper>
            <AppBar position="static">
              <Tabs
                value={tabState}
                onChange={this.tabChangeHandler}
                aria-label="Выбор способа входа"
                variant="fullWidth"
              >
                <Tab label="Пользователь" id="choose-login-type-0" />
                <Tab label="Админ"  id="choose-login-type-1" />
              </Tabs>
            </AppBar>
            <Box p={2} pt={3}>
              <Login tabId={tabState} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}