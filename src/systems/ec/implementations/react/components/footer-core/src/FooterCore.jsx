import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const FooterCore = ({ identity, sections, className, ...props }) => (
  <footer {...props} className={classnames(className, 'ecl-footer-core')}>
    <div className="ecl-container ecl-footer-core__container">
      <div className="ecl-footer-core__section1">
        <span className="ecl-footer-core__title">
          European Commission website
        </span>
        <p className="ecl-footer-core__description">
          This site is managed by the Directorate-General for Communication
        </p>
      </div>

      <div className="ecl-footer-core__section2">
        <ul className="ecl-footer-core__list ecl-footer-core__list--2">
          {sections[0].links.map(link => (
            <li className="ecl-footer-core__item" key={link.label}>
              <Link
                {...link}
                variant="standalone"
                className={classnames(link.className, 'ecl-footer-core__link')}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="ecl-footer-core__section3">
        <ul className="ecl-footer-core__list">
          {sections[1].links.map(link => (
            <li className="ecl-footer-core__item" key={link.label}>
              <Link
                {...link}
                variant="standalone"
                className={classnames(link.className, 'ecl-footer-core__link')}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="ecl-footer-core__section4">
        <ul className="ecl-footer-core__list">
          {sections[2].links.map(link => (
            <li className="ecl-footer-core__item" key={link.label}>
              <Link
                {...link}
                variant="standalone"
                className={classnames(link.className, 'ecl-footer-core__link')}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

FooterCore.propTypes = {
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

FooterCore.defaultProps = {
  identity: {},
  sections: [],
  className: '',
};

export default FooterCore;
