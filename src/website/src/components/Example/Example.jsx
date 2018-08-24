import React from 'react';
import PropTypes from 'prop-types';

import TextContainer from '../TextContainer/TextContainer';
import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const Example = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <div className={`${grid.container} ${utilities['pv-xl']}`}>
      <TextContainer>{children}</TextContainer>
    </div>
  </main>
);

Example.propTypes = {
  children: PropTypes.node,
};

Example.defaultProps = {
  children: null,
};

export default Example;
