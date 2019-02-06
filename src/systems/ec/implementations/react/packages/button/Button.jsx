import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon/Icon';

const Button = ({
  variant,
  type,
  block,
  disabled,
  label,
  icon,
  iconPosition,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-button', {
    [`ecl-button--${variant}`]: variant,
    [`ecl-button--block`]: block,
  });

  const iconMarkup =
    icon && icon.shape ? (
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
      <span className="ecl-button__container">
        {iconPosition === 'before' && iconMarkup}
        <span className="ecl-button__label" data-ecl-label>
          {label}
        </span>
        {iconPosition === 'after' && iconMarkup}
      </span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  iconPosition: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'submit',
  block: false,
  disabled: false,
  label: '',
  icon: {},
  iconPosition: 'after',
  className: '',
};

export default Button;
