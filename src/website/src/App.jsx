import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import customComponents from './website-components/customComponents';
import MainRoutes from './routes/MainRoutes';
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'prismjs/themes/prism.css';

export default function App({ url } = {}) {
  const Router = typeof window !== 'undefined' ? BrowserRouter : StaticRouter;
  const routerProps =
    typeof window !== 'undefined'
      ? { basename: process.env.PUBLIC_URL || '' } // Client-side base
      : { location: url }; // SSR/prerendering

  return (
    <MDXProvider components={customComponents}>
      <Router {...routerProps}>
        <Helmet
          titleTemplate="%s - ECL v5"
          defaultTitle="Europa Component Library"
        >
          <meta
            name="Description"
            content="Europa Component Library (ECL) documentation website"
          />
        </Helmet>
        <MainRoutes />
      </Router>
    </MDXProvider>
  );
}

App.defaultProps = {
  url: '',
};

App.propTypes = {
  url: PropTypes.string,
};
