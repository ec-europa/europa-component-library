import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';
import Redirects from './Redirects';

import HomePageEC from '../pages/ec/index.mdx';
import HomePageEU from '../pages/eu/index.mdx';

import Skeleton from './Skeleton';

const ECRoutes = lazy(() =>
  import(/* webpackChunkName: "ec", webpackPrefetch: true */ './Ec')
);
const EURoutes = lazy(() =>
  import(/* webpackChunkName: "eu", webpackPrefetch: true */ './Eu')
);

const WaitingEC = (props) => (
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

const WaitingEU = (props) => (
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

const MainRoutes = () => (
  <Switch>
    <Route exact strict path="/" component={HomePage} />
    <Route strict path="/example" component={Example} />
    <Route path="/ec/" strict component={WaitingEC} />
    <Route path="/eu/" strict component={WaitingEU} />
    <Redirects />
    <Route component={PageNotFound} />
  </Switch>
);

export default MainRoutes;
