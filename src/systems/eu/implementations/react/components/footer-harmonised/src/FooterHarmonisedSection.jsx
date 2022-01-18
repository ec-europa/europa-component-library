import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link';

export function FooterHarmonisedSection({ section }) {
  return (
    <>
      {/* Title */}
      {!!(section && section.title && typeof section.title === 'object') && (
        <Link
          {...section.title}
          variant="standalone"
          className={classnames(
            section.titleClassName,
            'ecl-footer-harmonised__title'
          )}
        />
      )}
      {!!(section && section.title && typeof section.title === 'string') && (
        <div
          className={classnames(
            'ecl-footer-harmonised__title',
            section.titleClassName
          )}
        >
          {section.title}
        </div>
      )}
      {/* Description */}
      {!!(section && section.description) && (
        <div
          className={classnames(
            'ecl-footer-harmonised__description',
            section.descriptionClassName
          )}
        >
          {parse(section.description)}
        </div>
      )}
      {/* Content before links list */}
      {!!(section && section.contentBefore) && (
        <div
          className={classnames(
            'ecl-footer-harmonised__content',
            section.contentBeforeClassName
          )}
        >
          {section.contentBefore}
        </div>
      )}
      {/* Links list */}
      {!!(section && section.links) && (
        <ul
          className={classnames(
            'ecl-footer-harmonised__list',
            section.listClassName
          )}
        >
          {section.links.map((link) => (
            <li className="ecl-footer-harmonised__list-item" key={link.label}>
              <Link
                {...link}
                variant="standalone"
                className={classnames(
                  link.className,
                  'ecl-footer-harmonised__link'
                )}
              />
            </li>
          ))}
        </ul>
      )}
      {/* Content after links list */}
      {!!(section && section.contentAfter) && (
        <div
          className={classnames(
            'ecl-footer-harmonised__content',
            section.contentAfterClassName
          )}
        >
          {section.contentAfter}
        </div>
      )}
    </>
  );
}

FooterHarmonisedSection.propTypes = {
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

FooterHarmonisedSection.defaultProps = {
  section: {},
};

export default FooterHarmonisedSection;
