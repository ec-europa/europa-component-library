import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FileUpload = ({
  id,
  disabled,
  groupClassName,
  helperText,
  invalid,
  invalidText,
  label,
  labelClassName,
  name,
  optionalText,
  required,
  requiredText,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-file-upload', {
    'ecl-file-upload--invalid': invalid,
  });

  return (
    <div
      className={classnames(
        groupClassName,
        'ecl-form-group ecl-form-group--file-upload'
      )}
    >
      {label && (
        <label
          className={classnames(labelClassName, 'ecl-form-label', {
            'ecl-form-label--invalid': invalid,
            'ecl-form-label--disabled': disabled,
          })}
          htmlFor={id}
        >
          {label}
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
        </label>
      )}
      {helperText && (
        <div
          className={classnames('ecl-help-block', {
            'ecl-help-block--disabled': disabled,
          })}
        >
          {helperText}
        </div>
      )}
      {invalid && invalidText && (
        <div className="ecl-feedback-message">{invalidText}</div>
      )}

      <input
        {...props}
        id={id}
        name={name || undefined}
        type="file"
        className={classNames}
        disabled={disabled}
        {...props}
        required={required}
      />
    </div>
  );
};

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  groupClassName: PropTypes.string,
  helperText: PropTypes.node,
  invalid: PropTypes.bool,
  invalidText: PropTypes.node,
  optionalText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  className: PropTypes.string,
};

FileUpload.defaultProps = {
  disabled: false,
  groupClassName: '',
  helperText: '',
  invalid: false,
  invalidText: '',
  optionalText: '',
  name: '',
  label: '',
  labelClassName: '',
  required: false,
  requiredText: '',
  className: '',
};

export default FileUpload;
