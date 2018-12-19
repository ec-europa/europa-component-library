import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';

const Checkbox = ({
  id,
  checked,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  hideLabel,
  name,
  value,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-checkbox', {
    'ecl-checkbox--invalid': invalid,
  });

  return (
    <div className="ecl-form-group ecl-form-group--checkbox">
      <div className={classNames}>
        <input
          {...props}
          type="checkbox"
          id={id}
          defaultChecked={checked}
          name={name || undefined}
          className="ecl-checkbox__input"
          disabled={disabled}
        />
        <span className="ecl-checkbox__icon" />
        <span className="ecl-checkbox__icon ecl-checkbox__icon--checked">
          <Icon shape="ui--check" size="xs" />
        </span>

        {label && (
          <label
            className={classnames(
              'ecl-form-label ecl-form-label--inline ecl-checkbox__label',
              {
                'ecl-form-label--invalid': invalid,
                'ecl-form-label--hidden': hideLabel,
              }
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>

      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}
      {helperText && <div className="ecl-help-block">{helperText}</div>}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  value: PropTypes.string,
  invalidIconLabel: PropTypes.string,
  invalidText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.string,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  helperText: '',
  invalid: false,
  invalidIconLabel: 'Error',
  invalidText: '',
  name: '',
  value: '',
  label: '',
  hideLabel: false,
  className: '',
};

export default Checkbox;
