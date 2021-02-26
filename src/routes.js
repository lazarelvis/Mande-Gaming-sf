import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './hoc/layout';
import GameList from './components/Game-list';
import LeaderBoard from './components/Leaderboard';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/game-list" component={GameList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
