import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { /* Route, Redirect, Switch, */ withRouter } from 'react-router-dom';
import Prism from 'prismjs';

import Header from './Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import Container from '../Grid/Container';

import { getPageTitle, getSectionTitle } from './utils/title';

class DocPage extends Component {
  componentDidMount() {
    Prism.highlightAllUnder(document.querySelector('#main-content'));
  }

  render() {
    const { component } = this.props;

    let title = getPageTitle(component);

    const sectionTitle = getSectionTitle(component);
    if (sectionTitle) {
      title += ` - ${sectionTitle}`;
    }

    return (
      <Fragment>
        <ScrollToTopOnMount />
        <Helmet title={title} />
        <Header component={component} />
        <main id="main-content" tabIndex="-1">
          <Container spacing="pv-l pv-md-3xl">
            {component.document && <component.document />}
          </Container>
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
    document: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default withRouter(DocPage);
