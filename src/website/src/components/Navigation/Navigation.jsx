import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import icons from '@ecl/ec-preset-website/dist/images/icons/symbol-defs.svg';

import NavigationLink from './NavigationLink';
import './Navigation.scss';

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    const hasPathname = props && props.location && props.location.pathname;

    const { prefix } = props;

    this.state = {
      // EC
      styleGroup:
        hasPathname && props.location.pathname.indexOf(`${prefix}/style`) === 0,
      componentsGroup:
        hasPathname &&
        props.location.pathname.indexOf(`${prefix}/components`) === 0,
      templatesGroup:
        hasPathname &&
        props.location.pathname.indexOf(`${prefix}/templates`) === 0,
      guidelinesGroup:
        hasPathname &&
        props.location.pathname.indexOf(`${prefix}/guidelines`) === 0,
      resourcesGroup:
        hasPathname &&
        props.location.pathname.indexOf(`${prefix}/resources`) === 0,
    };

    // EC
    this.toggleStyleGroup = this.toggleStyleGroup.bind(this);
    this.toggleComponentsGroup = this.toggleComponentsGroup.bind(this);
    this.toggleTemplatesGroup = this.toggleTemplatesGroup.bind(this);
    this.toggleGuidelinesGroup = this.toggleGuidelinesGroup.bind(this);
    this.toggleResourcesGroup = this.toggleResourcesGroup.bind(this);
  }

  // EC
  toggleStyleGroup() {
    this.setState(prevState => ({
      styleGroup: !prevState.styleGroup,
    }));
  }

  toggleComponentsGroup() {
    this.setState(prevState => ({
      componentsGroup: !prevState.componentsGroup,
    }));
  }

  toggleTemplatesGroup() {
    this.setState(prevState => ({
      templatesGroup: !prevState.templatesGroup,
    }));
  }

  toggleGuidelinesGroup() {
    this.setState(prevState => ({
      guidelinesGroup: !prevState.guidelinesGroup,
    }));
  }

  toggleResourcesGroup() {
    this.setState(prevState => ({
      resourcesGroup: !prevState.resourcesGroup,
    }));
  }

  render() {
    const { sidebarOpen, onToggleSidebar, pages, prefix } = this.props;
    const {
      styleGroup,
      componentsGroup,
      templatesGroup,
      guidelinesGroup,
      resourcesGroup,
    } = this.state;

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
            {pages
              .filter(
                page => page.url.indexOf(`${prefix}/getting-started`) === 0
              )
              .sort((a, b) => a.order > b.order)
              .map(page => (
                <li key={page.url}>
                  <NavigationLink
                    meta={page}
                    className="tmp-nav__group-list-item"
                    activeClassName="tmp-nav__group-list-item--active"
                  >
                    {page.title}
                  </NavigationLink>
                </li>
              ))}
            <li>
              <button
                type="button"
                className="tmp-nav__group-list-item"
                onClick={this.toggleStyleGroup}
              >
                <span>
                  Style
                  <svg className="tmp-nav__icon">
                    {styleGroup ? (
                      <use xlinkHref={`${icons}#ecl-icon--down`} />
                    ) : (
                      <use xlinkHref={`${icons}#ecl-icon--right`} />
                    )}
                  </svg>
                </span>
              </button>
              <ul className="tmp-nav__list" aria-hidden={!styleGroup}>
                {pages
                  .filter(page => page.url.indexOf(`${prefix}/style`) === 0)
                  .sort((a, b) => a.order > b.order)
                  .map(page => (
                    <li key={page.url}>
                      <NavigationLink
                        meta={page}
                        className="tmp-nav__page-list-item"
                        activeClassName="tmp-nav__page-list-item--active"
                      >
                        {page.title}
                      </NavigationLink>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="tmp-nav__group-list-item"
                onClick={this.toggleComponentsGroup}
              >
                <span>
                  Components
                  <svg className="tmp-nav__icon">
                    {componentsGroup ? (
                      <use xlinkHref={`${icons}#ecl-icon--down`} />
                    ) : (
                      <use xlinkHref={`${icons}#ecl-icon--right`} />
                    )}
                  </svg>
                </span>
              </button>
              <ul className="tmp-nav__list" aria-hidden={!componentsGroup}>
                {pages
                  .filter(
                    page => page.url.indexOf(`${prefix}/components`) === 0
                  )
                  .map(page => (
                    <li key={page.url}>
                      <NavigationLink
                        meta={page}
                        className="tmp-nav__page-list-item"
                        activeClassName="tmp-nav__page-list-item--active"
                      >
                        {page.title}
                      </NavigationLink>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="tmp-nav__group-list-item"
                onClick={this.toggleTemplatesGroup}
              >
                <span>
                  Templates
                  <svg className="tmp-nav__icon">
                    {templatesGroup ? (
                      <use xlinkHref={`${icons}#ecl-icon--down`} />
                    ) : (
                      <use xlinkHref={`${icons}#ecl-icon--right`} />
                    )}
                  </svg>
                </span>
              </button>
              <ul className="tmp-nav__list" aria-hidden={!templatesGroup}>
                {pages
                  .filter(page => page.url.indexOf(`${prefix}/templates`) === 0)
                  .sort((a, b) => a.order > b.order)
                  .map(page => (
                    <li key={page.url}>
                      <NavigationLink
                        meta={page}
                        className="tmp-nav__page-list-item"
                        activeClassName="tmp-nav__page-list-item--active"
                      >
                        {page.title}
                      </NavigationLink>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="tmp-nav__group-list-item"
                onClick={this.toggleGuidelinesGroup}
              >
                <span>
                  Guidelines
                  <svg className="tmp-nav__icon">
                    {guidelinesGroup ? (
                      <use xlinkHref={`${icons}#ecl-icon--down`} />
                    ) : (
                      <use xlinkHref={`${icons}#ecl-icon--right`} />
                    )}
                  </svg>
                </span>
              </button>
              <ul className="tmp-nav__list" aria-hidden={!guidelinesGroup}>
                {pages
                  .filter(
                    page => page.url.indexOf(`${prefix}/guidelines`) === 0
                  )
                  .sort((a, b) => a.order > b.order)
                  .map(page => (
                    <li key={page.url}>
                      <NavigationLink
                        meta={page}
                        className="tmp-nav__page-list-item"
                        activeClassName="tmp-nav__page-list-item--active"
                      >
                        {page.title}
                      </NavigationLink>
                    </li>
                  ))}
              </ul>
            </li>
            {pages
              .filter(page => page.url.indexOf(`${prefix}/whats-new`) === 0)
              .sort((a, b) => a.order > b.order)
              .map(page => (
                <li key={page.url}>
                  <NavigationLink
                    meta={page}
                    className="tmp-nav__group-list-item"
                    activeClassName="tmp-nav__group-list-item--active"
                  >
                    {page.title}
                  </NavigationLink>
                </li>
              ))}
            <li>
              <button
                type="button"
                className="tmp-nav__group-list-item"
                onClick={this.toggleResourcesGroup}
              >
                <span>
                  Resources
                  <svg className="tmp-nav__icon">
                    {resourcesGroup ? (
                      <use xlinkHref={`${icons}#ecl-icon--down`} />
                    ) : (
                      <use xlinkHref={`${icons}#ecl-icon--right`} />
                    )}
                  </svg>
                </span>
              </button>
              <ul className="tmp-nav__list" aria-hidden={!resourcesGroup}>
                {pages
                  .filter(page => page.url.indexOf(`${prefix}/resources`) === 0)
                  .sort((a, b) => a.order > b.order)
                  .map(page => (
                    <li key={page.url}>
                      <NavigationLink
                        meta={page}
                        className="tmp-nav__page-list-item"
                        activeClassName="tmp-nav__page-list-item--active"
                      >
                        {page.title}
                      </NavigationLink>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
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

export default withRouter(Navigation);
