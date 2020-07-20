import React from 'react';
import { MainContainer } from "@/Layout/MainContainer";
import { Switch, Route } from "react-router-dom";
import { Users } from "@/Containers/Users";
import { UserTestsById } from "@/Containers/UserTestsById";

export const AdminDashboard: React.FC = () => {

    return (
      <MainContainer>
        <Switch>
          <Route exact path="/users" render={() => <Users />} />
          <Route path="/users/:userId" render={({ match: { params: { userId } } }) => <UserTestsById userId={userId} />} />
        </Switch>
      </MainContainer>
    );
}