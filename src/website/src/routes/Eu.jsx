import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import meta from '../preval/get-meta-eu';

// Helpers
import sortPages from '../utils/nav-sort';

// Static routes
import HomePage from '../pages/eu/index.mdx';

import DocPage from '../components/DocPage/DocPage';

import Skeleton from './Skeleton';

const sortedPages = sortPages(meta);

function flatDeep(pages) {
  return pages.reduce((acc, page) => {
    let acc2 = acc;
    if (page.children && page.children.length > 0) {
      acc2 = acc.concat(flatDeep(page.children));
    }

    return acc2.concat(page);
  }, []);
}

const pagesToRoutes = (pages) =>
  flatDeep(pages).map((page) => {
    page.document = React.lazy(() =>
      import(
        /* webpackInclude: /\.mdx?$/ */
        /* webpackChunkName: "eu-pages" */
        /* webpackMode: "lazy-once" */
        /* webpackPreload: true */
        `../pages/eu${page.key.slice(1)}`
      )
    );

    if (page.attributes.defaultTab) {
      return (
        <Redirect
          key={page.attributes.url}
          from={page.attributes.url}
          to={`${page.attributes.url}${page.attributes.defaultTab}/`}
          exact
          strict
        />
      );
    }

    return (
      <Route
        key={page.attributes.url}
        path={page.attributes.url}
        exact
        strict
        render={() => <DocPage component={page} />}
      />
    );
  });

const routes = pagesToRoutes(sortedPages);

const EURoutes = () => (
  <Skeleton
    HomePage={HomePage}
    prefix="/eu"
    title="EU Homepage"
    system="eu"
    pages={sortedPages[0].children}
    routes={routes}
  />
);

export default EURoutes;
