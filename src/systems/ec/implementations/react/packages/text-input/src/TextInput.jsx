import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  hideLabel,
  name,
  placeholder,
  type,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-text-input', {
    'ecl-text-input--invalid': invalid,
  });

  return (
    <div className="ecl-form-group ecl-form-group--text-input">
      {label && (
        <label
          className={classnames('ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--hidden': hideLabel,
          })}
          htmlFor={id}
          {...hideLabel && { hidden: true }}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        name={name || undefined}
        type={type}
        placeholder={placeholder || undefined}
        className={classNames}
        disabled={disabled}
        {...props}
      />
      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}
      {helperText && <div className="ecl-help-block">{helperText}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidIconLabel: PropTypes.string,
  invalidText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  helperText: '',
  invalid: false,
  invalidIconLabel: 'Error',
  invalidText: '',
  name: '',
  label: '',
  hideLabel: false,
  placeholder: '',
  type: 'text',
  className: '',
};

export default TextInput;
