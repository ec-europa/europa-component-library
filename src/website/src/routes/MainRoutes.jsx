// src/website/src/routes/MainRoutes.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';
import Redirects from './Redirects';
import ECRoutes from './Ec';
import EURoutes from './Eu';

export default function MainRoutes() {
  console.log('MainRoutes Rendering');
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route strict path="/example" component={Example} />
      <Route path="/ec" component={ECRoutes} /> {/* No trailing slash */}
      <Route path="/eu" component={EURoutes} /> {/* No trailing slash */}
      <Redirects />
      <Route render={({ location }) => {
        console.log('MainRoutes 404:', location.pathname);
        return <PageNotFound />;
      }} />
    </Switch>
  );
}