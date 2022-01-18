import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import SearchForm from '@ecl/ec-react-component-search-form';
import { LanguageListOverlay } from '@ecl/ec-react-component-language-list';

function SiteHeaderCore({
  logo,
  logged,
  loginToggle,
  loginBox,
  languageSelector,
  searchToggle,
  searchForm,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-site-header-core');

  // Logo props
  const {
    className: logoClassName,
    href: logoHref,
    alt: logoAlt,
    title: logoTitle,
    language: logoLanguage,
    ...logoProps
  } = logo;

  const logoSrc = require(`@ecl/ec-resources-logo/logo--${logoLanguage}.svg`);

  const hasLanguageOverlay = !!(languageSelector && languageSelector.overlay);

  return (
    <header {...props} className={classNames}>
      <div className="ecl-site-header-core__container ecl-container">
        <div className="ecl-site-header-core__top">
          <a
            className="ecl-link ecl-link--standalone ecl-site-header-core__logo-link"
            href={logoHref}
            aria-label={logoTitle}
          >
            <img
              {...logoProps}
              alt={logoAlt}
              title={logoTitle}
              className={classnames(
                logoClassName,
                'ecl-site-header-core__logo-image'
              )}
              src={logoSrc}
            />
          </a>
          <div className="ecl-site-header-core__action">
            {!!(
              loginToggle &&
              Object.keys(loginToggle).length >= 1 &&
              loginBox
            ) && (
              <div className="ecl-site-header-core__login-container">
                {logged && (
                  <>
                    <a
                      className="ecl-link ecl-link--standalone ecl-site-header-core__login-toggle"
                      href={loginToggle.hrefLogged}
                      data-ecl-login-toggle
                      aria-controls={loginBox.id}
                      aria-expanded="false"
                    >
                      <Icon
                        shape="general--logged-in"
                        size="s"
                        className="ecl-site-header-core__icon"
                      />
                      {loginToggle.labelLogged}
                      <Icon
                        shape="ui--corner-arrow"
                        size="xs"
                        className="ecl-site-header-core__login-arrow"
                      />
                    </a>

                    <div
                      id={loginBox.id}
                      className="ecl-site-header-core__login-box"
                      data-ecl-login-box
                    >
                      {loginBox.description && (
                        <>
                          <p className="ecl-site-header-core__login-description">
                            {loginBox.description}
                          </p>
                          <hr className="ecl-site-header-core__login-separator" />
                        </>
                      )}
                      <Link
                        label={loginBox.label}
                        href={loginBox.href}
                        variant="standalone"
                      />
                    </div>
                  </>
                )}
                {!logged && (
                  <a
                    className="ecl-link ecl-link--standalone ecl-site-header-core__login-toggle"
                    href={loginToggle.hrefNotLogged}
                  >
                    <Icon
                      shape="general--log-in"
                      size="s"
                      className="ecl-site-header-core__icon"
                    />
                    {loginToggle.labelNotLogged}
                  </a>
                )}
              </div>
            )}
            {!!(
              languageSelector && Object.keys(languageSelector).length >= 1
            ) && (
              <a
                className="ecl-link ecl-link--standalone ecl-site-header-core__language-selector"
                href={languageSelector.href}
                aria-label={languageSelector.label}
                data-ecl-language-selector
                {...(hasLanguageOverlay && {
                  'aria-controls': 'language-list-overlay',
                })}
              >
                <span className="ecl-site-header-core__language-icon">
                  <Icon
                    shape="general--language"
                    size="s"
                    className="ecl-site-header-core__icon"
                  />
                  <span className="ecl-site-header-core__language-code">
                    {languageSelector.code}
                  </span>
                </span>
                {languageSelector.label}
              </a>
            )}
            {!!(
              searchToggle &&
              Object.keys(searchToggle).length >= 1 &&
              searchForm
            ) && (
              <div className="ecl-site-header-core__search-container">
                <a
                  className="ecl-link ecl-link--standalone ecl-site-header-core__search-toggle"
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
                  className="ecl-site-header-core__search"
                  id={searchForm.id}
                  data-ecl-search-form
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {hasLanguageOverlay && (
        <LanguageListOverlay
          {...languageSelector.overlay}
          id="language-list-overlay"
          hidden
        />
      )}
    </header>
  );
}

SiteHeaderCore.propTypes = {
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

SiteHeaderCore.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  logged: false,
  loginToggle: {},
  loginBox: {},
  languageSelector: {},
  searchToggle: {},
  searchForm: {},
  className: '',
};

export default SiteHeaderCore;
