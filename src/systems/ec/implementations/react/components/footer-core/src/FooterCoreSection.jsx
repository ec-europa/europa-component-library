import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

export const FooterCoreSection = ({ section }) => (
  <>
    {/* Title */}
    {!!(section && section.title && typeof section.title === 'object') && (
      <Link
        {...section.title}
        variant="standalone"
        className={classnames(section.titleClassName, 'ecl-footer-core__title')}
      />
    )}
    {!!(section && section.title && typeof section.title === 'string') && (
      <div
        className={classnames('ecl-footer-core__title', section.titleClassName)}
      >
        {section.title}
      </div>
    )}
    {/* Description */}
    {!!(section && section.description) && (
      <div
        className={classnames(
          'ecl-footer-core__description',
          section.descriptionClassName
        )}
      >
        {section.description}
      </div>
    )}
    {/* Content before links list */}
    {!!(section && section.contentBefore) && (
      <div
        className={classnames(
          'ecl-footer-core__content',
          section.contentBeforeClassName
        )}
      >
        {section.contentBefore}
      </div>
    )}
    {/* Links list */}
    {!!(section && section.links) && (
      <ul
        className={classnames('ecl-footer-core__list', section.listClassName)}
      >
        {section.links.map((link) => (
          <li className="ecl-footer-core__list-item" key={link.label}>
            <Link
              {...link}
              variant="standalone"
              className={classnames(link.className, 'ecl-footer-core__link')}
            />
          </li>
        ))}
      </ul>
    )}
    {/* Content after links list */}
    {!!(section && section.contentAfter) && (
      <div
        className={classnames(
          'ecl-footer-core__content',
          section.contentAfterClassName
        )}
      >
        {section.contentAfter}
      </div>
    )}
  </>
);

FooterCoreSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(Link.propTypes),
    ]),
    titleClassName: PropTypes.string,
    description: PropTypes.string,
    descriptionClassName: PropTypes.string,
    contentBefore: PropTypes.string,
    contentBeforeClassName: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
    listClassName: PropTypes.string,
    contentAfter: PropTypes.string,
    contentAfterClassName: PropTypes.string,
  }),
};

FooterCoreSection.defaultProps = {
  section: {},
};

export default FooterCoreSection;
