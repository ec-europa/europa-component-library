import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterHarmonisedSection } from './FooterHarmonisedSection';

export function FooterHarmonisedG1({ sections, className, ...props }) {
  return (
    <footer
      {...props}
      className={classnames(
        className,
        'ecl-footer-harmonised ecl-footer-harmonised--group1'
      )}
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
            <div className="ecl-footer-harmonised__section3">
              {sections.dgNavigations &&
                sections.dgNavigations.map((section, index) => (
                  <section className="ecl-footer-harmonised__section">
                    <FooterHarmonisedSection
                      key={`dg-navigation-${index}`}
                      section={section}
                    />
                  </section>
                ))}
            </div>

            {/* Classes */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section6">
              {sections.classes && (
                <FooterHarmonisedSection section={sections.classes} />
              )}
            </section>

            {/* Corporate name */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section7">
              {sections.corporateName && (
                <FooterHarmonisedSection section={sections.corporateName} />
              )}
            </section>

            {/* Service navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section8">
              {sections.serviceNavigation && (
                <FooterHarmonisedSection section={sections.serviceNavigation} />
              )}
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

FooterHarmonisedG1.propTypes = {
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

FooterHarmonisedG1.defaultProps = {
  className: '',
};

export default FooterHarmonisedG1;
