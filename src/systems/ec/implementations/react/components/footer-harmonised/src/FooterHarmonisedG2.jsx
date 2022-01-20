import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterHarmonisedSection } from './FooterHarmonisedSection';

export function FooterHarmonisedG2({ sections, className, ...props }) {
  return (
    <footer
      {...props}
      className={classnames(
        className,
        'ecl-footer-harmonised ecl-footer-harmonised--group2'
      )}
    >
      <div className="ecl-container ecl-footer-harmonised__container">
        {!Array.isArray(sections) && (
          <>
            {/* Corporate name */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section1">
              {sections.corporateName && (
                <FooterHarmonisedSection section={sections.corporateName} />
              )}
            </section>

            {/* Service navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section2">
              {sections.serviceNavigation && (
                <FooterHarmonisedSection section={sections.serviceNavigation} />
              )}
            </section>

            {/* Legal navigation */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section3">
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

FooterHarmonisedG2.propTypes = {
  sections: PropTypes.oneOfType([
    PropTypes.shape({
      corporateName: PropTypes.shape(FooterHarmonisedSection.propTypes),
      serviceNavigation: PropTypes.shape(FooterHarmonisedSection.propTypes),
      legalNavigation: PropTypes.shape(FooterHarmonisedSection.propTypes),
    }),
    PropTypes.arrayOf(PropTypes.shape(FooterHarmonisedSection.propTypes)),
  ]).isRequired,
  className: PropTypes.string,
};

FooterHarmonisedG2.defaultProps = {
  className: '',
};

export default FooterHarmonisedG2;
