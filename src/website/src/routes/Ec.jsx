// src/website/src/routes/ECRoutes.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import sortPages from '../utils/nav-sort';
import HomePage from '../pages/ec/index.md';
import DocPage from '../components/DocPage/DocPage';
import Skeleton from './Skeleton';
import meta from '../../prebuild/meta-ec.json'; // Import JSON

const sortedPages = sortPages(meta);

function flatDeep(pages) {
  return pages.reduce((all, page) => {
    all.push(page);
    if (page.children) all.push(...flatDeep(page.children));
    return all;
  }, []);
}

const pagesToRoutes = (pages) => {
  const routes = [];
  flatDeep(pages).forEach((page) => {
    page.document = React.lazy(() => import(`../pages/ec${page.key.slice(1)}`));
    if (page.attributes && page.attributes.defaultTab) {
      routes.push(
        <Redirect
          key={`${page.key}-default`}
          from={page.attributes.url}
          to={`${page.attributes.url}${page.attributes.defaultTab}/`}
          exact
          strict
        />,
      );
    }
    routes.push(
      <Route
        key={page.key}
        path={page.attributes.url}
        exact
        strict
        render={() => <DocPage component={page} />}
      />,
    );
  });
  return routes;
};

const routes = pagesToRoutes(sortedPages);

export default function ECRoutes() {
  return (
    <Skeleton
      HomePage={HomePage}
      prefix="/ec"
      title="EC Homepage"
      system="ec"
      pages={sortedPages[0].children}
      routes={routes}
    />
  );
}