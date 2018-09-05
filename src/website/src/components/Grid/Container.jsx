import React from 'react';
import PropTypes from 'prop-types';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const Container = ({ spacing, children }) => {
  const spacingClasses = spacing
    .split(' ')
    .map(sp => utilities[sp])
    .join(' ');

  return (
    <div className={`${grid.container} ${spacingClasses}`}>{children}</div>
  );
};

Container.propTypes = {
  spacing: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  spacing: '',
  children: null,
};

export default Container;
