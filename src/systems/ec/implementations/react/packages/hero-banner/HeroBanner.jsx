/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button/Button';

const HeroBanner = ({
  variant,
  position,
  title,
  description,
  image,
  centered,
  button,
  extraClasses,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-hero-banner';
  if (variant) classes += ` ecl-hero-banner--${variant}`;
  if (extraClasses) classes += ` ${extraClasses}`;

  if (centered) {
    return (
      <div {...props} className={classes} {...extraAttributes}>
        <div
          className="ecl-hero-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="ecl-hero-banner__content">
          <div className="ecl-hero-banner__title">{title}</div>
          <div className="ecl-hero-banner__description">{description}</div>
          <Button
            variant={button.variant}
            label={button.label}
            extraClasses="ecl-hero-banner__button"
          />
        </div>
      </div>
    );
  }

  return (
    <div {...props} className={classes} {...extraAttributes}>
      <div
        className="ecl-hero-banner__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="ecl-hero-banner__content">
        <div className="ecl-hero-banner__title">{title}</div>
        <div className="ecl-hero-banner__description">{description}</div>
        <Button
          variant={button.variant}
          label={button.label}
          extraClasses="ecl-hero-banner__button"
        />
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  variant: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  centered: PropTypes.bool,
  button: PropTypes.shape({
    variant: PropTypes.string,
    label: PropTypes.string,
  }),
  extraClasses: PropTypes.string,
  extraAttributes: PropTypes.string,
};

HeroBanner.defaultProps = {
  variant: '',
  position: 'center',
  title: '',
  description: '',
  image: '',
  centered: false,
  button: {},
  extraClasses: '',
  extraAttributes: '',
};

export default HeroBanner;
