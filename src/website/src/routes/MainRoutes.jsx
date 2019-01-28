import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';

const ECRoutes = lazy(() => import('./Ec'));
const EURoutes = lazy(() => import('./Eu'));

const MainRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route strict path="/example" component={Example} />
      <Route path="/ec/" strict component={ECRoutes} />
      <Route path="/eu/" strict component={EURoutes} />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default MainRoutes;
