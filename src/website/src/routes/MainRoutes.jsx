import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';

import HomePageEC from '../pages/ec/index.md';
import HomePageEU from '../pages/eu/index.md';

import Skeleton from './Skeleton';

const ECRoutes = lazy(() => import('./Ec'));
const EURoutes = lazy(() => import('./Eu'));

const WaitingEC = props => (
  <Suspense
    fallback={
      <Skeleton
        HomePage={HomePageEC}
        prefix="/ec"
        title="EC Homepage"
        isLoading
      />
    }
  >
    <ECRoutes {...props} />
  </Suspense>
);

const WaitingEU = props => (
  <Suspense
    fallback={
      <Skeleton
        HomePage={HomePageEU}
        prefix="/eu"
        title="EU Homepage"
        isLoading
      />
    }
  >
    <EURoutes {...props} />
  </Suspense>
);

const MainRoutes = () => (
  <Switch>
    <Route exact strict path="/" component={HomePage} />
    <Route strict path="/example" component={Example} />
    <Route path="/ec/" strict component={WaitingEC} />
    <Route path="/eu/" strict component={WaitingEU} />
    <Route component={PageNotFound} />
  </Switch>
);

export default MainRoutes;
