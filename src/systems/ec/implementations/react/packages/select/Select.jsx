import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';

const Select = ({
  id,
  options,
  block,
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
}) => (
  <div
    className={classnames(className, 'ecl-form-group ecl-form-group--select', {
      'ecl-form-group--block': block,
    })}
  >
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
        className={classnames('ecl-select', {
          'ecl-select--invalid': invalid,
        })}
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

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  block: PropTypes.bool,
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
  block: false,
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
