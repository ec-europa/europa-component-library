/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon/Icon';

const Button = ({ variant, type, label, icon, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-button': true,
    [`ecl-button--${variant}`]: variant,
  });

  return (
    /* eslint-disable react/button-has-type */
    <button {...props} type={type} className={classNames}>
      <span className="ecl-button__container">
        <span className="ecl-button__label">{label}</span>
        {icon && icon.icon && <Icon {...icon} className="ecl-button__icon" />}
      </span>
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'submit',
  label: '',
  icon: {},
  className: '',
};

export default Button;
