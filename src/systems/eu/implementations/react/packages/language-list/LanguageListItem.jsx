import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/eu-react-component-link/Link';

const LanguageListItem = ({ label, lang, href, isActive, isOverlay }) => (
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
    hreflang={lang}
    lang={lang}
    {...isOverlay && { rel: 'alternate' }}
  />
);

LanguageListItem.propTypes = {
  label: PropTypes.string,
  lang: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  isOverlay: PropTypes.bool,
};

LanguageListItem.defaultProps = {
  label: '',
  lang: '',
  href: '',
  isActive: false,
  isOverlay: false,
};

export default LanguageListItem;
