/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const HeroBanner = ({
  variant,
  position,
  title,
  description,
  button,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-hero-banner';
  if (variant) classes += ` ecl-hero-banner--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  return (
    <div {...props} className={classes} {...extraAttributes}>
      <span className="ecl-hero-banner__title">{title}</span>
    </div>
  );
};

HeroBanner.propTypes = {
  variant: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

HeroBanner.defaultProps = {
  variant: '',
  position: 'center',
  title: '',
  description: '',
  button: '',
  extraClasses: '',
  extraAttributes: '',
};

export default HeroBanner;
