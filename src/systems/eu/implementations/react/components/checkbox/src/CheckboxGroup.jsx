import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from './Checkbox';

const CheckboxGroup = ({
  className,
  helperId,
  helperText,
  hideLabel,
  invalid,
  invalidText,
  items,
  label,
  labelId,
  name,
  optInOut,
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
  className: PropTypes.string,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape(Checkbox.propTypes)),
  label: PropTypes.string,
  labelId: PropTypes.string,
  name: PropTypes.string,
  optInOut: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  className: '',
  helperId: '',
  helperText: '',
  hideLabel: false,
  invalid: false,
  invalidText: '',
  items: [],
  label: '',
  labelId: '',
  name: '',
  optInOut: false,
};

export default CheckboxGroup;
