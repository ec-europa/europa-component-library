/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import logoHorizontal from '@ecl/ec-resources/logo/EC-logo-horizontal-desktop.svg';
import logoMute from '@ecl/ec-resources/logo/EC_logo-desktop.svg';

const Logo = ({
  variant,
  title,
  alt,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-logo';
  if (variant) classes += ` ecl-logo--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  let logoSrc = logoMute;
  if (variant === 'horizontal') logoSrc = logoHorizontal;

  return (
    <img
      {...props}
      title={title}
      className={classes}
      {...extraAttributes}
      src={logoSrc}
      alt={alt}
    />
  );
};

Logo.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Logo.defaultProps = {
  variant: 'large',
  title: '',
  alt: '',
  extraClasses: '',
  extraAttributes: '',
};

export default Logo;
