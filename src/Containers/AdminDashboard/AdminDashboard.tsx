import React from 'react';
import { MainContainer } from "@/Layout/MainContainer";
import { Switch, Route } from "react-router-dom";
import { Users } from "@/Containers/Users";

export const AdminDashboard: React.FC = () => {

    return (
      <MainContainer>
        <Switch>
          <Route exact path="/users" render={() => <Users />} />
        </Switch>
      </MainContainer>
    );
}