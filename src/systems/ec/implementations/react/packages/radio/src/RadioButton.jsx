import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RadioButton = ({
  id,
  name,
  value,
  disabled,
  className,
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
      />
      <label htmlFor={id} className="ecl-radio__label">
        <span className="ecl-radio__box" />
        {label}
      </label>
      {helperText && (
        <div className="ecl-radio__help ecl-help-block">{helperText}</div>
      )}
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  disabled: false,
  helperText: '',
  name: '',
  value: '',
  className: '',
};

export default RadioButton;
