import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

const Checkbox = ({
  className,
  defaultChecked,
  disabled,
  helperId,
  helperText,
  hideLabel,
  id,
  invalid,
  invalidText,
  label,
  labelClassName,
  name,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-checkbox', {
    'ecl-checkbox--invalid': invalid,
  });

  return (
    <div {...props} className={classNames}>
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
          'ecl-form-label ecl-checkbox__label',
          {
            'ecl-form-label--invalid': invalid,
            'ecl-checkbox__label--hidden': hideLabel,
            'ecl-form-label--hidden': hideLabel,
          }
        )}
        htmlFor={id}
      >
        <span
          className={classnames('ecl-checkbox__box', {
            'ecl-checkbox__box--invalid': invalid,
            'ecl-checkbox__box--disabled': disabled,
          })}
        >
          <Icon className="ecl-checkbox__icon" shape="ui--check" size="s" />
        </span>
        {label}
      </label>

      {helperText && (
        <div
          {...(helperId ? { id: helperId } : {})}
          className={classnames('ecl-help-block ecl-checkbox__help', {
            'ecl-help-block--disabled': disabled,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
  defaultChecked: false,
  disabled: false,
  helperId: '',
  helperText: '',
  hideLabel: false,
  invalid: false,
  invalidText: '',
  label: '',
  labelClassName: '',
  name: '',
};

export default Checkbox;
