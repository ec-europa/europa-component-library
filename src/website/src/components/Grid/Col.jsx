import React from 'react';
import PropTypes from 'prop-types';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const Col = ({ col, spacing, children }) => {
  const colClasses = col
    .split(' ')
    .map(c => grid[c])
    .join(' ');

  const spacingClasses = spacing
    .split(' ')
    .map(sp => utilities[sp])
    .join(' ');

  return (
    <div className={`${grid.col} ${colClasses} ${spacingClasses}`}>
      {children}
    </div>
  );
};

Col.propTypes = {
  col: PropTypes.string,
  spacing: PropTypes.string,
  children: PropTypes.node,
};

Col.defaultProps = {
  col: '',
  spacing: '',
  children: null,
};

export default Col;
