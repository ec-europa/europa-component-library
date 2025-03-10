// src/website/src/routes/Ec.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import sortPages from '../utils/nav-sort';
import HomePage from '../pages/ec/index.md';
import DocPage from '../components/DocPage/DocPage';
import Skeleton from './Skeleton';
import meta from '../../prebuild/meta-ec.json';

const sortedPages = sortPages(meta);
const mdxFiles = import.meta.glob('../pages/ec/**/*.mdx', { eager: true });
const mdFiles = import.meta.glob('../pages/ec/**/*.md', { eager: true });
const allDocs = { ...mdxFiles, ...mdFiles };

function flatDeep(pages) {
  return pages.reduce((all, page) => {
    all.push(page);
    if (page.children) all.push(...flatDeep(page.children));
    return all;
  }, []);
}

const pagesToRoutes = (pages, prefix = '/ec') => {
  const routes = [];
  flatDeep(pages).forEach((page) => {
    const filePath = `../pages/ec${page.key.slice(1)}`;
    page.document =
      allDocs[filePath]?.default || (() => <div>Not found: {filePath}</div>);

    // Smart URL—handle /docs/ only when present
    let url = `${prefix}${page.key.replace(/^\.\//, '/').replace(/\/index\.(md|mdx)$/, '')}`;
    if (url.includes('/docs/')) {
      url = url.replace(/\/docs\//, '/').replace(/\.(md|mdx)$/, '');
    }
    url = url.endsWith('/') ? url : `${url}/`;

    if (page.attributes && page.attributes.defaultTab) {
      routes.push(
        <Redirect
          key={`${page.key}-default`}
          from={url}
          to={`${url}${page.attributes.defaultTab}/`}
          exact
        />,
      );
    }
    routes.push(
      <Route
        key={page.key}
        path={url}
        exact
        render={() => <DocPage component={page} />}
      />,
    );
  });
  return routes;
};

const routes = pagesToRoutes(sortedPages, '/ec');

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
