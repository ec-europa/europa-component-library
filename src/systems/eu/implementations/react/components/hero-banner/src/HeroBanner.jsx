import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link';

const HeroBanner = ({
  variant,
  meta,
  title,
  description,
  image,
  isCentered,
  isFullWidth,
  link,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-hero-banner', {
    [`ecl-hero-banner--${variant}`]: variant,
    [`ecl-hero-banner--centered`]: isCentered,
    [`ecl-hero-banner--full-width`]: isFullWidth,
  });

  return (
    <section {...props} className={classNames}>
      {image && (
        <div
          className="ecl-hero-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="ecl-container">
        <div className="ecl-hero-banner__container">
          <div className="ecl-hero-banner__content">
            {meta && <div className="ecl-hero-banner__meta">{meta}</div>}
            {title && <div className="ecl-hero-banner__title">{title}</div>}
            {description && (
              <p className="ecl-hero-banner__description">{description}</p>
            )}
            {link && link.label && (
              <Link
                {...link}
                variant="cta"
                className="ecl-hero-banner__link-cta"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroBanner.propTypes = {
  variant: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isCentered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  link: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
};

HeroBanner.defaultProps = {
  variant: '',
  meta: '',
  title: '',
  description: '',
  image: '',
  isCentered: false,
  isFullWidth: false,
  link: {},
  className: '',
};

export default HeroBanner;
