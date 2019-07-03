import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidText,
  label,
  labelClassName,
  name,
  optionalText,
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
          className={classnames(labelClassName, 'ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--disabled': disabled,
          })}
          htmlFor={id}
        >
          {label}
          {required ? (
            <Fragment>
              {requiredText && (
                <span className="ecl-form-label__required">{requiredText}</span>
              )}
            </Fragment>
          ) : (
            <Fragment>
              {optionalText && (
                <span className="ecl-form-label__optional">{optionalText}</span>
              )}
            </Fragment>
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
  invalidText: PropTypes.node,
  optionalText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
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
  invalidText: '',
  optionalText: '',
  name: '',
  label: '',
  labelClassName: '',
  placeholder: '',
  required: false,
  requiredText: '',
  type: 'text',
  className: '',
};

export default TextInput;
