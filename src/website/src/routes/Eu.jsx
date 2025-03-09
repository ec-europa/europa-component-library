// src/website/src/routes/Eu.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import sortPages from '../utils/nav-sort';
import HomePage from '../pages/eu/index.md';
import DocPage from '../components/DocPage/DocPage';
import Skeleton from './Skeleton';
import meta from '../../prebuild/meta-eu.json';

const sortedPages = sortPages(meta);
const mdxFiles = import.meta.glob('../pages/eu/**/*.mdx', { eager: true });
const mdFiles = import.meta.glob('../pages/eu/**/*.md', { eager: true });
const allDocs = { ...mdxFiles, ...mdFiles };

function flatDeep(pages) {
  return pages.reduce((all, page) => {
    all.push(page);
    if (page.children) all.push(...flatDeep(page.children));
    return all;
  }, []);
}

const pagesToRoutes = (pages, prefix = '/eu') => {
  const routes = [];
  flatDeep(pages).forEach((page) => {
    const filePath = `../pages/eu${page.key.slice(1)}`;
    page.document = allDocs[filePath]?.default || (() => <div>Not found: {filePath}</div>);

    // Smart URL—handle /docs/ only when present
    let url = `${prefix}${page.key.replace(/^\.\//, '/').replace(/\/index\.(md|mdx)$/, '')}`;
    if (url.includes('/docs/')) {
      url = url.replace(/\/docs\//, '/').replace(/\.(md|mdx)$/, '');
    }
    url = url.endsWith('/') ? url : `${url}/`;

    console.log(`Page Key: ${page.key}, URL: ${url}, Doc: ${!!page.document}`);

    if (page.attributes && page.attributes.defaultTab) {
      routes.push(
        <Redirect
          key={`${page.key}-default`}
          from={url}
          to={`${url}${page.attributes.defaultTab}/`}
          exact
        />
      );
    }
    routes.push(
      <Route
        key={page.key}
        path={url}
        exact
        render={() => {
          console.log(`Rendering DocPage for: ${url}`);
          return <DocPage component={page} />;
        }}
      />
    );
  });
  return routes;
};
const routes = pagesToRoutes(sortedPages, '/eu');

export default function EURoutes() {
  return (
    <Skeleton
      HomePage={HomePage}
      prefix="/eu"
      title="EU Homepage"
      system="eu"
      pages={sortedPages[0].children}
      routes={routes}
    />
  );
}