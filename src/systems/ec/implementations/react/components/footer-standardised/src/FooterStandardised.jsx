import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const FooterStandardised = ({ identity, sections, className, ...props }) => (
  <footer
    {...props}
    className={classnames(className, 'ecl-footer-standardised')}
  >
    <div className="ecl-container ecl-footer-standardised__container">
      <div className="ecl-footer-standardised__section1">
        <span className="ecl-footer-standardised__title">
          European Commission website
        </span>
        <p className="ecl-footer-standardised__description">
          This site is managed by the Directorate-General for Communication
        </p>
      </div>

      <div className="ecl-footer-standardised__section2">
        <ul className="ecl-footer-standardised__list ecl-footer-standardised__list--2">
          {sections[0].links.map(link => (
            <li className="ecl-footer-standardised__list-item" key={link.label}>
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
      </div>

      <div className="ecl-footer-standardised__section3">
        <ul className="ecl-footer-standardised__list">
          {sections[1].links.map(link => (
            <li className="ecl-footer-standardised__list-item" key={link.label}>
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
      </div>

      <div className="ecl-footer-standardised__section4">
        <ul className="ecl-footer-standardised__list">
          {sections[2].links.map(link => (
            <li className="ecl-footer-standardised__list-item" key={link.label}>
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
      </div>
    </div>
  </footer>
);

FooterStandardised.propTypes = {
  identity: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
    })
  ),
  className: PropTypes.string,
};

FooterStandardised.defaultProps = {
  identity: {},
  sections: [],
  className: '',
};

export default FooterStandardised;
