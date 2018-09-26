import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Logo = ({ title, alt, language, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-logo': true,
  });

  /* eslint-disable-next-line global-require, import/no-dynamic-require */
  const path = require(`@ecl/eu-resources-logo/logo--${language}.svg`);

  return (
    <img {...props} title={title} className={classNames} src={path} alt={alt} />
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  language: PropTypes.string,
  className: PropTypes.string,
};

Logo.defaultProps = {
  title: '',
  alt: '',
  language: 'en',
  className: '',
};

export default Logo;
