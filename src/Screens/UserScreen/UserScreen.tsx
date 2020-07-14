import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LogoutBtn } from "@/UI/LogoutBtn";

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
              <LogoutBtn />
            </Toolbar>
        </AppBar>
      </>
    );
  }
}

export const UserScreen = connect(mapStateToProps)(RawUserScreen);