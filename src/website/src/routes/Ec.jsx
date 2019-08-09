import React from 'react';
import { Route } from 'react-router-dom';
import { parse } from 'flatted/esm';
import meta from '../preval/get-meta-ec';
import HomePage from '../pages/ec/index.md';
import DocPage from '../components/DocPage/DocPage';
import Skeleton from './Skeleton';

const ecPages = require.context('../pages/ec', true, /\.mdx?$/, 'lazy');

const sortedPages = parse(meta);

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
  flatDeep(pages).map(page => {
    // eslint-disable-next-line no-param-reassign
    page.document = React.lazy(() => ecPages(page.key));

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
