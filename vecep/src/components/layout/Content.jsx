import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
      </Route>
    </Switch>
  </main>
);
export default Content;
