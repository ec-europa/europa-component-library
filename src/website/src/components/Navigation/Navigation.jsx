import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';

import LinkList from './LinkList';
import styles from './Navigation.scss';

const Navigation = React.memo(
  ({
    sidebarOpen,
    onToggleSidebar,
    pages,
    prefix,
    forceRefresh,
    isLoading,
  }) => (
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
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']} />
        </span>
      </button>
      <header className={styles.header}>
        <span className={styles.version}>v{process.env.ECL_VERSION}</span>
        {prefix === '/eu' ? (
          <Link
            to="/"
            className={`${styles.logo} ${styles['logo--eu']}`}
            title="European Union"
          >
            <span className={styles['logo-sr']}>European Union</span>
          </Link>
        ) : (
          <Link to="/" className={styles.logo} title="European Commission">
            <span className={styles['logo-sr']}>European Commission</span>
          </Link>
        )}
        <h2 className={styles.title}>Europa Component Library</h2>
      </header>
      <ul className={styles['system-list']}>
        <li className={styles['system-list-item']}>
          <NavLink
            to="/ec/"
            strict
            className={styles['system-list-item-link']}
            activeClassName={styles['system-list-item-link--selected']}
          >
            EC
          </NavLink>
        </li>
        <li className={styles['system-list-item']}>
          <NavLink
            to="/eu/"
            strict
            className={styles['system-list-item-link']}
            activeClassName={styles['system-list-item-link--selected']}
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
  )
);

Navigation.propTypes = {
  sidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
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

// Use withRouter to update links when they become active
export default withRouter(Navigation);
