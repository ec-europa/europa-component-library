import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';

class ComponentPage extends Component {
  componentDidMount() {
    // Get showcase elements
    const showcases = document.querySelectorAll('.tmp-showcase');

    showcases.forEach(element => {
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
  }

  render() {
    const { component } = this.props;
    const { match } = this.props;

    return (
      <Fragment>
        <Helmet title={component.title} />
        <Header
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

ComponentPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.element,
      })
    ),
    defaultTab: PropTypes.string,
    page: PropTypes.element,
  }),
};

ComponentPage.defaultProps = {
  component: {},
};

export default ComponentPage;
