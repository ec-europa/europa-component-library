import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';

import LinkList from './LinkList';
import styles from './Navigation.scss';

class Navigation extends PureComponent {
  render() {
    const { sidebarOpen, onToggleSidebar, pages, prefix } = this.props;

    return (
      <Fragment>
        <button
          type="button"
          className={`${styles['button-toggle']} ${
            sidebarOpen
              ? styles['button-toggle--open']
              : styles['button-toggle--closed']
          } `}
          onClick={onToggleSidebar}
        >
          <span className={styles['hamburger-box']}>
            <span className={styles['hamburger-inner']} />
          </span>
        </button>
        <nav
          className={`${styles.nav}${
            sidebarOpen ? '' : ` ${styles['nav--closed']}`
          }`}
        >
          <div className={styles.header}>
            <Link to="/" className={styles.logo} title="European Commission">
              <span className={styles['logo-sr']}>European Commission</span>
            </Link>
            <h2 className={styles.title}>Europa Component Library</h2>
          </div>
          <ul className={`${styles.list} ${styles['system-list']}`}>
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
          <LinkList
            pages={pages}
            level={0}
            className={styles.list}
            parentSection={prefix}
          />
        </nav>
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  sidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  pages: PropTypes.shape().isRequired,
  prefix: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  sidebarOpen: true,
  onToggleSidebar: () => {},
};

// Use withRouter to update links when they become active
export default withRouter(Navigation);
