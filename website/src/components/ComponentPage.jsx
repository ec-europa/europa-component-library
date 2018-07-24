import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from './ComponentHeader';

/*
import CodeTab from '@ecl/ec-specs-breadcrumb/docs/code.mdx';
import StyleTab from '@ecl/ec-specs-breadcrumb/docs/style.mdx';
import UsageTab from '@ecl/ec-specs-breadcrumb/docs/usage.mdx';
import AccessibilityTab from '@ecl/ec-specs-breadcrumb/docs/accessibility.mdx';
*/

const ComponentPage = ({ match, component }) => {
  return (
    <Fragment>
      <Helmet title="Breadcrumb" />
      <ComponentHeader
        match={match}
        sectionTitle={component.section}
        pageTitle={component.title}
        tabs={component.tabs}
      />
      <main id="main-content" tabIndex="-1">
        <div className="ecl-container ecl-u-pv-l ecl-editor">
          <Switch>
            {component.tabs.map(tab => (
              <Route
                exact
                path={`${match.url}/${tab.url}`}
                component={tab.component}
                key={tab.url}
              />
            ))}
            <Route
              render={() => (
                <Redirect to={`${match.url}/${component.defaultTab}`} />
              )}
            />
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

export default ComponentPage;
