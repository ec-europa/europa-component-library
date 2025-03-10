import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';
import ECRoutes from './Ec';
import EURoutes from './Eu';

export default function MainRoutes() {
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route strict path="/example" component={Example} />
      <Route path="/ec" component={ECRoutes} />
      <Route path="/eu" component={EURoutes} />
      <Route render={() => <PageNotFound />} />
    </Switch>
  );
}
