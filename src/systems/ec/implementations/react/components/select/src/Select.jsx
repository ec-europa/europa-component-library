/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

const Select = ({
  disabled,
  groupClassName,
  helperText,
  id,
  invalid,
  invalidText,
  label,
  labelClassName,
  name,
  optionalText,
  options,
  required,
  requiredText,
  width,
  multiple,
  multiplePlaceholder,
  multipleSearchText,
  multipleAllText,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-select');

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
        className={classnames('ecl-select__container', {
          'ecl-select__container--disabled': disabled,
          'ecl-select__container--invalid': invalid,
          [`ecl-select__container--${width}`]: width,
        })}
      >
        <select
          {...props}
          id={id}
          name={name || undefined}
          className={classNames}
          disabled={disabled}
          required={required}
          {...(multiple
            ? {
                multiple,
                'data-ecl-select-multiple': true,
                'data-ecl-select-default': multiplePlaceholder,
                'data-ecl-select-search': multipleSearchText,
                'data-ecl-select-all': multipleAllText,
              }
            : {})}
        >
          {options.map((option) => (
            <option
              key={option.label}
              value={option.value}
              {...(option.disabled ? { disabled: true } : {})}
              {...(option.selected ? { selected: true } : {})}
            >
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
    </div>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  groupClassName: PropTypes.string,
  helperText: PropTypes.node,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  optionalText: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  width: PropTypes.string,
  multiple: PropTypes.bool,
  multiplePlaceholder: PropTypes.string,
  multipleSearchText: PropTypes.string,
  multipleAllText: PropTypes.string,
  className: PropTypes.string,
};

Select.defaultProps = {
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
  options: [],
  width: '',
  multiple: false,
  multiplePlaceholder: '',
  multipleSearchText: '',
  multipleAllText: '',
  className: '',
};

export default Select;
