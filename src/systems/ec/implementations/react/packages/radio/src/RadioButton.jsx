import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RadioButton = ({
  id,
  name,
  value,
  disabled,
  className,
  helperId,
  helperText,
  label,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-radio', {
    'ecl-radio--disabled': disabled,
  });

  return (
    <div {...props} className={classNames}>
      <input
        id={id}
        name={name}
        className="ecl-radio__input"
        type="radio"
        value={value}
        disabled={disabled}
        {...(helperId ? { 'aria-describedby': helperId } : {})}
      />
      <label htmlFor={id} className="ecl-radio__label">
        <span className="ecl-radio__box" />
        {label}
      </label>
      {helperText && (
        <p
          {...(helperId ? { id: helperId } : {})}
          className="ecl-radio__help ecl-help-block"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  helperId: PropTypes.string,
  helperText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  disabled: false,
  helperId: '',
  helperText: '',
  name: '',
  value: '',
  className: '',
};

export default RadioButton;
