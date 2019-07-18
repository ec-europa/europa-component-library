import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from './Checkbox';

const CheckboxGroup = ({
  labelId,
  items,
  name,
  helperText,
  label,
  helperId,
  hideLabel,
  invalid,
  invalidText,
  optInOut,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-checkbox__group', {
    'ecl-checkbox__group--invalid': invalid,
    'ecl-checkbox__group--opt-in-out': optInOut,
  });

  return (
    <div
      {...props}
      aria-labelledby={labelId}
      {...(helperId ? { 'aria-describedby': helperId } : {})}
      className={classNames}
    >
      {label && (
        <div
          className={classnames('ecl-form-label', {
            'ecl-form-label--hidden': hideLabel,
          })}
          id={labelId}
        >
          {label}
        </div>
      )}

      {helperText && (
        <p
          {...(helperId ? { id: helperId } : {})}
          className="ecl-checkbox__help ecl-help-block"
        >
          {helperText}
        </p>
      )}

      {invalid && invalidText && (
        <p className="ecl-checkbox__invalid ecl-feedback-message">
          {invalidText}
        </p>
      )}

      {items.map(item => (
        <Checkbox {...item} name={name} key={item.id} />
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  labelId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(Checkbox.propTypes)),
  name: PropTypes.string,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  optInOut: PropTypes.bool,
  className: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  labelId: '',
  items: [],
  name: '',
  helperId: '',
  helperText: '',
  label: '',
  hideLabel: false,
  invalid: false,
  invalidText: '',
  optInOut: false,
  className: '',
};

export default CheckboxGroup;
