import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/eu-react-component-link/Link';

const LanguageListItem = ({ label, href }) => (
  <Link
    label={label}
    href={href}
    variant="standalone"
    className="ecl-language-list__link"
    icon={{
      shape: 'ui--check',
      size: 'xs',
      className: 'ecl-language-list__icon',
    }}
  />
);

LanguageListItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
};

LanguageListItem.defaultProps = {
  label: '',
  href: '',
};

export default LanguageListItem;
