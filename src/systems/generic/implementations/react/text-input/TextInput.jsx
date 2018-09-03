/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidText,
  label,
  name,
  placeholder,
  type,
  className,
  ...props
}) => {
  let classes = 'ecl-text-input';

  if (invalid) classes += ' ecl-text-input--invalid';
  if (className) classes += ` ${className}`;

  return (
    <div className="ecl-form-group ecl-form-group--text-input">
      <label
        className={`ecl-form-label${invalid ? ' ecl-form-label--invalid' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        name={name || undefined}
        type={type}
        placeholder={placeholder || undefined}
        className={classes}
        disabled={disabled}
        {...props}
      />
      {invalid &&
        invalidText && <p className="ecl-feedback-message">{invalidText}</p>}
      {helperText && <p className="ecl-help-block">{helperText}</p>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  helperText: '',
  invalid: false,
  invalidText: '',
  name: '',
  placeholder: '',
  type: 'text',
  className: '',
};

export default TextInput;
