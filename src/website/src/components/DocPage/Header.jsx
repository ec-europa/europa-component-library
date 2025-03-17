import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import icons from '@ecl/resources-icons/dist/sprites/icons.svg';

import Container from '../Grid/Container';
import styles from './Header.module.scss';

import { getPageTitle, getSectionTitle } from './utils/title';

const navigateTab = (e, navigate) => {
  if (e.target.value.indexOf('/playground/') !== -1) {
    window.location.href = e.target.value;
    return;
  }

  navigate(e.target.value); // Use the navigate hook
};

const Header = React.memo(({ component }) => {
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation(); // Get the location object

  if (!component || !component.attributes) return null;

  const pageTitle = getPageTitle(component);
  const sectionTitle = getSectionTitle(component);

  return (
    <header className={styles.header}>
      <Container>
        {sectionTitle && (
          <div className={styles['header__section-header']}>{sectionTitle}</div>
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
                      className={({ isActive }) =>
                        isActive
                          ? `${styles['header__tabs-item']} ${styles['header__tabs-item--active']}`
                          : styles['header__tabs-item']
                      }
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
                      <use xlinkHref={`${icons}#external`} />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
            <div className={styles.select__container}>
              <select
                id="header-tabs"
                className={styles.select}
                onChange={(e) => navigateTab(e, navigate)} // Use navigate from hooks
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
                  <use xlinkHref={`${icons}#corner-arrow`} />
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
    playground: PropTypes.shape({
      system: PropTypes.string,
      path: PropTypes.string,
    }),
  }),
  parent: PropTypes.shape({
    children: PropTypes.arrayOf(
      PropTypes.shape({
        attributes: PropTypes.shape({
          url: PropTypes.string,
          title: PropTypes.string,
          isTab: PropTypes.bool,
        }),
      }),
    ),
    attributes: PropTypes.shape({
      playground: PropTypes.shape({
        system: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }),
});

Header.propTypes = {
  component: componentType.isRequired,
};

export default Header;
