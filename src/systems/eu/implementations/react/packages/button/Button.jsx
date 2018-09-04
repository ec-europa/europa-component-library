/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ecl/eu-react-component-icon/Icon';

const Button = ({
  variant,
  typeAttribute,
  label,
  icon,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-button';
  if (variant) classes += ` ecl-button--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    /* eslint-disable react/button-has-type */
    <button
      {...props}
      type={typeAttribute}
      className={classes}
      {...extraAttributes}
    >
      <span className="ecl-button__container">
        <span className="ecl-button__label">{label}</span>
        {icon &&
          icon.icon && <Icon {...icon} extraClasses="ecl-button__icon" />}
      </span>
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  typeAttribute: PropTypes.string,
  label: PropTypes.string,
  icon: Icon,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  typeAttribute: 'submit',
  label: '',
  icon: {},
  extraClasses: '',
  extraAttributes: '',
};

export default Button;
