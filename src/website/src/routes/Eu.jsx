import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import '@ecl/eu-preset-full/dist/styles/ecl-eu-preset-full.css';
import merge from 'deepmerge';

// Helpers
import sortPages from '../utils/nav-sort';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/eu/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

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
        isTab: key.indexOf('docs') >= 0,
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

const loopThroughPages = (pages, level = 0) => {
  pages.forEach(page => {
    if (
      page.children &&
      Array.isArray(page.children) &&
      page.children.length > 0
    ) {
      loopThroughPages(page.children, level + 1);
    }
  });

  sortPages(pages, level);
};

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

class EURoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen:
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >
        1140,
      forceRefresh: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('eu');

    // Force refresh if is mounted on a real client (two-pass rendering)
    this.setState({
      forceRefresh: navigator.userAgent !== 'ReactSnap',
    });
  }

  componentWillUnmount() {
    document.body.classList.remove('eu');
  }

  toggleSidebar() {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  render() {
    const { sidebarOpen, forceRefresh } = this.state;

    return (
      <Fragment>
        <Navigation
          pages={sortedPages[0].children}
          prefix="/eu"
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
          forceRefresh={forceRefresh}
        />
        <MainContainer sidebarOpen={sidebarOpen} forceRefresh={forceRefresh}>
          <Switch>
            <Route
              exact
              strict
              path="/eu/"
              component={() => (
                <SimplePage>
                  <Helmet title="EU Homepage" />
                  <HomePage />
                </SimplePage>
              )}
            />
            {pagesToRoutes(sortedPages)}
            <Route component={PageNotFound} />
          </Switch>
        </MainContainer>
      </Fragment>
    );
  }
}

export default EURoutes;
