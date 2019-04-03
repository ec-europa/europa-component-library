import React from 'react';
import PropTypes from 'prop-types';

import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import Container from '../Grid/Container';

const HomePage = React.memo(({ children }) => (
  <main id="main-content" tabIndex="-1">
    <ScrollToTopOnMount />
    <Container spacing="pv-2xl">{children}</Container>
  </main>
));

HomePage.propTypes = {
  children: PropTypes.node,
};

HomePage.defaultProps = {
  children: null,
};

export default HomePage;
