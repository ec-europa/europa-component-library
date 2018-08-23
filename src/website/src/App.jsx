import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import 'prismjs/themes/prism.css';

// Hacks and custom styles
import './hack.css';
import './styles/custom-grid.css';
import './styles/app.scss';

// Static routes
import HomePage from './routes/index';
import Example from './routes/example';
import PageNotFound from './routes/404';
import ECRoutes from './routes/ec';
import EURoutes from './routes/eu';

const App = () => (
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Fragment>
      <Helmet
        titleTemplate="%s - ECL 2.0"
        defaultTitle="Europa Component Library"
      />
      <Switch>
        <Route exact strict path="/" component={HomePage} />
        <Route strict path="/example" component={Example} />
        <Route path="/ec/" strict component={ECRoutes} />
        <Route path="/eu/" strict component={EURoutes} />
        <Route component={PageNotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default hot(module)(App);
