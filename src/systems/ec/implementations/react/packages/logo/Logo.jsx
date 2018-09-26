import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import logoSrc from '@ecl/ec-resources-logo/EC-logo.svg';

const Logo = ({ title, alt, className, ...props }) => {
  const classNames = classnames(className, 'ecl-logo');

  return (
    <img
      {...props}
      title={title}
      className={classNames}
      src={logoSrc}
      alt={alt}
    />
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Logo.defaultProps = {
  title: '',
  alt: '',
  className: '',
};

export default Logo;
