import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import '@ecl/ec-preset-full/dist/styles/ecl-ec-preset-full.css';
// import slugify from 'slugify';
import merge from 'deepmerge';

// Helpers
import sortPages from '../utils/nav-sort2';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/ec/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

const ecPages = require.context('../pages/ec', true, /\.mdx?$/);
const ecSpecs = require.context('../../../systems/ec/specs', true, /\.mdx?$/);

// const slug = (s = '') => slugify(s, { lower: true, remove: /'/gi });

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
        title: key.split('/').pop(),
        isTab: key.indexOf('docs') >= 0,
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
  ...ecSpecs.keys().map(key => {
    const page = ecSpecs(key);
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

class ECRoutes extends Component {
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
    document.body.classList.add('ec');
    // Force refresh if is mounted on a real client (two-pass rendering)
    this.setState({
      forceRefresh: navigator.userAgent !== 'ReactSnap',
    });
  }

  componentWillUnmount() {
    document.body.classList.remove('ec');
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
          prefix="/ec"
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
          forceRefresh={forceRefresh}
        />
        <MainContainer sidebarOpen={sidebarOpen} forceRefresh={forceRefresh}>
          <Switch>
            <Route
              exact
              strict
              path="/ec/"
              component={() => (
                <SimplePage>
                  <Helmet title="EC Homepage" />
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

export default ECRoutes;
