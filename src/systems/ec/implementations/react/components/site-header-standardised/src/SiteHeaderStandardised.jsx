import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import SearchForm from '@ecl/ec-react-component-search-form';
import { LanguageListOverlay } from '@ecl/ec-react-component-language-list';

const SiteHeaderStandardised = ({
  logo,
  logged,
  loginToggle,
  loginBox,
  languageSelector,
  searchToggle,
  searchForm,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-site-header-standardised');

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
  const logoSrc = require(`@ecl/ec-resources-logo/logo--${logoLanguage}.svg`);

  const loginLabel = logged
    ? loginToggle.labelLogged
    : loginToggle.labelNotLogged;
  const loginHref = logged ? loginToggle.hrefLogged : loginToggle.hrefNotLogged;

  return (
    <header {...props} className={classNames}>
      <div className="ecl-site-header-standardised__container ecl-container">
        <div className="ecl-site-header-standardised__banner">
          <a
            className="ecl-link ecl-link--standalone"
            href={logoHref}
            aria-label={logoTitle}
          >
            <img
              {...logoProps}
              alt={logoAlt}
              title={logoTitle}
              className={classnames(
                logoClassName,
                'ecl-site-header-standardised__logo-image'
              )}
              src={logoSrc}
            />
          </a>
          <div className="ecl-site-header-standardised__action">
            {!!(loginToggle && loginBox) && (
              <div className="ecl-site-header-standardised__login-container">
                <a
                  className="ecl-link ecl-link--standalone ecl-site-header-standardised__login-toggle"
                  href={loginHref}
                  data-ecl-login-toggle
                  aria-controls={loginBox.id}
                  aria-expanded="false"
                >
                  <Icon shape="general--search" size="s" />
                  {loginLabel}
                </a>
                <div
                  id={loginBox.id}
                  className="ecl-site-header-standardised__login-box"
                  data-ecl-login-box
                >
                  <p className="ecl-site-header-standardised__login-description">
                    {loginBox.description}
                  </p>
                  <Link
                    label={loginBox.label}
                    href={loginBox.href}
                    variant="standalone"
                  />
                </div>
              </div>
            )}
            {languageSelector && (
              <a
                className="ecl-link ecl-link--standalone ecl-site-header-standardised__language-selector"
                href={languageSelector.href}
                data-ecl-language-selector
              >
                <span className="ecl-site-header-standardised__language-icon">
                  <Icon shape="general--language" size="s" />
                  <span className="ecl-site-header-standardised__language-code">
                    {languageSelector.code}
                  </span>
                </span>
                {languageSelector.label}
              </a>
            )}
            {!!(searchToggle && searchForm) && (
              <div className="ecl-site-header-standardised__search-container">
                <a
                  className="ecl-link ecl-link--standalone ecl-site-header-standardised__search-toggle"
                  href={searchToggle.href}
                  data-ecl-search-toggle
                  aria-controls={searchForm.id}
                  aria-expanded="false"
                >
                  <Icon shape="general--search" size="s" />
                  {searchToggle.label}
                </a>
                <SearchForm
                  {...searchForm}
                  className="ecl-site-header-standardised__search"
                  id={searchForm.id}
                  data-ecl-search-form
                />
              </div>
            )}
          </div>
        </div>
        {!!(languageSelector && languageSelector.overlay) && (
          <LanguageListOverlay {...languageSelector.overlay} hidden />
        )}
      </div>
    </header>
  );
};

SiteHeaderStandardised.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
  }),
  logged: PropTypes.bool,
  loginToggle: PropTypes.shape({
    labelNotLogged: PropTypes.string,
    hrefNotLogged: PropTypes.string,
    labelLogged: PropTypes.string,
    hrefLogged: PropTypes.string,
  }),
  loginBox: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  languageSelector: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
    code: PropTypes.string,
    overlay: PropTypes.object,
  }),
  searchToggle: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  searchForm: PropTypes.shape({
    id: PropTypes.string,
    textInputId: PropTypes.string,
    inputLabel: PropTypes.string,
    buttonLabel: PropTypes.string,
  }),
  className: PropTypes.string,
};

SiteHeaderStandardised.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  logged: false,
  loginToggle: {
    labelNotLogged: '',
    hrefNotLogged: '#',
    labelLogged: '',
    hrefLogged: '#',
  },
  loginBox: {
    id: '',
    description: '',
    label: '',
    href: '#',
  },
  languageSelector: {
    href: '#',
    label: '',
    code: '',
  },
  searchToggle: {
    label: '',
    href: '',
  },
  searchForm: {
    id: '',
    textInputId: '',
    inputLabel: '',
    buttonLabel: '',
  },
  className: '',
};

export default SiteHeaderStandardised;
