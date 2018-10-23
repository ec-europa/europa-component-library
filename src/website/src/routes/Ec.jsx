import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import '@ecl/ec-preset-full/dist/styles/ecl-ec-preset-full.css';
import slugify from 'slugify';

// Helpers
import sortPages from '../utils/nav-sort';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/ec/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

const ecPages = require.context('../pages/ec', true, /config\.js$/);
const ecSpecs = require.context(
  '../../../systems/ec/specs',
  true,
  /config\.js$/
);

const slug = (s = '') => slugify(s, { lower: true, remove: /'/gi });

const pages = [
  ...ecPages.keys().map(key => ecPages(key).default),
  ...ecSpecs.keys().map(key => ecSpecs(key).default),
];

// Add URLs to pages
pages.forEach(p => {
  // eslint-disable-next-line no-param-reassign
  p.url = `/ec/${
    p.section
      ? `${p.section
          .split('/')
          .map(sec => slug(sec))
          .join('/')}/`
      : ''
  }${p.group ? `${slug(p.group)}/` : ''}${slug(p.title)}`;
});

const sortedPages = sortPages(pages);

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
          pages={sortedPages}
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
            {pages.map(page => (
              <Route
                key={page.url}
                path={`${page.url}/`}
                strict
                render={() => <DocPage component={page} />}
              />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </MainContainer>
      </Fragment>
    );
  }
}

export default ECRoutes;
