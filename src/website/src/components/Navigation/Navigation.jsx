import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';

import LinkGroup from './LinkGroup';
import NavigationLink from './NavigationLink';
import styles from './Navigation.scss';

class Navigation extends PureComponent {
  render() {
    const { sidebarOpen, onToggleSidebar, pages, prefix } = this.props;

    const gettingStartedPage = (pages.filter(
      page => page.url.indexOf(`${prefix}/getting-started`) === 0
    ) || [])[0];

    const whatNewPage = (pages.filter(
      page => page.url.indexOf(`${prefix}/whats-new`) === 0
    ) || [])[0];

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
          <ul className={styles.list}>
            {gettingStartedPage && (
              <li>
                <NavigationLink
                  meta={gettingStartedPage}
                  className={styles['group-list-item']}
                  activeClassName={styles['group-list-item--active']}
                >
                  {gettingStartedPage.title}
                </NavigationLink>
              </li>
            )}
            <LinkGroup
              pages={pages
                .filter(page => page.url.indexOf(`${prefix}/style`) === 0)
                .sort((a, b) => a.order > b.order)}
              groupUrl={`${prefix}/style`}
              title="Style"
            />
            <LinkGroup
              pages={pages.filter(
                page => page.url.indexOf(`${prefix}/components`) === 0
              )}
              groupUrl={`${prefix}/components`}
              title="Components"
              showStatus
            />
            <LinkGroup
              pages={pages
                .filter(page => page.url.indexOf(`${prefix}/templates`) === 0)
                .sort((a, b) => a.order > b.order)}
              groupUrl={`${prefix}/templates`}
              title="Templates"
              showStatus
            />
            <LinkGroup
              pages={pages
                .filter(page => page.url.indexOf(`${prefix}/guidelines`) === 0)
                .sort((a, b) => a.order > b.order)}
              groupUrl={`${prefix}/guidelines`}
              title="Guidelines"
            />
            {whatNewPage && (
              <li>
                <NavigationLink
                  meta={whatNewPage}
                  className={styles['group-list-item']}
                  activeClassName={styles['group-list-item--active']}
                >
                  {whatNewPage.title}
                </NavigationLink>
              </li>
            )}
            <LinkGroup
              pages={pages
                .filter(page => page.url.indexOf(`${prefix}/resources`) === 0)
                .sort((a, b) => a.order > b.order)}
              groupUrl={`${prefix}/resources`}
              title="Resources"
            />
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  sidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  prefix: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  sidebarOpen: true,
  onToggleSidebar: () => {},
};

// Use withRouter to update links when they become active
export default withRouter(Navigation);
