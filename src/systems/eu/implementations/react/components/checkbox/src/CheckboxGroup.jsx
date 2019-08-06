import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from './Checkbox';

const CheckboxGroup = ({
  className,
  helperId,
  helperText,
  invalid,
  invalidText,
  items,
  legend,
  legendClassName,
  legendId,
  name,
  optionalText,
  required,
  requiredText,
  ...props
}) => {
  const classNames = classnames(
    className,
    'ecl-form-group ecl-form-group--checkbox'
  );

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
        <div
          {...(helperId ? { id: helperId } : {})}
          className="ecl-checkbox__help ecl-help-block"
        >
          {helperText}
        </div>
      )}

      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}

      {items.map(item => (
        <Checkbox {...item} name={name} key={item.id} invalid={invalid} />
      ))}
    </fieldset>
  );
};

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape(Checkbox.propTypes)),
  legend: PropTypes.string,
  legendClassName: PropTypes.string,
  legendId: PropTypes.string,
  name: PropTypes.string,
  optionalText: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  className: '',
  helperId: '',
  helperText: '',
  invalid: false,
  invalidText: '',
  items: [],
  legend: '',
  legendClassName: '',
  legendId: '',
  name: '',
  optionalText: '',
  required: false,
  requiredText: '',
};

export default CheckboxGroup;
