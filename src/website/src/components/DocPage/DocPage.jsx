import React, { Component, Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import Prism from 'prismjs';

import Header from './Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import Container from '../Grid/Container';

import mdStyles from '../../styles/markdown.scss';

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
            <Suspense
              fallback={
                <h2 className={mdStyles.h4}>Loading, please wait...</h2>
              }
            >
              {component.document && <component.document />}
            </Suspense>
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
    document: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default withRouter(DocPage);
