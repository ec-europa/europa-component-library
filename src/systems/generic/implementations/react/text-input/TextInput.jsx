/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  disabled,
  invalid,
  name,
  placeholder,
  type,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-text-input';

  if (invalid) classes += ' ecl-text-input--invalid';
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <input
      {...props}
      id={id}
      name={name || undefined}
      type={type}
      placeholder={placeholder || undefined}
      className={classes}
      disabled={disabled}
      {...extraAttributes}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  invalid: false,
  name: '',
  placeholder: '',
  type: 'text',
  extraClasses: '',
  extraAttributes: '',
};

export default TextInput;
