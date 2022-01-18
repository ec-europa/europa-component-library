import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TextInput({
  id,
  disabled,
  groupClassName,
  helperText,
  invalid,
  invalidText,
  label,
  labelClassName,
  name,
  optionalText,
  required,
  requiredText,
  type,
  width,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-text-input', {
    'ecl-text-input--invalid': invalid,
    [`ecl-text-input--${width}`]: width,
  });

  return (
    <div className={classnames(groupClassName, 'ecl-form-group')}>
      {label && (
        <label
          className={classnames(labelClassName, 'ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--disabled': disabled,
          })}
          htmlFor={id}
        >
          {label}
          {required ? (
            <>
              {requiredText && (
                <span className="ecl-form-label__required">{requiredText}</span>
              )}
            </>
          ) : (
            <>
              {optionalText && (
                <span className="ecl-form-label__optional">{optionalText}</span>
              )}
            </>
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
        className={classNames}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  groupClassName: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  optionalText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  groupClassName: '',
  helperText: '',
  invalid: false,
  invalidText: '',
  optionalText: '',
  name: '',
  label: '',
  labelClassName: '',
  required: false,
  requiredText: '',
  type: 'text',
  width: '',
  className: '',
};

export default TextInput;
