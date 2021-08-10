import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/contents/Home';

const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
    </Switch>
  </main>
);
export default Content;
