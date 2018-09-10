import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Grid/Container';

const Example = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <Container spacing="pv-xl">{children}</Container>
  </main>
);

Example.propTypes = {
  children: PropTypes.node,
};

Example.defaultProps = {
  children: null,
};

export default Example;
