import React, { PureComponent } from 'react';
import { AddUser } from "@/Components";
import { connect } from "react-redux";
import {
  subscribeUC,
  unsubscrUC,
} from "@/rdx/users/usersActions";
import { PsyTestsState } from "@/rdx/store";
import { UsersList } from "@/Components";

const mapDispatchtoProps = {
  subscribeUC,
  unsubscrUC
}

const mapStateToProps = (state: PsyTestsState) => ({
  usersData: state.users
})

type UsersProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchtoProps;

export class RawUsers extends PureComponent<UsersProps> {
  componentDidMount() {
    this.props.subscribeUC();
  }

  componentWillUnmount() {
    this.props.unsubscrUC();
  }

  render() {
    return (
      <>
        <h1>Users List</h1>
        <UsersList users={this.props.usersData} />
        <AddUser />
      </>
    )
  }
}

export const Users = connect(mapStateToProps, mapDispatchtoProps)(RawUsers);