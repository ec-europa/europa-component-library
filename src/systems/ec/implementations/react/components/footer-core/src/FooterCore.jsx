import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterCoreSection } from './FooterCoreSection';

export function FooterCore({ sections, className, ...props }) {
  return (
    <footer {...props} className={classnames(className, 'ecl-footer-core')}>
      <div className="ecl-container ecl-footer-core__container">
        {!Array.isArray(sections) && (
          <>
            {/* Site name */}
            <section className="ecl-footer-core__section ecl-footer-core__section1">
              {sections.siteName && (
                <FooterCoreSection section={sections.siteName} />
              )}
            </section>

            {/* Class navigation */}
            <section className="ecl-footer-core__section ecl-footer-core__section2 ecl-footer-core__section--separator">
              {sections.classes && (
                <FooterCoreSection section={sections.classes} />
              )}
            </section>

            {/* Service navigation */}
            <section className="ecl-footer-core__section ecl-footer-core__section3">
              {sections.serviceNavigation && (
                <FooterCoreSection section={sections.serviceNavigation} />
              )}
            </section>

            {/* Legal navigation */}
            <section className="ecl-footer-core__section ecl-footer-core__section4">
              {sections.legalNavigation && (
                <FooterCoreSection section={sections.legalNavigation} />
              )}
            </section>
          </>
        )}

        {/* DEPRECATED; backwards compatibility */}
        {Array.isArray(sections) && (
          <>
            {sections.map((section, index) => (
              <section
                className={`ecl-footer-core__section ecl-footer-core__section${
                  index + 1
                }`}
              >
                <FooterCoreSection key={section.key} section={section} />
              </section>
            ))}
          </>
        )}
      </div>
    </footer>
  );
}

FooterCore.propTypes = {
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
  className: '',
};

export default FooterCore;
