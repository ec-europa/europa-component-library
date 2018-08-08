import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, NavLink, Switch, withRouter } from 'react-router-dom';
import icons from '@ecl/ec-preset-website/dist/images/icons/symbol-defs.svg';

import NavigationLink from './NavigationLink';
import './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    const hasPathname = props && props.location && props.location.pathname;

    this.state = {
      // EC
      ECstyle:
        hasPathname && props.location.pathname.indexOf('/ec/style') === 0,
      ECcomponents:
        hasPathname && props.location.pathname.indexOf('/ec/components') === 0,
      ECtemplates:
        hasPathname && props.location.pathname.indexOf('/ec/templates') === 0,
      ECguidelines:
        hasPathname && props.location.pathname.indexOf('/ec/guidelines') === 0,
      ECresources:
        hasPathname && props.location.pathname.indexOf('/ec/resources') === 0,

      // EU
      EUstyle:
        hasPathname && props.location.pathname.indexOf('/eu/style') === 0,
      EUcomponents:
        hasPathname && props.location.pathname.indexOf('/eu/components') === 0,
      EUtemplates:
        hasPathname && props.location.pathname.indexOf('/eu/templates') === 0,
      EUguidelines:
        hasPathname && props.location.pathname.indexOf('/eu/guidelines') === 0,
      EUresources:
        hasPathname && props.location.pathname.indexOf('/eu/resources') === 0,
    };

    // EC
    this.toggleECStyle = this.toggleECStyle.bind(this);
    this.toggleECComponents = this.toggleECComponents.bind(this);
    this.toggleECTemplates = this.toggleECTemplates.bind(this);
    this.toggleECGuidelines = this.toggleECGuidelines.bind(this);
    this.toggleECResources = this.toggleECResources.bind(this);

    // EU
    this.toggleEUStyle = this.toggleEUStyle.bind(this);
    this.toggleEUComponents = this.toggleEUComponents.bind(this);
    this.toggleEUTemplates = this.toggleEUTemplates.bind(this);
    this.toggleEUGuidelines = this.toggleEUGuidelines.bind(this);
    this.toggleEUResources = this.toggleEUResources.bind(this);
  }

  // EC
  toggleECStyle() {
    this.setState(prevState => ({
      ECstyle: !prevState.ECstyle,
    }));
  }

  toggleECComponents() {
    this.setState(prevState => ({
      ECcomponents: !prevState.ECcomponents,
    }));
  }

  toggleECTemplates() {
    this.setState(prevState => ({
      ECtemplates: !prevState.ECtemplates,
    }));
  }

  toggleECGuidelines() {
    this.setState(prevState => ({
      ECguidelines: !prevState.ECguidelines,
    }));
  }

  toggleECResources() {
    this.setState(prevState => ({
      ECresources: !prevState.ECresources,
    }));
  }

  // EU
  toggleEUStyle() {
    this.setState(prevState => ({
      EUstyle: !prevState.EUstyle,
    }));
  }

  toggleEUComponents() {
    this.setState(prevState => ({
      EUcomponents: !prevState.EUcomponents,
    }));
  }

  toggleEUTemplates() {
    this.setState(prevState => ({
      EUtemplates: !prevState.EUtemplates,
    }));
  }

  toggleEUGuidelines() {
    this.setState(prevState => ({
      EUguidelines: !prevState.EUguidelines,
    }));
  }

  toggleEUResources() {
    this.setState(prevState => ({
      EUresources: !prevState.EUresources,
    }));
  }

  render() {
    const { sidebarOpen, onToggleSidebar, ecPages, euPages } = this.props;
    const {
      ECstyle,
      ECcomponents,
      ECtemplates,
      ECguidelines,
      ECresources,
      EUstyle,
      EUcomponents,
      EUtemplates,
      EUguidelines,
      EUresources,
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
            <Link
              to="/"
              className="ecl-logo ecl-logo--logotype tmp-nav__logo"
              title="European Commission"
            >
              <span className="ecl-u-sr-only">European Commission</span>
            </Link>
            <h2 className="tmp-nav__title">Europa Component Library</h2>
          </div>
          <ul className="ecl-list ecl-list--unstyled tmp-nav__system-list">
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
          <Switch>
            <Route
              path="/ec/"
              strict
              render={() => (
                <ul className="ecl-list ecl-list--unstyled">
                  {ecPages
                    .keys()
                    .filter(key => key.indexOf('./getting-started') === 0)
                    .map(key => ecPages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavigationLink
                          meta={meta}
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__group-list-item--active"
                        >
                          {meta.title}
                        </NavigationLink>
                      </li>
                    ))}
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleECStyle}
                    >
                      <span>
                        Style
                        <svg className="ecl-icon ecl-icon--xs">
                          {ECstyle ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!ECstyle}
                    >
                      {ecPages
                        .keys()
                        .filter(key => key.indexOf('./style') === 0)
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleECComponents}
                    >
                      <span>
                        Components
                        <svg className="ecl-icon ecl-icon--xs">
                          {ECcomponents ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!ECcomponents}
                    >
                      {ecPages
                        .keys()
                        .filter(key => key.indexOf('./components') === 0)
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleECTemplates}
                    >
                      <span>
                        Templates
                        <svg className="ecl-icon ecl-icon--xs">
                          {ECtemplates ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!ECtemplates}
                    >
                      {ecPages
                        .keys()
                        .filter(key => key.indexOf('./templates') === 0)
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleECGuidelines}
                    >
                      <span>
                        Guidelines
                        <svg className="ecl-icon ecl-icon--xs">
                          {ECguidelines ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!ECguidelines}
                    >
                      {ecPages
                        .keys()
                        .filter(key => key.indexOf('./guidelines') === 0)
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  {ecPages
                    .keys()
                    .filter(key => key.indexOf('./whats-new') === 0)
                    .map(key => ecPages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavigationLink
                          meta={meta}
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__group-list-item--active"
                        >
                          {meta.title}
                        </NavigationLink>
                      </li>
                    ))}
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleECResources}
                    >
                      <span>
                        Resources
                        <svg className="ecl-icon ecl-icon--xs">
                          {ECresources ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!ECresources}
                    >
                      {ecPages
                        .keys()
                        .filter(key => key.indexOf('./resources') === 0)
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              )}
            />
            <Route
              path="/eu/"
              strict
              render={() => (
                <ul className="ecl-list ecl-list--unstyled">
                  {euPages
                    .keys()
                    .filter(key => key.indexOf('./getting-started') === 0)
                    .map(key => euPages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavigationLink
                          meta={meta}
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__group-list-item--active"
                        >
                          {meta.title}
                        </NavigationLink>
                      </li>
                    ))}
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleEUStyle}
                    >
                      <span>
                        Style
                        <svg className="ecl-icon ecl-icon--xs">
                          {EUstyle ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!EUstyle}
                    >
                      {euPages
                        .keys()
                        .filter(key => key.indexOf('./style') === 0)
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleEUComponents}
                    >
                      <span>
                        Components
                        <svg className="ecl-icon ecl-icon--xs">
                          {EUcomponents ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!EUcomponents}
                    >
                      {euPages
                        .keys()
                        .filter(key => key.indexOf('./components') === 0)
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleEUTemplates}
                    >
                      <span>
                        Templates
                        <svg className="ecl-icon ecl-icon--xs">
                          {EUtemplates ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!EUtemplates}
                    >
                      {euPages
                        .keys()
                        .filter(key => key.indexOf('./templates') === 0)
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleEUGuidelines}
                    >
                      <span>
                        Guidelines
                        <svg className="ecl-icon ecl-icon--xs">
                          {EUguidelines ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!EUguidelines}
                    >
                      {euPages
                        .keys()
                        .filter(key => key.indexOf('./guidelines') === 0)
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  {euPages
                    .keys()
                    .filter(key => key.indexOf('./whats-new') === 0)
                    .map(key => euPages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavigationLink
                          meta={meta}
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__group-list-item--active"
                        >
                          {meta.title}
                        </NavigationLink>
                      </li>
                    ))}
                  <li>
                    <button
                      type="button"
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleEUResources}
                    >
                      <span>
                        Resources
                        <svg className="ecl-icon ecl-icon--xs">
                          {EUresources ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={!EUresources}
                    >
                      {euPages
                        .keys()
                        .filter(key => key.indexOf('./resources') === 0)
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavigationLink
                              meta={meta}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavigationLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              )}
            />
          </Switch>
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
  ecPages: PropTypes.object.isRequired, // eslint-disable-line
  euPages: PropTypes.object.isRequired, // eslint-disable-line
};

Navigation.defaultProps = {
  sidebarOpen: true,
  onToggleSidebar: () => {},
};

export default withRouter(Navigation);
