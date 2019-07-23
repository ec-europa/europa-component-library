import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon';

const Checkbox = ({
  className,
  defaultChecked,
  disabled,
  helperText,
  hideLabel,
  id,
  invalid,
  invalidText,
  label,
  labelClassName,
  mandatory,
  name,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-checkbox', {
    'ecl-checkbox--invalid': invalid,
    'ecl-checkbox--required': mandatory,
  });

  return (
    <div className="ecl-form-group ecl-form-group--checkbox">
      <div className={classNames}>
        <input
          {...props}
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          name={name || undefined}
          className="ecl-checkbox__input"
          disabled={disabled}
        />

        <label
          className={classnames(
            labelClassName,
            'ecl-form-label ecl-form-label--inline ecl-checkbox__label',
            {
              'ecl-form-label--invalid': invalid,
              'ecl-checkbox__label--hidden': hideLabel,
              'ecl-form-label--hidden': hideLabel,
            }
          )}
          htmlFor={id}
        >
          <span className="ecl-checkbox__box">
            <Icon className="ecl-checkbox__icon" shape="ui--check" size="s" />
          </span>
          {label}
        </label>
        {mandatory && (
          <span className="ecl-form-label--required ecl-checkbox__required">
            *
          </span>
        )}
      </div>

      {helperText && (
        <div className="ecl-help-block ecl-checkbox__help">{helperText}</div>
      )}
      {invalid && invalidText && (
        <div className="ecl-feedback-message ecl-checkbox__invalid">
          {invalidText}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  mandatory: PropTypes.bool,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
  defaultChecked: false,
  disabled: false,
  helperText: '',
  hideLabel: false,
  invalid: false,
  invalidText: '',
  label: '',
  labelClassName: '',
  mandatory: false,
  name: '',
};

export default Checkbox;
