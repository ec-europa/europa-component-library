import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButton from './RadioButton';

const RadioGroup = ({
  legend,
  legendId,
  legendClassName,
  helperText,
  helperId,
  invalid,
  invalidText,
  optionalText,
  required,
  requiredText,
  name,
  items,
  binary,
  className,
  ...props
}) => {
  const classNames = classnames(
    className,
    'ecl-form-group ecl-form-group--radio',
    {
      'ecl-radio__group--binary': binary,
    }
  );

  return (
    <fieldset
      {...props}
      aria-labelledby={legendId}
      {...(helperId ? { 'aria-describedby': helperId } : {})}
      className={classNames}
    >
      {legend && (
        <legend
          className={classnames(legendClassName, 'ecl-form-label', {
            'ecl-form-label--invalid': invalid,
          })}
          id={legendId}
        >
          {legend}
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
        </legend>
      )}

      {helperText && (
        <div {...(helperId ? { id: helperId } : {})} className="ecl-help-block">
          {helperText}
        </div>
      )}

      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}

      {items.map(item => (
        <RadioButton {...item} name={name} key={item.id} invalid={invalid} />
      ))}
    </fieldset>
  );
};

RadioGroup.propTypes = {
  legend: PropTypes.string,
  legendId: PropTypes.string,
  legendClassName: PropTypes.string,
  helperText: PropTypes.node,
  helperId: PropTypes.string,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  optionalText: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(RadioButton.propTypes)),
  binary: PropTypes.bool,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  legend: '',
  legendId: '',
  legendClassName: '',
  helperText: '',
  helperId: '',
  invalid: false,
  invalidText: '',
  optionalText: '',
  required: false,
  requiredText: '',
  name: '',
  items: [],
  binary: false,
  className: '',
};

export default RadioGroup;
