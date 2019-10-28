import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import SearchForm from '@ecl/ec-react-component-search-form';
import { LanguageListOverlay } from '@ecl/ec-react-component-language-list';

const SiteHeaderCore = ({
  logo,
  languageSelector,
  searchToggle,
  searchForm,
  className,
  ...props
}) => {
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

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const logoSrc = require(`@ecl/ec-resources-logo/logo--${logoLanguage}.svg`);

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
              languageSelector && Object.values(languageSelector).length >= 1
            ) && (
              <a
                className="ecl-link ecl-link--standalone ecl-site-header-core__language-selector"
                href={languageSelector.href}
                data-ecl-language-selector
                aria-controls="language-list-overlay"
              >
                <span className="ecl-site-header-core__language-icon">
                  <Icon shape="general--language" size="s" />
                  <span className="ecl-site-header-core__language-code">
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

      {!!(languageSelector && languageSelector.overlay) && (
        <LanguageListOverlay
          {...languageSelector.overlay}
          id="language-list-overlay"
          hidden
        />
      )}
    </header>
  );
};

SiteHeaderCore.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
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
  languageSelector: {},
  searchToggle: {},
  searchForm: {},
  className: '',
};

export default SiteHeaderCore;
