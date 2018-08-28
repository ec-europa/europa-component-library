/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Label = ({
  children,
  invalid,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-form-label';

  if (invalid) classes += ' ecl-form-label--invalid';
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <label {...props} className={classes} {...extraAttributes}>
      {children}
    </label>
  );
};

Label.propTypes = {
  invalid: PropTypes.bool,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Label.defaultProps = {
  invalid: false,
  extraClasses: '',
  extraAttributes: '',
};

export default Label;
