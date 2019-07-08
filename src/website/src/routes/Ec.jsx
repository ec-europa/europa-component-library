import React from 'react';
import { Route } from 'react-router-dom';
import merge from 'deepmerge';

// Helpers
import sortPages from '../utils/nav-sort';

// Static routes
import HomePage from '../pages/ec/index.md';

import DocPage from '../components/DocPage/DocPage';

import Skeleton from './Skeleton';

const ecPages = require.context('../pages/ec', true, /\.mdx?$/);

const extractPageInfo = (page, key) => {
  // Add url to pages
  const url = `/ec/${key
    .replace('docs', '')
    .replace('index', '')
    .replace('.mdx', '')
    .replace('.md', '')
    .replace('./', '')}/`.replace('//', '/');

  return {
    key,
    attributes: merge.all([
      {},
      {
        url,
        isTab: key.indexOf('docs') >= 0, // eslint-disable-line unicorn/prefer-includes
      },
      page.attributes,
    ]),
    document: page.default,
  };
};

const allPages = [
  ...ecPages.keys().map(key => {
    const page = ecPages(key);
    return extractPageInfo(page, key);
  }),
];

const sortedPages = sortPages(allPages);

function flatDeep(pages) {
  return pages.reduce((acc, page) => {
    let acc2 = acc;
    if (page.children && page.children.length > 0) {
      acc2 = acc.concat(flatDeep(page.children));
    }

    return acc2.concat(page);
  }, []);
}

const pagesToRoutes = pages =>
  flatDeep(pages).map(page => (
    <Route
      key={page.attributes.url}
      path={page.attributes.url}
      exact
      strict
      render={() => <DocPage component={page} />}
    />
  ));

const ECRoutes = () => (
  <Skeleton
    HomePage={HomePage}
    prefix="/ec"
    title="EC Homepage"
    system="ec"
    pages={sortedPages[0].children}
    routes={pagesToRoutes(sortedPages)}
  />
);

export default ECRoutes;
