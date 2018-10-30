import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Header from './Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import Container from '../Grid/Container';

const DocPage = React.memo(({ component }) => (
  <Fragment>
    <ScrollToTopOnMount />
    <Helmet title={component.title} />
    <Header
      component={component}
      sectionTitle={component.attributes.group || component.attributes.section}
      pageTitle={component.attributes.title}
      tabs={component.tabs}
    />
    <main id="main-content" tabIndex="-1">
      <Container spacing="pv-2xl">
        {component.document ? (
          <component.document />
        ) : (
          <Switch>
            {component.tabs.map(tab => (
              <Route
                exact
                strict
                path={`${component.url}${tab.url}/`}
                component={tab.component}
                key={tab.url}
              />
            ))}
            <Route
              render={() => (
                <Redirect to={`${component.url}${component.defaultTab}/`} />
              )}
            />
          </Switch>
        )}
      </Container>
    </main>
  </Fragment>
));

DocPage.propTypes = {
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.func,
      })
    ),
    defaultTab: PropTypes.string,
    document: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default withRouter(DocPage);
