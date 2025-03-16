import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Prism from 'prismjs';
import Header from './Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import Container from '../Grid/Container';
import { getPageTitle, getSectionTitle } from './utils/title';

function DocPage({ component }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        Prism.highlightAllUnder(document.querySelector('#main-content'));
      }, 100);
    }
  }, []);

  let title = getPageTitle(component);
  const sectionTitle = getSectionTitle(component);
  if (sectionTitle) {
    title += ` - ${sectionTitle}`;
  }

  return (
    <>
      <ScrollToTopOnMount />
      <Helmet title={title} />
      <Header component={component} />
      <main id="main-content" tabIndex="-1">
        <Container spacing="pv-l pv-md-3xl">
          {component.document ? (
            React.createElement(component.document)
          ) : (
            <div>Content missing for {component.key || 'unknown'}</div>
          )}
        </Container>
      </main>
    </>
  );
}

DocPage.propTypes = {
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    key: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.func,
      }),
    ),
    document: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default DocPage;
