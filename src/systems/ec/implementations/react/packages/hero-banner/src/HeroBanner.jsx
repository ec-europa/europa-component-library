import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/src/Button';

const HeroBanner = ({
  variant,
  title,
  description,
  image,
  isCentered,
  button,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-hero-banner', {
    [`ecl-hero-banner--${variant}`]: variant,
    [`ecl-hero-banner--centered`]: isCentered,
  });

  return (
    <section {...props} className={classNames}>
      {!!(variant && image) && (
        <div
          className="ecl-hero-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="ecl-container ecl-hero-banner__container">
        <div className="ecl-hero-banner__content">
          {title && <h1 className="ecl-hero-banner__title">{title}</h1>}
          {description && (
            <p className="ecl-hero-banner__description">{description}</p>
          )}
          {button && button.label && (
            <Button {...button} className="ecl-hero-banner__button" />
          )}
        </div>
      </div>
    </section>
  );
};

HeroBanner.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isCentered: PropTypes.bool,
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

HeroBanner.defaultProps = {
  variant: '',
  title: '',
  description: '',
  image: '',
  isCentered: false,
  button: {},
  className: '',
};

export default HeroBanner;
