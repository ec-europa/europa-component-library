import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import grid from './grid.scss';
import utilities from '../../styles/utilities.scss';

const Col = React.memo(
  ({ col, spacing, flex, className, children, ...props }) => {
    const colClasses = col
      .split(' ')
      .map(c => grid[`ecl-col-${c}`])
      .join(' ');

    const spacingClasses = spacing
      .split(' ')
      .map(sp => utilities[sp])
      .join(' ');

    const classNames = classnames(
      className,
      grid['ecl-col'],
      colClasses,
      spacingClasses,
      { [utilities['d-flex']]: flex }
    );

    return (
      <div {...props} className={classNames}>
        {children}
      </div>
    );
  }
);

Col.propTypes = {
  col: PropTypes.string,
  spacing: PropTypes.string,
  flex: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Col.defaultProps = {
  col: '',
  spacing: '',
  flex: false,
  className: '',
  children: null,
};

export default Col;
