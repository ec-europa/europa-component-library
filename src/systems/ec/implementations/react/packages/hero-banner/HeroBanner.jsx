import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';

const HeroBanner = ({
  variant,
  position,
  title,
  description,
  image,
  centered,
  button,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-hero-banner', {
    [`ecl-hero-banner--${variant}`]: variant,
    [`ecl-hero-banner--centered`]: centered,
  });

  return (
    <div className={classNames} {...props}>
      <div
        className="ecl-hero-banner__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="ecl-container ecl-hero-banner__container">
        <div className="ecl-hero-banner__content">
          {title && <div className="ecl-hero-banner__title">{title}</div>}
          {description && (
            <div className="ecl-hero-banner__description">{description}</div>
          )}
          {button &&
            button.label && (
              <Button {...button} className="ecl-hero-banner__button" />
            )}
        </div>
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
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

HeroBanner.defaultProps = {
  variant: '',
  position: 'center',
  title: '',
  description: '',
  image: '',
  centered: false,
  button: {},
  className: '',
};

export default HeroBanner;
