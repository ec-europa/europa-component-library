import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TextArea({
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
  rows,
  width,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-text-area', {
    'ecl-text-area--invalid': invalid,
    [`ecl-text-area--${width}`]: width,
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
      <textarea
        {...props}
        id={id}
        name={name || undefined}
        rows={rows}
        disabled={disabled}
        className={classNames}
        required={required}
      />
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  groupClassName: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  optionalText: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  rows: PropTypes.number,
  width: PropTypes.string,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  disabled: false,
  groupClassName: '',
  helperText: '',
  invalid: false,
  invalidText: '',
  label: '',
  labelClassName: '',
  name: '',
  optionalText: '',
  required: false,
  requiredText: '',
  rows: 4,
  width: '',
  className: '',
};

export default TextArea;
