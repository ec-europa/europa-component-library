import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from '../../../../components/ComponentHeader';

import CodeTab from './tabs/code';
import StyleTab from './tabs/style';
import UsageTab from './tabs/usage';
import AccessibilityTab from './tabs/accessibility';

const BreadcrumbPage = ({ match }) => {
  return (
    <Fragment>
      <Helmet title="Breadcrumb" />
      <ComponentHeader
        match={match}
        sectionTitle="Components"
        pageTitle="Breadcrumb"
      />
      <main id="main-content" tabIndex="-1">
        <div className="ecl-container">
          <Switch>
            <Route exact path={`${match.url}/code`} component={CodeTab} />
            <Route exact path={`${match.url}/style`} component={StyleTab} />
            <Route exact path={`${match.url}/usage`} component={UsageTab} />
            <Route
              exact
              path={`${match.url}/accessibility`}
              component={AccessibilityTab}
            />
            <Route render={() => <Redirect to={`${match.url}/usage`} />} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
};

export const meta = {
  url: '/ec/components/breadcrumb',
  title: 'Breadcrumb',
};

export default BreadcrumbPage;
