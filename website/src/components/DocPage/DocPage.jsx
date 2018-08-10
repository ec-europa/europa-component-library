import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';

const replaceByFrame = () => {
  // Get showcase elements
  const showcases = document.querySelectorAll('.tmp-showcase');

  [].forEach.call(showcases, element => {
    // Create iframe
    const frame = document.createElement('iframe');
    frame.className = 'tmp-showcase__frame';
    frame.setAttribute('height', element.getAttribute('data-height'));
    frame.setAttribute('src', element.getAttribute('data-src'));

    // Add frame to showcase
    element.appendChild(frame);

    // Create preview link
    const a = document.createElement('a');
    const linkText = document.createTextNode('Full page preview');
    a.appendChild(linkText);
    a.className = 'tmp-showcase__preview-link';
    a.href = element.getAttribute('data-src');

    // Add link to showcase
    element.appendChild(a);
  });
};

class DocPage extends Component {
  componentDidMount() {
    replaceByFrame();
  }

  componentDidUpdate() {
    replaceByFrame();
  }

  render() {
    const { component } = this.props;
    return (
      <Fragment>
        <Helmet title={component.title} />
        <Header
          component={component}
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
                    strict
                    path={`${component.url}/${tab.url}/`}
                    component={tab.component}
                    key={tab.url}
                  />
                ))}
                <Route
                  render={() => (
                    <Redirect
                      to={`${component.url}/${component.defaultTab}/`}
                    />
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
    page: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default DocPage;
