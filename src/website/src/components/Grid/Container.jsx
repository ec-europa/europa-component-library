import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import grid from './grid.scss';
import utilities from '../../styles/utilities.scss';

const Container = React.memo(({ spacing, className, children, ...props }) => {
  const spacingClasses = spacing
    .split(' ')
    .map((sp) => utilities[sp])
    .join(' ');

  const classNames = classnames(
    className,
    grid['ecl-container'],
    spacingClasses
  );

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
});

Container.propTypes = {
  spacing: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  spacing: '',
  className: '',
  children: null,
};

export default Container;
