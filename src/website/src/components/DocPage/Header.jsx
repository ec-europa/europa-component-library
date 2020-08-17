/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import icons from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import Container from '../Grid/Container';
import styles from './Header.scss';

import { getPageTitle, getSectionTitle } from './utils/title';

const navigateTab = (e, history) => {
  if (e.target.value.indexOf('/playground/') !== -1) {
    window.location.href = e.target.value;
    return;
  }

  history.push(e.target.value);
};

const Header = React.memo(({ component, history, location }) => {
  if (!component || !component.attributes) return null;

  const pageTitle = getPageTitle(component);
  const sectionTitle = getSectionTitle(component);

  return (
    <header className={styles.header}>
      <Container>
        {sectionTitle && (
          <h3 className={styles['header__section-header']}>{sectionTitle}</h3>
        )}
        <h1 className={styles['header__page-title']}>{pageTitle}</h1>
        {component.attributes.isTab && (
          <>
            <ul className={styles.header__tabs}>
              {component.parent.children
                .filter((t) => t.attributes.isTab)
                .map((tab) => (
                  <li key={tab.attributes.url}>
                    <NavLink
                      to={tab.attributes.url}
                      strict
                      className={styles['header__tabs-item']}
                      activeClassName={styles['header__tabs-item--active']}
                    >
                      {tab.attributes.title}
                    </NavLink>
                  </li>
                ))}
              {component.parent.attributes.playground && (
                <li>
                  <a
                    href={`${process.env.PUBLIC_URL}/playground/${
                      component.parent.attributes.playground.system
                    }/${
                      process.env.NODE_ENV === 'development' ? 'index.html' : ''
                    }?path=${component.parent.attributes.playground.path}`}
                    className={styles['header__tabs-item']}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Playground
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      className={styles['header__tabs-icon']}
                    >
                      <use xlinkHref={`${icons}#ui--external`} />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
            <div className={styles.select__container}>
              <select
                id="header-tabs"
                className={styles.select}
                onChange={(e) => navigateTab(e, history)}
                defaultValue={location.pathname}
              >
                {component.parent.children.map((tab) => (
                  <option key={tab.attributes.url} value={tab.attributes.url}>
                    {tab.attributes.title}
                  </option>
                ))}
                {component.parent.attributes.playground && (
                  <option
                    value={`${process.env.PUBLIC_URL}/playground/${
                      component.parent.attributes.playground.system
                    }/${
                      process.env.NODE_ENV === 'development' ? 'index.html' : ''
                    }?path=${component.parent.attributes.playground.path}`}
                  >
                    Playground
                  </option>
                )}
              </select>
              <div className={styles.select__icon}>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  className={styles['select__icon-shape']}
                >
                  <use xlinkHref={`${icons}#ui--corner-arrow`} />
                </svg>
              </div>
            </div>
          </>
        )}
      </Container>
    </header>
  );
});

const componentType = PropTypes.shape({
  attributes: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    isTab: PropTypes.bool,
  }),
});

const componentDefaults = {
  attributes: {
    url: '',
    title: '',
    isTab: false,
  },
};

Header.propTypes = {
  parent: componentType,
  component: componentType,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Header.defaultProps = {
  parent: componentDefaults,
  component: componentDefaults,
};

export default withRouter(Header);
