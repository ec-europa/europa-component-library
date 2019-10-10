import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import SearchForm from '@ecl/ec-react-component-search-form';
import { LanguageListOverlay } from '@ecl/ec-react-component-language-list';

const SiteHeaderHarmonised = ({
  logo,
  logged,
  loginToggle,
  loginBox,
  languageSelector,
  searchToggle,
  searchForm,
  bannerTop,
  banner,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-site-header-harmonised');

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

  return (
    <header {...props} className={classNames}>
      <div className="ecl-site-header-harmonised__container ecl-container">
        <div className="ecl-site-header-harmonised__top">
          <a
            className="ecl-link ecl-link--standalone ecl-site-header-harmonised__logo-link"
            href={logoHref}
            aria-label={logoTitle}
          >
            <img
              {...logoProps}
              alt={logoAlt}
              title={logoTitle}
              className={classnames(
                logoClassName,
                'ecl-site-header-harmonised__logo-image'
              )}
              src={logoSrc}
            />
          </a>
          <div className="ecl-site-header-harmonised__action">
            {!!(
              loginToggle &&
              Object.values(loginToggle).length >= 1 &&
              loginBox
            ) && (
              <div className="ecl-site-header-harmonised__login-container">
                {logged && (
                  <Fragment>
                    <a
                      className="ecl-link ecl-link--standalone ecl-site-header-harmonised__login-toggle"
                      href={loginToggle.hrefLogged}
                      data-ecl-login-toggle
                      aria-controls={loginBox.id}
                      aria-expanded="false"
                    >
                      <Icon shape="general--logged-in" size="s" />
                      {loginToggle.labelLogged}
                    </a>

                    <div
                      id={loginBox.id}
                      className="ecl-site-header-harmonised__login-box"
                      data-ecl-login-box
                    >
                      <p className="ecl-site-header-harmonised__login-description">
                        {loginBox.description}
                      </p>
                      <hr className="ecl-site-header-harmonised__login-separator" />
                      <Link
                        label={loginBox.label}
                        href={loginBox.href}
                        variant="standalone"
                      />
                    </div>
                  </Fragment>
                )}
                {!logged && (
                  <a
                    className="ecl-link ecl-link--standalone ecl-site-header-harmonised__login-toggle"
                    href={loginToggle.hrefNotLogged}
                  >
                    <Icon shape="general--log-in" size="s" />
                    {loginToggle.labelNotLogged}
                  </a>
                )}
              </div>
            )}
            {!!(
              languageSelector && Object.values(languageSelector).length >= 1
            ) && (
              <a
                className="ecl-link ecl-link--standalone ecl-site-header-harmonised__language-selector"
                href={languageSelector.href}
                data-ecl-language-selector
              >
                <span className="ecl-site-header-harmonised__language-icon">
                  <Icon shape="general--language" size="s" />
                  <span className="ecl-site-header-harmonised__language-code">
                    {languageSelector.code}
                  </span>
                </span>
                {languageSelector.label}
              </a>
            )}
            {!!(
              searchToggle &&
              Object.values(searchToggle).length >= 1 &&
              searchForm
            ) && (
              <div className="ecl-site-header-harmonised__search-container">
                <a
                  className="ecl-link ecl-link--standalone ecl-site-header-harmonised__search-toggle"
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
                  className="ecl-site-header-harmonised__search"
                  id={searchForm.id}
                  data-ecl-search-form
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {bannerTop && (
        <div className="ecl-site-header-harmonised__banner-top">
          <div className="ecl-container">{bannerTop}</div>
        </div>
      )}
      {banner && (
        <div className="ecl-site-header-harmonised__banner">
          <div className="ecl-container">{banner}</div>
        </div>
      )}

      {!!(languageSelector && languageSelector.overlay) && (
        <LanguageListOverlay {...languageSelector.overlay} hidden />
      )}
    </header>
  );
};

SiteHeaderHarmonised.propTypes = {
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
  bannerTop: PropTypes.string,
  banner: PropTypes.string,
  className: PropTypes.string,
};

SiteHeaderHarmonised.defaultProps = {
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
  bannerTop: '',
  banner: '',
  className: '',
};

export default SiteHeaderHarmonised;
