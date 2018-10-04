import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/eu-react-component-link/Link';

const FooterSection = ({ title, items }) => (
  <section className="ecl-footer__section">
    <h1 className="ecl-footer__section-header">{title}</h1>

    {items.map(item => (
      <ul className="ecl-footer__section-list">
        <li className="ecl-footer__section-item">
          {item.map(content => (
            <span>
              <span>{content.before}</span>
              <Link {...content.link} />
              <span>{content.after}</span>
            </span>
          ))}
        </li>
      </ul>
    ))}
  </section>
);

FooterSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.shape({
          label: PropTypes.string,
          href: PropTypes.string,
        }),
        before: PropTypes.string,
        after: PropTypes.string,
      })
    )
  ),
};

FooterSection.defaultProps = {
  title: '',
  items: [],
};

export default FooterSection;
