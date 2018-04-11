import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SampleComponent from './SampleComponent';

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route component={SampleComponent} />
      </Switch>
    </div>
  </Router>
);

export default Root;
