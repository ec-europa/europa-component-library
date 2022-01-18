import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function UnorderedList({ variant, className, ...props }) {
  const classNames = classnames(className, 'ecl-unordered-list', {
    [`ecl-unordered-list--${variant}`]: variant,
  });

  return <ul {...props} className={classNames} />;
}

UnorderedList.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

UnorderedList.defaultProps = {
  variant: '',
  className: '',
};

export default UnorderedList;
