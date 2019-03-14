import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextArea = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  hideLabel,
  name,
  placeholder,
  rows,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-text-area', {
    'ecl-text-area--invalid': invalid,
  });

  return (
    <div className="ecl-form-group ecl-form-group--text-area">
      {label && (
        <label
          className={classnames('ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--hidden': hideLabel,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        id={id}
        name={name || undefined}
        rows={rows}
        placeholder={placeholder || undefined}
        disabled={disabled}
        className={classNames}
      />
      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}
      {helperText && <div className="ecl-help-block">{helperText}</div>}
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidIconLabel: PropTypes.string,
  invalidText: PropTypes.node,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  disabled: false,
  helperText: '',
  invalid: false,
  invalidIconLabel: 'Error',
  invalidText: '',
  label: '',
  hideLabel: false,
  name: '',
  placeholder: '',
  rows: 4,
  className: '',
};

export default TextArea;
