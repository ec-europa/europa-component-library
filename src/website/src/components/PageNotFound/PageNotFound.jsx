import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Grid/Container';

const PageNotFound = React.memo(({ children }) => (
  <main id="main-content" tabIndex="-1">
    <Container spacing="pv-xl">{children}</Container>
  </main>
));

PageNotFound.propTypes = {
  children: PropTypes.node,
};

PageNotFound.defaultProps = {
  children: null,
};

export default PageNotFound;
