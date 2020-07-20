import React from 'react';
import { MainContainer } from "@/Layout/MainContainer";
import { Switch, Route } from "react-router-dom";
import { TestsScreen } from "@/Screens/TestsScreen";
import { PassTest } from "@/Containers/PassTest";
import { ShowUserPosts } from "@/Containers/ShowUserPosts";
import { TrevogiBeka } from "@/Containers/AppTests";

export const UserDashboard: React.FC = () => {

    return (
      <MainContainer>
        <Switch>
          <Route exact path="/tests" render={() => <TestsScreen />} />
          <Route path="/tests/shkalaDepressiiBeka" render={() => <PassTest testType="shkalaDepressiiBeka" />} />
          <Route path="/tests/shkalaTrevojnBeka" render={() => <TrevogiBeka testType="shkalaTrevojnBeka" />} />
          <Route exact path="/mytests" component={ShowUserPosts} />
        </Switch>
      </MainContainer>
    );
}