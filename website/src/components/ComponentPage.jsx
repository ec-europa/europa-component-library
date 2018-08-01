import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from './ComponentHeader';

const ComponentPage = ({ match, component }) => {
  return (
    <Fragment>
      <Helmet title={component.title} />
      <ComponentHeader
        match={match}
        sectionTitle={component.section}
        pageTitle={component.title}
        tabs={component.tabs}
      />
      <main id="main-content" tabIndex="-1">
        <div className="custom-container ecl-u-pv-l ecl-editor">
          {component.page ? (
            <component.page />
          ) : (
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
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default ComponentPage;
