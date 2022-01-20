import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterHarmonisedSection } from './FooterHarmonisedSection';

export function FooterHarmonised({ logo, sections, className, ...props }) {
  // Logo props
  const {
    className: logoClassName,
    href: logoHref,
    alt: logoAlt,
    title: logoTitle,
    language: logoLanguage,
    ...logoProps
  } = logo;

  const logoSrcMobile = require(`@ecl/eu-resources-logo/condensed-version/positive/${logoLanguage}.svg`);
  const logoSrcDesktop = require(`@ecl/eu-resources-logo/standard-version/positive/${logoLanguage}.svg`);

  return (
    <footer
      {...props}
      className={classnames(className, 'ecl-footer-harmonised')}
    >
      <div className="ecl-container ecl-footer-harmonised__container">
        {!Array.isArray(sections) && (
          <>
            {/* Site name */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section1">
              {sections.siteName && (
                <FooterHarmonisedSection section={sections.siteName} />
              )}
            </section>

            {/* DG services */}
            <div className="ecl-footer-harmonised__section2">
              {sections.dgServices &&
                sections.dgServices.map((section, index) => (
                  <section className="ecl-footer-harmonised__section">
                    <FooterHarmonisedSection
                      key={`dg-services-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </div>

            {/* DG navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section3">
              {sections.dgNavigations && (
                <FooterHarmonisedSection section={sections.dgNavigations} />
              )}
            </section>

            {/* Classes */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section6">
              {sections.classes && (
                <FooterHarmonisedSection section={sections.classes} />
              )}
            </section>

            {/* Corporate name */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section7">
              <a
                className="ecl-link ecl-link--standalone ecl-footer-core__logo-link"
                href={logoHref}
                aria-label={logoTitle}
              >
                <img
                  {...logoProps}
                  alt={logoAlt}
                  title={logoTitle}
                  className={classnames(
                    logoClassName,
                    'ecl-footer-core__logo-image-mobile'
                  )}
                  src={logoSrcMobile}
                />
                <img
                  {...logoProps}
                  alt={logoAlt}
                  title={logoTitle}
                  className={classnames(
                    logoClassName,
                    'ecl-footer-core__logo-image-desktop'
                  )}
                  src={logoSrcDesktop}
                />
              </a>
              {sections.corporateName && (
                <FooterHarmonisedSection section={sections.corporateName} />
              )}
            </section>

            {/* Service navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section8">
              {sections.serviceNavigation &&
                sections.serviceNavigation.map((section, index) => (
                  <section className="ecl-footer-harmonised__section">
                    <FooterHarmonisedSection
                      key={`dg-services-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </section>

            {/* Legal navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section9">
              {sections.serviceNavigation && (
                <FooterHarmonisedSection section={sections.legalNavigation} />
              )}
            </section>
          </>
        )}

        {/* DEPRECATED; backwards compatibility */}
        {Array.isArray(sections) && (
          <>
            {sections.map((section, index) => (
              <section
                className={`ecl-footer-harmonised__section ecl-footer-harmonised__section${
                  index + 1
                }`}
              >
                <FooterHarmonisedSection key={section.key} section={section} />
              </section>
            ))}
          </>
        )}
      </div>
    </footer>
  );
}

FooterHarmonised.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
  }),
  sections: PropTypes.oneOfType([
    PropTypes.shape({
      siteName: PropTypes.shape(FooterHarmonisedSection.propTypes),
      dgServices: PropTypes.arrayOf(
        PropTypes.shape(FooterHarmonisedSection.propTypes)
      ),
      dgNavigations: PropTypes.arrayOf(
        PropTypes.shape(FooterHarmonisedSection.propTypes)
      ),
      classes: PropTypes.shape(FooterHarmonisedSection.propTypes),
      corporateName: PropTypes.shape(FooterHarmonisedSection.propTypes),
      serviceNavigation: PropTypes.shape(FooterHarmonisedSection.propTypes),
      legalNavigation: PropTypes.shape(FooterHarmonisedSection.propTypes),
    }),
    PropTypes.arrayOf(PropTypes.shape(FooterHarmonisedSection.propTypes)),
  ]).isRequired,
  className: PropTypes.string,
};

FooterHarmonised.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  className: '',
};

export default FooterHarmonised;
