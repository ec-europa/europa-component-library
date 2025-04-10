import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router';
import PropTypes from 'prop-types';
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

const pagesToRoutes = (pages) => {
  const routes = [];
  flatDeep(pages).forEach((page) => {
    const filePath = `../pages/eu${page.key.slice(1)}`;
    page.document =
      allDocs[filePath]?.default || (() => <div>Not found: {filePath}</div>);
    const pagePath = page.attributes.url.slice(3);

    if (page.attributes && page.attributes.defaultTab) {
      // Wrap the Navigate inside a state change or effect to ensure it only runs after the initial render
      routes.push(
        <Route
          key={`${page.key}-default`}
          path={pagePath}
          element={
            <DelayedNavigate
              url={`${pagePath}${page.attributes.defaultTab}/`}
            />
          }
        />,
      );
    }

    routes.push(
      <Route
        key={page.key}
        path={pagePath}
        element={<DocPage component={page} />}
      />,
    );
  });
  return routes;
};

function DelayedNavigate({ url }) {
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    setShouldNavigate(true); // Trigger navigation after the initial render
  }, []);

  return shouldNavigate ? <Navigate to={url} replace /> : null;
}

DelayedNavigate.propTypes = {
  url: PropTypes.string.isRequired,
};

const routes = pagesToRoutes(sortedPages);

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
