import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const FooterStandardised = ({ sections, className, ...props }) => (
  <footer
    {...props}
    className={classnames(className, 'ecl-footer-standardised')}
  >
    <div className="ecl-container ecl-footer-standardised__container">
      {sections.map((section, index) => (
        <div
          className={`ecl-footer-standardised__section ecl-footer-standardised__section${index +
            1}`}
          key={section.key}
        >
          {!!(section.title && typeof section.title === 'object') && (
            <Link
              {...section.title}
              variant="standalone"
              className={classnames(
                section.titleClassName,
                'ecl-footer-standardised__title'
              )}
            />
          )}
          {!!(section.title && typeof section.title === 'string') && (
            <div
              className={classnames(
                'ecl-footer-standardised__title',
                section.titleClassName
              )}
            >
              {section.title}
            </div>
          )}
          {section.description && (
            <div
              className={classnames(
                'ecl-footer-standardised__description',
                section.descriptionClassName
              )}
            >
              {section.description}
            </div>
          )}
          {section.contentBefore && (
            <div
              className={classnames(
                'ecl-footer-standardised__content',
                section.contentBeforeClassName
              )}
            >
              {section.contentBefore}
            </div>
          )}
          {section.links && (
            <ul
              className={classnames(
                'ecl-footer-standardised__list',
                section.listClassName
              )}
            >
              {section.links.map(link => (
                <li
                  className="ecl-footer-standardised__list-item"
                  key={link.label}
                >
                  <Link
                    {...link}
                    variant="standalone"
                    className={classnames(
                      link.className,
                      'ecl-footer-standardised__link'
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
          {section.contentAfter && (
            <div
              className={classnames(
                'ecl-footer-standardised__content',
                section.contentAfterClassName
              )}
            >
              {section.contentAfter}
            </div>
          )}
        </div>
      ))}
    </div>
  </footer>
);

FooterStandardised.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.oneOfType(
        PropTypes.string,
        PropTypes.shape(Link.propTypes)
      ),
      description: PropTypes.string,
      contentBefore: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
      contentAfter: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

FooterStandardised.defaultProps = {
  sections: [],
  className: '',
};

export default FooterStandardised;
