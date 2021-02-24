import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './hoc/layout';
import GameList from './components/Game-list';

import Home from './components/Home';
import Layout from './hoc/layout';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/game-list" component={GameList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
