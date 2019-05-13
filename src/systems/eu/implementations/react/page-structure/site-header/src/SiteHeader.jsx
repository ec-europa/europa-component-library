import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon';
import SearchForm from '@ecl/eu-react-component-search-form';

const SiteHeader = ({
  logo,
  languageSelector,
  searchForm,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-site-header');

  // Logo props
  const {
    className: logoClassName,
    href: logoHref,
    alt: logoAlt,
    title: logoTitle,
    language: logoLanguage,
    ...logoProps
  } = logo;

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const logoSrc = require(`@ecl/eu-resources-logo/logo--${logoLanguage}.svg`);

  return (
    <header {...props} className={classNames}>
      <div className="ecl-site-header__container ecl-container">
        <div className="ecl-site-header__banner">
          <a
            className="ecl-link ecl-link--standalone"
            href={logoHref}
            aria-label={logoTitle}
          >
            <img
              {...logoProps}
              title={logoTitle}
              className={classnames(
                logoClassName,
                'ecl-site-header__logo-image'
              )}
              src={logoSrc}
              alt={logoAlt}
            />
          </a>
          <div className="ecl-site-header__selector">
            <a
              className="ecl-link ecl-link--standalone"
              href={languageSelector.href}
              data-ecl-language-selector
            >
              {languageSelector.name}
              <span className="ecl-site-header__language-icon">
                <Icon shape="general--language" size="m" />
                <span className="ecl-site-header__language-code">
                  {languageSelector.code}
                </span>
              </span>
            </a>
          </div>
        </div>
        <SearchForm {...searchForm} className="ecl-site-header__search" />
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
  }),
  languageSelector: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string,
  }),
  searchForm: PropTypes.shape({
    textInputId: PropTypes.string,
    buttonLabel: PropTypes.string,
  }),
  className: PropTypes.string,
};

SiteHeader.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  languageSelector: {
    href: '#',
    name: '',
    code: '',
  },
  searchForm: {
    textInputId: '',
    buttonLabel: '',
  },
  className: '',
};

export default SiteHeader;
