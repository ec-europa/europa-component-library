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
  optionalText,
  label,
  hideLabel,
  name,
  placeholder,
  required,
  requiredText,
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
            'ecl-form-label--disabled': disabled,
            'ecl-form-label--hidden': hideLabel,
          })}
          htmlFor={id}
        >
          {label}
          {required ? (
            <span className="ecl-form-label__required">{requiredText}</span>
          ) : (
            <span className="ecl-form-label__optional">{optionalText}</span>
          )}
        </label>
      )}
      {helperText && (
        <div
          className={classnames('ecl-help-block', {
            'ecl-help-block--disabled': disabled,
          })}
        >
          {helperText}
        </div>
      )}
      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
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
        required={required}
      />
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
  optionalText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  helperText: '',
  invalid: false,
  invalidIconLabel: 'Error',
  invalidText: '',
  optionalText: ' (optional)',
  name: '',
  label: '',
  hideLabel: false,
  placeholder: '',
  required: true,
  requiredText: '*',
  type: 'text',
  className: '',
};

export default TextInput;
