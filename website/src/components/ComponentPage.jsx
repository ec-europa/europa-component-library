import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from './ComponentHeader';

class ComponentPage extends Component {
  componentDidMount() {
    // Get showcase elements
    const showcases = document.getElementsByClassName("tmp-showcase");

    [].forEach.call(showcases, function (element) {
      // Create iframe
      const frame = document.createElement('iframe');
      frame.className = 'tmp-showcase__frame';
      frame.setAttribute('height', element.getAttribute('data-height'));
      frame.setAttribute('src', element.getAttribute('data-src'));

      // Add frame to showcase
      element.appendChild(frame);

      // Create preview link
      const a = document.createElement('a');
      const linkText = document.createTextNode("Full page preview");
      a.appendChild(linkText);
      a.className = 'tmp-showcase__preview-link';
      a.href = element.getAttribute('data-src');

      // Add link to showcase
      element.appendChild(a);
    });
  }

  render() {
    const component = this.props.component;
    const match = this.props.match;

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
  }
}

export default ComponentPage;
