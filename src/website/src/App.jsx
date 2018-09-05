import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MDXProvider } from '@mdx-js/tag';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

// Global styles
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'prismjs/themes/prism.css';
import styles from './styles/markdown.scss';

// Static routes
import HomePage from './routes/index';
import Example from './routes/example';
import PageNotFound from './routes/404';
import ECRoutes from './routes/ec';
import EURoutes from './routes/eu';

/* eslint-disable react/prop-types */
const customComponents = {
  h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
  h5: ({ children }) => <h5 className={styles.h5}>{children}</h5>,
  p: ({ children }) => <p className={styles.p}>{children}</p>,
  ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  img: ({ alt, src }) => (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img alt={alt} src={src} className={styles.img} />
    </a>
  ),
};
/* eslint-enable react/prop-types */

class App extends React.Component {
  componentDidMount() {
    svg4everybody({
      validate(src) {
        return src && src.indexOf('#') !== 0;
      },
    });
  }

  render() {
    return (
      <MDXProvider components={customComponents}>
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
      </MDXProvider>
    );
  }
}

export default hot(module)(App);
