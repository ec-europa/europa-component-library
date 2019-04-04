import React from 'react';
import { Route } from 'react-router-dom';
import '@ecl/eu-preset-full/dist/styles/ecl-eu-preset-full.css';
import merge from 'deepmerge';

// Helpers
import sortPages from '../utils/nav-sort';

// Static routes
import HomePage from '../pages/eu/index.md';

import DocPage from '../components/DocPage/DocPage';

import Skeleton from './Skeleton';

const euPages = require.context('../pages/eu', true, /\.mdx?$/);

const extractPageInfo = (page, key) => {
  // Add url to pages
  const url = `/eu/${key
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
  ...euPages.keys().map(key => {
    const page = euPages(key);
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

const EURoutes = () => (
  <Skeleton
    HomePage={HomePage}
    prefix="/eu"
    title="EU Homepage"
    pages={sortedPages[0].children}
    routes={pagesToRoutes(sortedPages)}
  />
);

export default EURoutes;
