import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function RadioButton({
  id,
  label,
  labelClassName,
  helperId,
  helperText,
  invalid,
  disabled,
  checked,
  name,
  value,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-radio', {
    'ecl-radio--disabled': disabled,
  });

  return (
    <div {...props} className={classNames}>
      <input
        id={id}
        name={name}
        className="ecl-radio__input"
        type="radio"
        value={value}
        disabled={disabled}
        {...(helperId ? { 'aria-describedby': helperId } : {})}
        {...(checked ? { defaultChecked: true } : {})}
      />
      <label
        htmlFor={id}
        className={classnames(labelClassName, 'ecl-radio__label', {
          'ecl-radio__label--disabled': disabled,
        })}
      >
        <span
          className={classnames('ecl-radio__box', {
            'ecl-radio__box--invalid': invalid,
            'ecl-radio__box--disabled': disabled,
          })}
        />
        {label}
      </label>
      {helperText && (
        <div
          {...(helperId ? { id: helperId } : {})}
          className={classnames('ecl-radio__help', {
            'ecl-radio__help--disabled': disabled,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelClassName: PropTypes.string,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  labelClassName: '',
  helperId: '',
  helperText: '',
  invalid: false,
  disabled: false,
  checked: false,
  name: '',
  value: '',
  className: '',
};

export default RadioButton;
