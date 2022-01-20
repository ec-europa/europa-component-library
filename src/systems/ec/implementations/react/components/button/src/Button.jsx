import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';

function Button({
  variant,
  type,
  disabled,
  label,
  icon,
  iconPosition,
  className,
  containerClassName,
  ...props
}) {
  const classNames = classnames(className, 'ecl-button', {
    [`ecl-button--${variant}`]: variant,
  });

  const hasIcon = icon && icon.shape;

  const iconMarkup = hasIcon ? (
    <Icon
      {...icon}
      data-ecl-icon
      className={classnames(icon.className, 'ecl-button__icon', {
        [`ecl-button__icon--${iconPosition}`]: iconPosition,
      })}
    />
  ) : (
    ''
  );

  return (
    /* eslint-disable-next-line react/button-has-type */
    <button {...props} type={type} className={classNames} disabled={disabled}>
      {hasIcon ? (
        <span
          className={classnames(containerClassName, 'ecl-button__container')}
        >
          {iconPosition === 'before' && iconMarkup}
          <span className="ecl-button__label" data-ecl-label>
            {label}
          </span>
          {iconPosition === 'after' && iconMarkup}
        </span>
      ) : (
        label
      )}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  iconPosition: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'submit',
  disabled: false,
  label: '',
  icon: {},
  iconPosition: 'after',
  className: '',
  containerClassName: '',
};

export default Button;
