import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const PageBanner = ({
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
  const classNames = classnames(className, 'ecl-page-banner', {
    [`ecl-page-banner--${variant}`]: variant,
    [`ecl-page-banner--centered`]: isCentered,
    [`ecl-page-banner--full-width`]: isFullWidth,
  });

  return (
    <section {...props} className={classNames}>
      {image && (
        <div
          className="ecl-page-banner__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="ecl-container">
        <div className="ecl-page-banner__container">
          <div className="ecl-page-banner__content">
            {meta && (
              <div className="ecl-page-banner__meta">
                {Array.isArray(meta) ? (
                  <>
                    {meta.map((metaData) => (
                      <span
                        key={metaData}
                        className="ecl-page-banner__meta-item"
                      >
                        {metaData}
                      </span>
                    ))}
                  </>
                ) : (
                  <>{meta}</>
                )}
              </div>
            )}
            {title && <div className="ecl-page-banner__title">{title}</div>}
            {description && (
              <p className="ecl-page-banner__description">{description}</p>
            )}
            {link && link.label && (
              <Link
                {...link}
                variant="cta"
                className="ecl-page-banner__link-cta"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  variant: PropTypes.string,
  meta: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isCentered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  link: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
};

PageBanner.defaultProps = {
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

export default PageBanner;
