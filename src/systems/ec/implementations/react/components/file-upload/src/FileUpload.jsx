import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function FileUpload({
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
  buttonChooseLabel,
  buttonReplaceLabel,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-file-upload', {
    'ecl-file-upload--invalid': invalid,
  });

  return (
    <div
      data-ecl-file-upload-group
      className={classnames(groupClassName, 'ecl-form-group')}
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

      <label className="ecl-file-upload__button-container" htmlFor={id}>
        <span
          data-ecl-file-upload-button
          data-ecl-file-upload-label-choose={buttonChooseLabel}
          data-ecl-file-upload-label-replace={buttonReplaceLabel}
          className="ecl-file-upload__button ecl-button ecl-button--primary"
          {...(disabled && {
            disabled: true,
          })}
        >
          {buttonChooseLabel}
        </span>
      </label>

      <input
        {...props}
        data-ecl-file-upload-input
        id={id}
        name={name || undefined}
        type="file"
        className={classNames}
        disabled={disabled}
        required={required}
      />

      <ul className="ecl-file-upload__list" data-ecl-file-upload-list />
    </div>
  );
}

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
  buttonChooseLabel: PropTypes.string,
  buttonReplaceLabel: PropTypes.string,
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
  buttonChooseLabel: '',
  buttonReplaceLabel: '',
  className: '',
};

export default FileUpload;
