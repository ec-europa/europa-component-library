import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon/Icon';

const Button = ({
  variant,
  type,
  disabled,
  label,
  icon,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-button', {
    [`ecl-button--${variant}`]: variant,
  });

  return (
    /* eslint-disable-next-line react/button-has-type */
    <button {...props} type={type} className={classNames} disabled={disabled}>
      <span className="ecl-button__container">
        <span className="ecl-button__label">{label}</span>
        {icon && icon.shape && (
          <Icon
            {...icon}
            className={classnames(icon.className, 'ecl-button__icon')}
          />
        )}
      </span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'submit',
  disabled: false,
  label: '',
  icon: {},
  className: '',
};

export default Button;
