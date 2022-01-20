import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon';

function Datepicker({
  id,
  disabled,
  groupClassName,
  containerClassName,
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
  className,
  ...props
}) {
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
      <div
        className={classnames(containerClassName, 'ecl-datepicker', {
          'ecl-datepicker--invalid': invalid,
        })}
      >
        <input
          {...props}
          id={id}
          name={name || undefined}
          type={type}
          className={classnames(
            className,
            'ecl-datepicker__field ecl-text-input ecl-text-input--s',
            {
              'ecl-text-input--invalid': invalid,
            }
          )}
          disabled={disabled}
          required={required}
          data-ecl-datepicker-toggle
        />
        <Icon
          className="ecl-datepicker__icon"
          shape="general--calendar"
          size="s"
        />
      </div>
    </div>
  );
}

Datepicker.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  groupClassName: PropTypes.string,
  containerClassName: PropTypes.string,
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
  className: PropTypes.string,
};

Datepicker.defaultProps = {
  disabled: false,
  groupClassName: '',
  containerClassName: '',
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
  className: '',
};

export default Datepicker;
