import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FooterHarmonisedSection } from './FooterHarmonisedSection';

export function FooterHarmonisedG3({ sections, className, ...props }) {
  return (
    <footer
      {...props}
      className={classnames(
        className,
        'ecl-footer-harmonised ecl-footer-harmonised--group3'
      )}
    >
      <div className="ecl-container ecl-footer-harmonised__container">
        {!Array.isArray(sections) && (
          <>
            {/* Partnership label */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section1">
              {sections.partnershipLabel && (
                <FooterHarmonisedSection section={sections.partnershipLabel} />
              )}
            </section>

            {/* Logos */}
            <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section2">
              <ul className="ecl-footer-harmonised__logo-list">
                {sections.partnershipLogos &&
                  sections.partnershipLogos.map((section) => (
                    <li
                      className="ecl-footer-harmonised__logo-item"
                      key={section.logo.title}
                    >
                      <FooterHarmonisedSection section={section} />
                    </li>
                  ))}

                {sections.ecLogo && (
                  <li
                    className="ecl-footer-harmonised__logo-item"
                    key={sections.ecLogo.title}
                  >
                    <FooterHarmonisedSection section={sections.ecLogo} />
                  </li>
                )}
              </ul>
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

FooterHarmonisedG3.propTypes = {
  sections: PropTypes.oneOfType([
    PropTypes.shape({
      partnershipLabel: PropTypes.shape(FooterHarmonisedSection.propTypes),
      partnershipLogos: PropTypes.PropTypes.arrayOf(
        PropTypes.shape({ logo: FooterHarmonisedSection.propTypes })
      ),
      ecLabel: PropTypes.shape({ logo: FooterHarmonisedSection.propTypes }),
    }),
    PropTypes.arrayOf(PropTypes.shape(FooterHarmonisedSection.propTypes)),
  ]).isRequired,
  className: PropTypes.string,
};

FooterHarmonisedG3.defaultProps = {
  className: '',
};

export default FooterHarmonisedG3;
