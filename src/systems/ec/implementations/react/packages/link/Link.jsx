/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  variant,
  href,
  label,
  // icon,
  // iconPosition,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-link';
  if (variant) classes += ` ecl-link--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <a {...props} href={href} className={classes} {...extraAttributes}>
      <span className="ecl-link__container">
        <span className="ecl-link__label">{label}</span>
      </span>
    </a>
  );
};

Link.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Link.defaultProps = {
  variant: 'primary',
  href: 'submit',
  label: '',
  extraClasses: '',
  extraAttributes: '',
};

export default Link;
