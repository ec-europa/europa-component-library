import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/ec-react-component-link';

const LanguageListItem = ({ label, href, isActive }) => (
  <Link
    label={label}
    href={href}
    variant="standalone"
    className="ecl-language-list__link"
    {...isActive && {
      icon: {
        shape: 'ui--check',
        size: 'xs',
      },
    }}
  />
);

LanguageListItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
};

LanguageListItem.defaultProps = {
  label: '',
  href: '',
  isActive: false,
};

export default LanguageListItem;
