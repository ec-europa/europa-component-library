/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  variant,
  iconPath,
  icon,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-icon';
  if (variant) classes += ` ecl-icon--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <svg {...props} className={classes} {...extraAttributes}>
      <use xlinkHref={`${iconPath}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  variant: PropTypes.string,
  iconPath: PropTypes.string,
  icon: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Icon.defaultProps = {
  variant: '',
  iconPath: '',
  icon: '',
  extraClasses: '',
  extraAttributes: '',
};

export default Icon;
