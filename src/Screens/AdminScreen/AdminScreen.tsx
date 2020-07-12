import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { AdminDashboard } from "@/Containers/AdminDashboard";
import { connect } from "react-redux";
import { PsyTestsState } from "@/rdx/store";
import { LogoutBtn } from "@/UI/LogoutBtn";
import { Link } from 'react-router-dom';

const mapStateToProps = (state: PsyTestsState) => ({
  user: state.user.user
});

type RawAdminScreenProps = ReturnType<typeof mapStateToProps>;

export class RawAdminScreen extends Component<RawAdminScreenProps> {

  render() {
    const { email } = this.props.user!

    return (
      <>
        <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                {email}
              </Typography>
              <Button component={Link} to="/users" variant="outlined" color="inherit">Пользователи</Button>
              <LogoutBtn />
            </Toolbar>
        </AppBar>
        <AdminDashboard />
      </>
    );
  }
}

export const AdminScreen = connect(mapStateToProps)(RawAdminScreen);