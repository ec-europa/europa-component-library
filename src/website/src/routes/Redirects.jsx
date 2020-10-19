import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default () => (
  <Switch>
    <Redirect from="/r/ec-button" to="/ec/components/button/" />
  </Switch>
);
