import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/eu-react-component-link/Link';

const MenuItem = ({ label, href }) => (
  <li className="ecl-menu__item">
    <Link
      label={label}
      href={href}
      variant="standalone"
      className="ecl-menu__link"
    />
  </li>
);

MenuItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
};

MenuItem.defaultProps = {
  label: '',
  href: '',
};

export default MenuItem;
