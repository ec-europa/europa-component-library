import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import logoSvg from '@ecl/ec-resources-logo/logo--mute.svg';
import LanguageList from './LanguageList';

const LanguageListSplash = ({ logoAlt, items, className, ...props }) => {
  const classNames = classnames(
    className,
    'ecl-language-list',
    'ecl-language-list--splash'
  );

  return (
    <div {...props} className={classNames}>
      <header className="ecl-language-list__header">
        <img className="ecl-language-list__logo" src={logoSvg} alt={logoAlt} />
      </header>
      <div className="ecl-language-list__container ecl-container">
        <LanguageList items={items} />
      </div>
    </div>
  );
};

LanguageListSplash.propTypes = {
  logoAlt: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

LanguageListSplash.defaultProps = {
  logoAlt: '',
  items: [],
  className: '',
};

export default LanguageListSplash;
