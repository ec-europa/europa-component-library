/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  id,
  disabled,
  invalid,
  name,
  placeholder,
  rows,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-text-area';

  if (invalid) classes += ' ecl-text-area--invalid';
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <textarea
      {...props}
      id={id}
      name={name || undefined}
      rows={rows}
      placeholder={placeholder || undefined}
      className={classes}
      disabled={disabled}
      {...extraAttributes}
    />
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

TextArea.defaultProps = {
  disabled: false,
  invalid: false,
  name: '',
  placeholder: '',
  rows: 4,
  extraClasses: '',
  extraAttributes: '',
};

export default TextArea;
