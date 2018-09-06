import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import grid from './grid.scss';
import utilities from '../../styles/utilities.scss';

const Col = ({ col, spacing, className, children, ...props }) => {
  const colClasses = col
    .split(' ')
    .map(c => grid[c])
    .join(' ');

  const spacingClasses = spacing
    .split(' ')
    .map(sp => utilities[sp])
    .join(' ');

  const classNames = classnames(
    className,
    grid.col,
    colClasses,
    spacingClasses
  );

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};

Col.propTypes = {
  col: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Col.defaultProps = {
  col: '',
  spacing: '',
  className: '',
  children: null,
};

export default Col;
