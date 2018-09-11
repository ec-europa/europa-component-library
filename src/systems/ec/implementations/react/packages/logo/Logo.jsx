/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '@ecl/ec-resources-logo/EC-logo.svg';

const Logo = ({ title, alt, extraClasses, extraAttributes, ...props }) => {
  let classes = 'ecl-logo';
  if (extraClasses) classes += ` ${extraClasses}`;

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
  title: PropTypes.string,
  alt: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

Logo.defaultProps = {
  title: '',
  alt: '',
  extraClasses: '',
  extraAttributes: '',
};

export default Logo;
