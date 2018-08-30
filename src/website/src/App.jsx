import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Global styles
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'prismjs/themes/prism.css';

// Global scripts
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

// Static routes
import HomePage from './routes/index';
import Example from './routes/example';
import PageNotFound from './routes/404';
import ECRoutes from './routes/ec';
import EURoutes from './routes/eu';

class App extends React.Component {
  componentDidMount() {
    svg4everybody();
  }

  render() {
    return (
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
  }
}

export default hot(module)(App);
