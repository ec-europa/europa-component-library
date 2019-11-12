import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const FooterCore = ({ sections, className, ...props }) => (
  <footer {...props} className={classnames(className, 'ecl-footer-core')}>
    <div className="ecl-container ecl-footer-core__container">
      {sections.map((section, index) => (
        <div
          className={classnames(
            'ecl-footer-core__section',
            `ecl-footer-core__section${index + 1}`,
            section.sectionClassName
          )}
          key={section.key}
        >
          {!!(section.title && typeof section.title === 'object') && (
            <Link
              {...section.title}
              variant="standalone"
              className={classnames(
                section.titleClassName,
                'ecl-footer-core__title'
              )}
            />
          )}
          {!!(section.title && typeof section.title === 'string') && (
            <div
              className={classnames(
                'ecl-footer-core__title',
                section.titleClassName
              )}
            >
              {section.title}
            </div>
          )}
          {section.description && (
            <div
              className={classnames(
                'ecl-footer-core__description',
                section.descriptionClassName
              )}
            >
              {section.description}
            </div>
          )}
          {section.contentBefore && (
            <div
              className={classnames(
                'ecl-footer-core__content',
                section.contentBeforeClassName
              )}
            >
              {section.contentBefore}
            </div>
          )}
          {section.links && (
            <ul
              className={classnames(
                'ecl-footer-core__list',
                section.listClassName
              )}
            >
              {section.links.map(link => (
                <li className="ecl-footer-core__list-item" key={link.label}>
                  <Link
                    {...link}
                    variant="standalone"
                    className={classnames(
                      link.className,
                      'ecl-footer-core__link'
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
          {section.contentAfter && (
            <div
              className={classnames(
                'ecl-footer-core__content',
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

FooterCore.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape(Link.propTypes),
      ]),
      description: PropTypes.string,
      contentBefore: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
      contentAfter: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

FooterCore.defaultProps = {
  sections: [],
  className: '',
};

export default FooterCore;
