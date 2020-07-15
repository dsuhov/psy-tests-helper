import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LogoutBtn } from "@/UI/LogoutBtn";
import { UserDashboard } from "@/Containers/UserDashboard";
import { Link } from "react-router-dom";

const mapStateToProps = (state: PsyTestsState) => ({
  user: state.user.user
});

type RawUserScreenProps = ReturnType<typeof mapStateToProps>;

export class RawUserScreen extends Component<RawUserScreenProps> {

  render() {
    const { email } = this.props.user!

    return (
      <>
        <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                {email}
              </Typography>
              <Button component={Link} to="/tests" variant="outlined" color="inherit">Тесты</Button>
              <LogoutBtn />
            </Toolbar>
        </AppBar>
        <UserDashboard />
      </>
    );
  }
}

export const UserScreen = connect(mapStateToProps)(RawUserScreen);