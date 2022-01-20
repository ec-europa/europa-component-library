import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButton from './RadioButton';

function RadioGroup({
  binary,
  helperId,
  helperText,
  invalid,
  invalidText,
  items,
  legend,
  legendClassName,
  name,
  optionalText,
  required,
  requiredText,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-form-group');

  return (
    <fieldset
      {...props}
      {...(helperId ? { 'aria-describedby': helperId } : {})}
      className={classNames}
    >
      {legend && (
        <legend
          className={classnames(legendClassName, 'ecl-form-label', {
            'ecl-form-label--invalid': invalid,
          })}
        >
          {legend}
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

      {items.map((item) => (
        <RadioButton
          {...item}
          name={name}
          key={item.id}
          invalid={invalid}
          className={classnames({
            'ecl-radio--binary': binary,
          })}
        />
      ))}
    </fieldset>
  );
}

RadioGroup.propTypes = {
  binary: PropTypes.bool,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape(RadioButton.propTypes)),
  legend: PropTypes.string,
  legendClassName: PropTypes.string,
  name: PropTypes.string,
  optionalText: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  binary: false,
  helperId: '',
  helperText: '',
  invalid: false,
  invalidText: '',
  items: [],
  legend: '',
  legendClassName: '',
  name: '',
  optionalText: '',
  required: false,
  requiredText: '',
  className: '',
};

export default RadioGroup;
