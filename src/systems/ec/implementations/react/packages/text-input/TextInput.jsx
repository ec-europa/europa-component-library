/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  variant,
  id,
  name,
  placeholder,
  typeAttribute,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-text-input';
  if (variant) classes += ` ecl-text-input--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <input
      {...props}
      id={id}
      name={name}
      type={typeAttribute}
      placeholder={placeholder}
      className={classes}
      {...extraAttributes}
    />
  );
};

TextInput.propTypes = {
  variant: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  typeAttribute: PropTypes.string,
  placeholder: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

TextInput.defaultProps = {
  variant: '',
  id: '',
  name: '',
  typeAttribute: '',
  placeholder: '',
  extraClasses: '',
  extraAttributes: '',
};

export default TextInput;
