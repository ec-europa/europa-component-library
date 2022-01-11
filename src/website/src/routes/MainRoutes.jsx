import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';
import Redirects from './Redirects';

import HomePageEC from '../pages/ec/index.md';
import HomePageEU from '../pages/eu/index.md';

import Skeleton from './Skeleton';

const ECRoutes = lazy(() =>
  import(/* webpackChunkName: "ec", webpackPrefetch: true */ './Ec')
);
const EURoutes = lazy(() =>
  import(/* webpackChunkName: "eu", webpackPrefetch: true */ './Eu')
);

function WaitingEC(props) {
  return (
    <Suspense
      fallback={
        <Skeleton
          HomePage={HomePageEC}
          prefix="/ec"
          system="ec"
          title="EC Homepage"
          isLoading
        />
      }
    >
      <ECRoutes {...props} />
    </Suspense>
  );
}

function WaitingEU(props) {
  return (
    <Suspense
      fallback={
        <Skeleton
          HomePage={HomePageEU}
          prefix="/eu"
          system="eu"
          title="EU Homepage"
          isLoading
        />
      }
    >
      <EURoutes {...props} />
    </Suspense>
  );
}

function MainRoutes() {
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route strict path="/example" component={Example} />
      <Route path="/ec/" strict component={WaitingEC} />
      <Route path="/eu/" strict component={WaitingEU} />
      <Redirects />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default MainRoutes;
