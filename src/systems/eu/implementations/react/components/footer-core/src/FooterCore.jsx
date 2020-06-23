import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterCoreSection } from './FooterCoreSection';

export const FooterCore = ({ logo, sections, className, ...props }) => {
  // Logo props
  const {
    className: logoClassName,
    href: logoHref,
    alt: logoAlt,
    title: logoTitle,
    language: logoLanguage,
    ...logoProps
  } = logo;

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const logoSrcMobile = require(`@ecl/eu-resources-logo/condensed-version/positive/${logoLanguage}.svg`);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const logoSrcDesktop = require(`@ecl/eu-resources-logo/standard-version/positive/${logoLanguage}.svg`);

  return (
    <footer {...props} className={classnames(className, 'ecl-footer-core')}>
      <div className="ecl-container ecl-footer-core__container">
        {!Array.isArray(sections) && (
          <Fragment>
            {/* Site name */}
            <section className="ecl-footer-core__section ecl-footer-core__section1">
              <a
                className="ecl-link ecl-link--standalone ecl-footer-core__logo-link-mobile"
                href={logoHref}
                aria-label={logoTitle}
              >
                <img
                  {...logoProps}
                  alt={logoAlt}
                  title={logoTitle}
                  className={classnames(
                    logoClassName,
                    'ecl-footer-core__logo-image'
                  )}
                  src={logoSrcMobile}
                />
              </a>
              <a
                className="ecl-link ecl-link--standalone ecl-footer-core__logo-link-desktop"
                href={logoHref}
                aria-label={logoTitle}
              >
                <img
                  {...logoProps}
                  alt={logoAlt}
                  title={logoTitle}
                  className={classnames(
                    logoClassName,
                    'ecl-footer-core__logo-image'
                  )}
                  src={logoSrcDesktop}
                />
              </a>
              {sections.siteName && (
                <FooterCoreSection section={sections.siteName} />
              )}
            </section>

            {/* Service navigation */}
            <div className="ecl-footer-core__section3">
              {sections.serviceNavigation &&
                sections.serviceNavigation.map((section, index) => (
                  <section className="ecl-footer-standardised__section">
                    <FooterCoreSection
                      // eslint-disable-next-line react/no-array-index-key
                      key={`dg-services-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </div>

            {/* Legal navigation */}
            <section className="ecl-footer-core__section ecl-footer-core__section4">
              {sections.legalNavigation && (
                <FooterCoreSection section={sections.legalNavigation} />
              )}
            </section>
          </Fragment>
        )}

        {/* DEPRECATED; backwards compatibility */}
        {Array.isArray(sections) && (
          <Fragment>
            {sections.map((section, index) => (
              <section
                className={`ecl-footer-core__section ecl-footer-core__section${index +
                  1}`}
              >
                <FooterCoreSection key={section.key} section={section} />
              </section>
            ))}
          </Fragment>
        )}
      </div>
    </footer>
  );
};

FooterCore.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
  }),
  sections: PropTypes.oneOfType([
    PropTypes.shape({
      siteName: PropTypes.shape(FooterCoreSection.propTypes),
      classes: PropTypes.shape(FooterCoreSection.propTypes),
      serviceNavigation: PropTypes.shape(FooterCoreSection.propTypes),
      legalNavigation: PropTypes.shape(FooterCoreSection.propTypes),
    }),
    PropTypes.arrayOf(PropTypes.shape(FooterCoreSection.propTypes)),
  ]).isRequired,
  className: PropTypes.string,
};

FooterCore.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  className: '',
};

export default FooterCore;
