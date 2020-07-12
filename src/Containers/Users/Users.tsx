import React, { PureComponent } from 'react';
import { AddUser } from "@/Components";

export class Users extends PureComponent {

  render() {
    return (
      <>
        <h1>Users List</h1>
        <AddUser />
      </>
    )
  }
}