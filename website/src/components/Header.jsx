import React, { Fragment } from 'react';

const Header = () => (
  <Fragment>
    <div class="ecl-skip-link__wrapper" id="skip-link">
      <a href="#main-content" class="ecl-skip-link">
        Skip to main content
      </a>
    </div>
    <header class="ecl-site-header" role="banner">
      <div class="ecl-site-switcher ecl-site-switcher--header">
        <div class="ecl-container">
          <ul class="ecl-site-switcher__list">
            <li class="ecl-site-switcher__option">
              <a class="ecl-link ecl-site-switcher__link" href="#">
                Commission and its priorities
              </a>
            </li>
            <li class="ecl-site-switcher__option ecl-site-switcher__option--is-selected">
              <a class="ecl-link ecl-site-switcher__link" href="#">
                Policies, information and services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ecl-container ecl-site-header__banner">
        <a
          href="https://ec.europa.eu"
          class="ecl-logo ecl-logo--logotype ecl-site-header__logo"
          title="Home - European Commission"
        >
          <span class="ecl-u-sr-only">Home - European Commission</span>
        </a>
        <div class="ecl-lang-select-sites ecl-site-header__lang-select-sites">
          <a href="#" class="ecl-lang-select-sites__link">
            <span class="ecl-lang-select-sites__label">English</span>
            <span class="ecl-lang-select-sites__code">
              <span class="ecl-icon ecl-icon--language ecl-lang-select-sites__icon" />
              <span class="ecl-lang-select-sites__code-text">en</span>
            </span>
          </a>
        </div>
        <form class="ecl-search-form ecl-site-header__search">
          <label class="ecl-search-form__textfield-wrapper">
            <span class="ecl-u-sr-only">Search this website</span>
            <input
              type="search"
              class="ecl-text-input ecl-search-form__textfield"
              id="search-components"
              name="search-components"
            />
            <script
              id="searchIndexPath"
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: `{ "path": "/assets/searchIndex.json" }`,
              }}
            />
          </label>
          <button
            class="ecl-button ecl-button--form ecl-search-form__button"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  </Fragment>
);

export default Header;
