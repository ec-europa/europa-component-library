import React from 'react';
import PropTypes from 'prop-types';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const Row = ({ spacing, children }) => {
  const spacingClasses = spacing
    .split(' ')
    .map(sp => utilities[sp])
    .join(' ');

  return <div className={`${grid.row} ${spacingClasses}`}>{children}</div>;
};

Row.propTypes = {
  spacing: PropTypes.string,
  children: PropTypes.node,
};

Row.defaultProps = {
  spacing: '',
  children: null,
};

export default Row;
