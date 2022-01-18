import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterStandardisedSection } from './FooterStandardisedSection';

export function FooterStandardised({ sections, className, ...props }) {
  return (
    <footer
      {...props}
      className={classnames(className, 'ecl-footer-standardised')}
    >
      <div className="ecl-container ecl-footer-standardised__container">
        {!Array.isArray(sections) && (
          <>
            {/* Site name */}
            <section className="ecl-footer-standardised__section ecl-footer-standardised__section1">
              {sections.siteName && (
                <FooterStandardisedSection section={sections.siteName} />
              )}
            </section>

            {/* DG services */}
            <div className="ecl-footer-standardised__section2">
              {sections.dgServices &&
                sections.dgServices.map((section, index) => (
                  <section className="ecl-footer-standardised__section">
                    <FooterStandardisedSection
                      key={`dg-services-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </div>

            {/* DG navigation */}
            <div className="ecl-footer-standardised__section3">
              {sections.dgNavigations &&
                sections.dgNavigations.map((section, index) => (
                  <section className="ecl-footer-standardised__section">
                    <FooterStandardisedSection
                      key={`dg-navigation-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </div>

            {/* Classes */}
            <section className="ecl-footer-standardised__section ecl-footer-standardised__section6">
              {sections.classes && (
                <FooterStandardisedSection section={sections.classes} />
              )}
            </section>

            {/* Corporate name */}
            <section className="ecl-footer-standardised__section ecl-footer-standardised__section7">
              {sections.corporateName && (
                <FooterStandardisedSection section={sections.corporateName} />
              )}
            </section>

            {/* Service navigation */}
            <section className="ecl-footer-standardised__section ecl-footer-standardised__section8">
              {sections.serviceNavigation && (
                <FooterStandardisedSection
                  section={sections.serviceNavigation}
                />
              )}
            </section>

            {/* Legal navigation */}
            <section className="ecl-footer-standardised__section ecl-footer-standardised__section9">
              {sections.serviceNavigation && (
                <FooterStandardisedSection section={sections.legalNavigation} />
              )}
            </section>
          </>
        )}

        {/* DEPRECATED; backwards compatibility */}
        {Array.isArray(sections) && (
          <>
            {sections.map((section, index) => (
              <section
                className={`ecl-footer-standardised__section ecl-footer-standardised__section${
                  index + 1
                }`}
              >
                <FooterStandardisedSection
                  key={section.key}
                  section={section}
                />
              </section>
            ))}
          </>
        )}
      </div>
    </footer>
  );
}

FooterStandardised.propTypes = {
  sections: PropTypes.oneOfType([
    PropTypes.shape({
      siteName: PropTypes.shape(FooterStandardisedSection.propTypes),
      dgServices: PropTypes.arrayOf(
        PropTypes.shape(FooterStandardisedSection.propTypes)
      ),
      dgNavigations: PropTypes.arrayOf(
        PropTypes.shape(FooterStandardisedSection.propTypes)
      ),
      classes: PropTypes.shape(FooterStandardisedSection.propTypes),
      corporateName: PropTypes.shape(FooterStandardisedSection.propTypes),
      serviceNavigation: PropTypes.shape(FooterStandardisedSection.propTypes),
      legalNavigation: PropTypes.shape(FooterStandardisedSection.propTypes),
    }),
    PropTypes.arrayOf(PropTypes.shape(FooterStandardisedSection.propTypes)),
  ]).isRequired,
  className: PropTypes.string,
};

FooterStandardised.defaultProps = {
  className: '',
};

export default FooterStandardised;
