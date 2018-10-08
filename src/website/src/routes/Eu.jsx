import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import slugify from 'slugify';

import EUStyles from '@ecl/eu-preset-website/dist/styles/ecl-eu-preset-website.css';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/eu/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

const euPages = require.context('../pages/eu', true, /config\.js$/);
const euSpecs = require.context(
  '../../../systems/eu/specs',
  true,
  /config\.js$/
);

const slug = s => slugify(s, { lower: true, remove: /'/gi });

const pages = [
  ...euPages.keys().map(key => euPages(key).default),
  ...euSpecs.keys().map(key => euSpecs(key).default),
];

const newPages = {};
pages.forEach(p => {
  if (!p.section) {
    newPages[p.title] = p;
    newPages[p.title].url = `/eu/${slug(p.title)}`;
    return;
  }

  const sections = p.section.split('/');

  let parentSection = newPages;
  sections.forEach((s, index) => {
    if (!parentSection[s]) {
      parentSection[s] = {};
    }

    if (index === sections.length - 1) {
      parentSection[s][p.title] = p;

      // Inject url
      parentSection[s][p.title].url = `/eu/${p.section
        .split('/')
        .map(sec => slug(sec))
        .join('/')}/${slug(p.title)}`;

      return;
    }

    parentSection = parentSection[s];
  });
});

class EURoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen:
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >
        1140,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    EUStyles.use();
  }

  componentWillUnmount() {
    EUStyles.unuse();
  }

  toggleSidebar() {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  render() {
    const { sidebarOpen } = this.state;

    return (
      <Fragment>
        <Navigation
          pages={newPages}
          prefix="/eu"
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
        />
        <MainContainer sidebarOpen={sidebarOpen}>
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

export default EURoutes;
