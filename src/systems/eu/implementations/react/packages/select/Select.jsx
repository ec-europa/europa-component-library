import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';

const Select = ({
  id,
  options,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  hideLabel,
  name,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-select', {
    'ecl-select--invalid': invalid,
  });

  return (
    <div className="ecl-form-group ecl-form-group--select">
      {label && (
        <label
          className={classnames('ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--hidden': hideLabel,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div
        className={classnames('ecl-select__container', {
          'ecl-select__container--disabled': disabled,
        })}
      >
        <select
          {...props}
          id={id}
          name={name || undefined}
          className={classNames}
          disabled={disabled}
        >
          {options.map(option => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="ecl-select__icon">
          <Icon
            shape="ui--corner-arrow"
            transform="rotate-180"
            size="s"
            className="ecl-select__icon-shape"
          />
        </div>
      </div>

      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}
      {helperText && <div className="ecl-help-block">{helperText}</div>}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidIconLabel: PropTypes.string,
  invalidText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  disabled: false,
  helperText: '',
  invalid: false,
  invalidIconLabel: 'Error',
  invalidText: '',
  name: '',
  label: '',
  hideLabel: false,
  className: '',
};

export default Select;
