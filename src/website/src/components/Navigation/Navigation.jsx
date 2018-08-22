import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';

import LinkGroup from './LinkGroup';
import NavigationLink from './NavigationLink';
import './Navigation.scss';

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
          className={`tmp-nav__button-toggle${
            sidebarOpen
              ? ' tmp-nav__button-toggle--open'
              : ' tmp-nav__button-toggle--closed'
          } `}
          onClick={onToggleSidebar}
        >
          <span className="tmp-nav__hamburger-box">
            <span className="tmp-nav__hamburger-inner" />
          </span>
        </button>
        <nav className={`tmp-nav${sidebarOpen ? '' : ' tmp-nav--closed'} `}>
          <div className="tmp-nav__header">
            <Link to="/" className="tmp-nav__logo" title="European Commission">
              <span className="tmp-nav__logo-sr">European Commission</span>
            </Link>
            <h2 className="tmp-nav__title">Europa Component Library</h2>
          </div>
          <ul className="tmp-nav__list tmp-nav__system-list">
            <li className="tmp-nav__system-list-item">
              <NavLink
                to="/ec/"
                strict
                className="tmp-nav__system-list-item-link"
                activeClassName="tmp-nav__system-list-item-link--selected"
              >
                EC
              </NavLink>
            </li>
            <li className="tmp-nav__system-list-item">
              <NavLink
                to="/eu/"
                strict
                className="tmp-nav__system-list-item-link"
                activeClassName="tmp-nav__system-list-item-link--selected"
              >
                EU
              </NavLink>
            </li>
          </ul>
          <ul className="tmp-nav__list">
            {gettingStartedPage && (
              <li>
                <NavigationLink
                  meta={gettingStartedPage}
                  className="tmp-nav__group-list-item"
                  activeClassName="tmp-nav__group-list-item--active"
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
            />
            <LinkGroup
              pages={pages
                .filter(page => page.url.indexOf(`${prefix}/templates`) === 0)
                .sort((a, b) => a.order > b.order)}
              groupUrl={`${prefix}/templates`}
              title="Templates"
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
                  className="tmp-nav__group-list-item"
                  activeClassName="tmp-nav__group-list-item--active"
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
