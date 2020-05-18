/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import Checkbox from '@ecl/ec-react-component-checkbox';

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
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-select', {
    'ecl-select--invalid': invalid,
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
            <Fragment>
              {requiredText && (
                <span className="ecl-form-label__required">{requiredText}</span>
              )}
            </Fragment>
          ) : (
            <Fragment>
              {optionalText && (
                <span className="ecl-form-label__optional">{optionalText}</span>
              )}
            </Fragment>
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
              }
            : {})}
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
      {/* temporary markup */}
      {multiple && (
        <div className="ecl-select__multiple">
          <div
            className={classnames('ecl-select__container', {
              [`ecl-select__container--${width}`]: width,
            })}
          >
            <input
              id="select-multiple-toggle"
              type="text"
              className="ecl-select ecl-select__multiple-toggle"
              placeholder={multiplePlaceholder}
              readOnly
            />

            <div className="ecl-select__icon">
              <Icon
                shape="ui--corner-arrow"
                transform="rotate-180"
                size="s"
                className="ecl-select__icon-shape"
              />
            </div>
          </div>
          <div
            className={classnames(
              'ecl-select__container ecl-select__multiple-dropdown',
              {
                [`ecl-select__container--${width}`]: width,
              }
            )}
          >
            <input
              placeholder={multipleSearchText}
              id="select-multiple-search"
              type="search"
              className={classnames('ecl-text-input', {
                [`ecl-text-input--${width}`]: width,
              })}
            />
            <Checkbox id="select-multiple-all" label="Select all" />
            <Checkbox id="select-multiple-item-1" label="Belgium" />
            <Checkbox id="select-multiple-item-2" label="France" />
            <Checkbox id="select-multiple-item-3" label="Luxembourg" />
            <Checkbox id="select-multiple-item-4" label="Germany" />
            <Checkbox id="select-multiple-item-5" label="Bulgaria" />
            <Checkbox id="select-multiple-item-6" label="Italy" />
            <Checkbox id="select-multiple-item-7" label="Romania" />
            <Checkbox id="select-multiple-item-8" label="Greece" />
            <Checkbox id="select-multiple-item-9" label="Hungary" />
            <Checkbox id="select-multiple-item-10" label="Portugal" />
          </div>
        </div>
      )}
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
  className: '',
};

export default Select;
