// src/website/src/App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, StaticRouter } from 'react-router-dom'; // React 17
import { MDXProvider } from '@mdx-js/react';
import customComponents from './customComponents';
import MainRoutes from './routes/MainRoutes';
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'prismjs/themes/prism.css';

export default function App({ url } = {}) {
  // Use StaticRouter for SSR/prerender, BrowserRouter for client
  const Router = typeof window !== 'undefined' ? BrowserRouter : StaticRouter;
  const routerProps = typeof window !== 'undefined' ? {} : { location: url };

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