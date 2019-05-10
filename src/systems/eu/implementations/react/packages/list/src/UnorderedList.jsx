import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const UnorderedList = ({ variant, children, className, ...props }) => {
  const classNames = classnames(className, 'ecl-unordered-list', {
    [`ecl-unordered-list--${variant}`]: variant,
  });

  return (
    <ul {...props} className={classNames}>
      {children}
    </ul>
  );
};

UnorderedList.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

UnorderedList.defaultProps = {
  variant: '',
  children: '',
  className: '',
};

export default UnorderedList;
