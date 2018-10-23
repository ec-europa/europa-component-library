import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';

const ECRoutes = Loadable({
  loader: () => import('./Ec'),
  loading: () => null,
});

const EURoutes = Loadable({
  loader: () => import('./Eu'),
  loading: () => null,
});

class MainRoutes extends React.Component {
  componentDidMount() {
    // ECRoutes.preload();
    // EURoutes.preload();
  }

  render() {
    return (
      <Switch>
        <Route exact strict path="/" component={HomePage} />
        <Route strict path="/example" component={Example} />
        <Route path="/ec/" strict component={ECRoutes} />
        <Route path="/eu/" strict component={EURoutes} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default MainRoutes;
