import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Label({ variant, label, className, ...props }) {
  const classNames = classnames(className, 'ecl-label', {
    [`ecl-label--${variant}`]: variant,
  });

  return (
    <span {...props} className={classNames}>
      {label}
    </span>
  );
}

Label.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  variant: 'low',
  label: '',
  className: '',
};

export default Label;
