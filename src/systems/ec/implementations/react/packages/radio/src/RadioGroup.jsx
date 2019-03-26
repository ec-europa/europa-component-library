import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButton from './RadioButton';

const RadioGroup = ({
  labelId,
  items,
  name,
  helperText,
  label,
  hideLabel,
  invalid,
  invalidText,
  binary,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-radio__group', {
    'ecl-radio__group--invalid': invalid,
    'ecl-radio__group--binary': binary,
  });

  return (
    <div
      {...props}
      role="radiogroup"
      aria-labelledby={labelId}
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
        <div className="ecl-radio__help ecl-help-block">{helperText}</div>
      )}

      {invalid && invalidText && (
        <div className="ecl-radio__invalid ecl-feedback-message">
          {invalidText}
        </div>
      )}

      {items.map(item => (
        <RadioButton {...item} name={name} key={item.id} />
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  labelId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(RadioButton.propTypes)),
  name: PropTypes.string,
  helperText: PropTypes.node,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  binary: PropTypes.bool,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  labelId: '',
  items: [],
  name: '',
  helperText: '',
  label: '',
  hideLabel: false,
  invalid: false,
  invalidText: '',
  binary: false,
  className: '',
};

export default RadioGroup;
