import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router';

import logoEc from '@ecl/preset-ec/dist/images/logo/positive/logo-ec--en.svg';
import logoEu from '@ecl/preset-eu/dist/images/logo/standard-version/positive/logo-eu--en.svg';
import LinkList from './LinkList';
import styles from './Navigation.module.scss';

const Navigation = React.memo(
  ({
    sidebarOpen,
    onToggleSidebar,
    pages,
    prefix,
    forceRefresh,
    isLoading,
  }) => {
    const { pathname } = useLocation();
    const pagePath = pathname.startsWith(prefix)
      ? pathname.slice(prefix.length)
      : '';

    return (
      <nav
        className={`${styles.nav}${
          sidebarOpen ? '' : ` ${styles['nav--closed']}`
        }${forceRefresh ? ' ' : ''}`}
      >
        <button
          type="button"
          className={`${styles['button-toggle']} ${
            sidebarOpen
              ? styles['button-toggle--open']
              : styles['button-toggle--closed']
          }${forceRefresh ? ' ' : ''} `}
          onClick={onToggleSidebar}
          aria-label={
            sidebarOpen ? 'Close side navigation' : 'Open side navigation'
          }
        >
          <span className={styles['hamburger-inner']} />
        </button>
        <header className={styles.header}>
          <span className={styles.version}>v{process.env.ECL_VERSION}</span>
          {prefix === '/eu' ? (
            <Link to="/" className={styles.logo}>
              <img
                src={logoEu}
                alt="European Union logo"
                className={styles['logo-img']}
              />
            </Link>
          ) : (
            <Link to="/" className={styles.logo}>
              <img
                src={logoEc}
                alt="European Commission logo"
                className={styles['logo-img']}
              />
            </Link>
          )}
          <div className={styles.title}>Europa Component Library</div>
        </header>
        <ul className={styles['system-list']}>
          <li className={styles['system-list-item']}>
            <NavLink
              to={`/ec${pagePath}`}
              className={
                pathname.startsWith('/ec')
                  ? `${styles['system-list-item-link']} ${styles['system-list-item-link--selected']}`
                  : styles['system-list-item-link']
              }
            >
              EC
            </NavLink>
          </li>
          <li className={styles['system-list-item']}>
            <NavLink
              to={`/eu${pagePath}`}
              className={
                pathname.startsWith('/eu')
                  ? `${styles['system-list-item-link']} ${styles['system-list-item-link--selected']}`
                  : styles['system-list-item-link']
              }
            >
              EU
            </NavLink>
          </li>
        </ul>
        {isLoading ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <LinkList pages={pages} level={0} parentSection={prefix} />
        )}
      </nav>
    );
  },
);

Navigation.propTypes = {
  sidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  pages: PropTypes.array.isRequired,
  prefix: PropTypes.string.isRequired,
  forceRefresh: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Navigation.defaultProps = {
  sidebarOpen: true,
  onToggleSidebar: () => {},
  forceRefresh: false,
  isLoading: false,
};

export default Navigation;
