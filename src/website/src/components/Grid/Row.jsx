import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import grid from './grid.scss';
import utilities from '../../styles/utilities.scss';

const Row = React.memo(({ spacing, className, children, ...props }) => {
  const spacingClasses = spacing
    .split(' ')
    .map((sp) => utilities[sp])
    .join(' ');

  const classNames = classnames(className, grid['ecl-row'], spacingClasses);

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
});

Row.propTypes = {
  spacing: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Row.defaultProps = {
  spacing: '',
  className: '',
  children: null,
};

export default Row;
