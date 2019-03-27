import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';

const PageBanner = ({
  variant,
  title,
  baseline,
  image,
  isCentered,
  button,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-banner', {
    [`ecl-page-banner--${variant}`]: variant,
    [`ecl-page-banner--centered`]: isCentered,
  });

  return (
    <section {...props} className={classNames}>
      {!!(variant && image) && (
        <div
          className="ecl-page-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="ecl-container ecl-page-banner__container">
        <div className="ecl-page-banner__content">
          {title && <h1 className="ecl-page-banner__title">{title}</h1>}
          {baseline && <p className="ecl-page-banner__baseline">{baseline}</p>}
          {button && button.label && (
            <Button {...button} className="ecl-page-banner__button" />
          )}
        </div>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  baseline: PropTypes.string,
  image: PropTypes.string,
  isCentered: PropTypes.bool,
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

PageBanner.defaultProps = {
  variant: '',
  title: '',
  baseline: '',
  image: '',
  isCentered: false,
  button: {},
  className: '',
};

export default PageBanner;
