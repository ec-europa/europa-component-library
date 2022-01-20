import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

function Checkbox({
  className,
  defaultChecked,
  disabled,
  helperId,
  helperText,
  id,
  invalid,
  label,
  labelClassName,
  name,
  value,
  ...props
}) {
  const classNames = classnames(className, 'ecl-checkbox', {
    'ecl-checkbox--invalid': invalid,
    'ecl-checkbox--disabled': disabled,
  });

  return (
    <div {...props} className={classNames}>
      <input
        className="ecl-checkbox__input"
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name || undefined}
        type="checkbox"
        value={value}
      />

      <label
        className={classnames(labelClassName, 'ecl-checkbox__label')}
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
          className={classnames('ecl-checkbox__help', {
            'ecl-checkbox__help--disabled': disabled,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
  defaultChecked: false,
  disabled: false,
  helperId: '',
  helperText: '',
  invalid: false,
  label: '',
  labelClassName: '',
  name: '',
  value: '',
};

export default Checkbox;
