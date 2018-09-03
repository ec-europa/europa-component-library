/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import invalidIcon from '@ecl/generic-resources/images/messages-error.svg';

const TextArea = ({
  id,
  disabled,
  helperText,
  invalid,
  invalidIconLabel,
  invalidText,
  label,
  name,
  placeholder,
  rows,
  className,
  ...props
}) => {
  let classes = 'ecl-text-area';

  if (invalid) classes += ' ecl-text-area--invalid';
  if (className) classes += ` ${className}`;

  return (
    <div className="ecl-form-group ecl-form-group--text-area">
      <label
        className={`ecl-form-label${invalid ? ' ecl-form-label--invalid' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        {...props}
        id={id}
        name={name || undefined}
        rows={rows}
        placeholder={placeholder || undefined}
        disabled={disabled}
        className={classes}
      />
      {invalid &&
        invalidText && (
          <p className="ecl-feedback-message">
            <img
              src={invalidIcon}
              alt={invalidIconLabel}
              className="ecl-feedback-message__logo"
            />
            {invalidText}
          </p>
        )}
      {helperText && <p className="ecl-help-block">{helperText}</p>}
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
  label: PropTypes.node.isRequired,
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
  name: '',
  placeholder: '',
  rows: 4,
  className: '',
};

export default TextArea;
