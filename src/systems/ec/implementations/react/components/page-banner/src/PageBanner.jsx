import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';
import Link from '@ecl/ec-react-component-link';

const PageBanner = ({
  variant,
  meta,
  title,
  baseline,
  image,
  isCentered,
  isFullWidth,
  button, // DEPRECATED
  link,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-banner', {
    [`ecl-page-banner--${variant}`]: variant,
    [`ecl-page-banner--centered`]: isCentered,
    [`ecl-page-banner--full-width`]: isFullWidth,
  });

  return (
    <section {...props} className={classNames}>
      {!!(variant && image) && (
        <div
          className="ecl-page-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="ecl-page-banner__container">
        <div className="ecl-container">
          <div className="ecl-page-banner__content">
            {meta && <div className="ecl-page-banner__meta">{meta}</div>}
            {title && <h1 className="ecl-page-banner__title">{title}</h1>}
            {baseline && (
              <p className="ecl-page-banner__baseline">{baseline}</p>
            )}
            {!!(link && link.label) && (
              <Link
                {...link}
                variant="cta"
                className="ecl-page-banner__link-cta"
              />
            )}
            {/* DEPRECATED */}
            {!!(button && button.label) && (
              <Button {...button} className="ecl-page-banner__button" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  variant: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string,
  baseline: PropTypes.string,
  image: PropTypes.string,
  isCentered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  button: PropTypes.shape(Button.propTypes),
  link: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
};

PageBanner.defaultProps = {
  variant: '',
  meta: '',
  title: '',
  baseline: '',
  image: '',
  isCentered: false,
  isFullWidth: false,
  button: {},
  link: {},
  className: '',
};

export default PageBanner;
