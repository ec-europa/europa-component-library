import React, { Component, Fragment } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import icons from '@ecl/ec-preset-website/dist/images/icons/symbol-defs.svg';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      style: false,
      components: false,
      templates: false,
      guidelines: false,
      resources: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleStyle = this.toggleStyle.bind(this);
    this.toggleComponents = this.toggleComponents.bind(this);
    this.toggleTemplates = this.toggleTemplates.bind(this);
    this.toggleGuidelines = this.toggleGuidelines.bind(this);
    this.toggleResources = this.toggleResources.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  toggleStyle() {
    this.setState(prevState => ({
      style: !prevState.style,
    }));
  }

  toggleComponents() {
    this.setState(prevState => ({
      components: !prevState.components,
    }));
  }

  toggleTemplates() {
    this.setState(prevState => ({
      templates: !prevState.templates,
    }));
  }

  toggleGuidelines() {
    this.setState(prevState => ({
      guidelines: !prevState.guidelines,
    }));
  }

  toggleResources() {
    this.setState(prevState => ({
      resources: !prevState.resources,
    }));
  }

  render() {
    return (
      <Fragment>
        <button
          className={`tmp-nav__button-toggle${
            this.state.open
              ? ' tmp-nav__button-toggle--open'
              : ' tmp-nav__button-toggle--closed'
          } `}
          onClick={this.toggleSidebar}
        >
          <span className="tmp-nav__hamburger-box">
            <span className="tmp-nav__hamburger-inner" />
          </span>
        </button>
        <nav className={`tmp-nav${this.state.open ? '' : ' tmp-nav--closed'} `}>
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
                to="/ec"
                className="tmp-nav__system-list-item-link"
                activeClassName="tmp-nav__system-list-item-link--selected"
              >
                EC
              </NavLink>
            </li>
            <li className="tmp-nav__system-list-item">
              <NavLink
                to="/eu"
                className="tmp-nav__system-list-item-link"
                activeClassName="tmp-nav__system-list-item-link--selected"
              >
                EU
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route
              path="/ec"
              render={() => (
                <ul className="ecl-list ecl-list--unstyled">
                  {this.props.pages
                    .keys()
                    .filter(key => key.indexOf('./getting-started') === 0)
                    .map(key => this.props.pages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavLink
                          to={
                            meta.defaultTab
                              ? `${meta.url}/${meta.defaultTab}`
                              : `${meta.url}`
                          }
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__page-list-item--active"
                        >
                          {meta.title}
                        </NavLink>
                      </li>
                    ))}
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleStyle}
                    >
                      <span>
                        Style
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.style ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.style ? false : true}
                    >
                      {this.props.pages
                        .keys()
                        .filter(key => key.indexOf('./style') === 0)
                        .map(key => this.props.pages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => {
                          if (meta) {
                            return (
                              <li key={meta.url}>
                                <NavLink
                                  to={`${meta.url}/${meta.defaultTab}`}
                                  className="tmp-nav__page-list-item"
                                  activeClassName="tmp-nav__page-list-item--active"
                                >
                                  {meta.title}
                                </NavLink>
                              </li>
                            );
                          }

                          return null;
                        })}
                    </ul>
                  </li>
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleComponents}
                    >
                      <span>
                        Components
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.components ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.components ? false : true}
                    >
                      {this.props.pages
                        .keys()
                        .filter(key => key.indexOf('./components') === 0)
                        .map(key => this.props.pages(key).default)
                        .map(meta => {
                          if (meta) {
                            return (
                              <li key={meta.url}>
                                <NavLink
                                  to={`${meta.url}/${meta.defaultTab}`}
                                  className="tmp-nav__page-list-item"
                                  activeClassName="tmp-nav__page-list-item--active"
                                >
                                  {meta.title}
                                </NavLink>
                              </li>
                            );
                          }

                          return null;
                        })}
                    </ul>
                  </li>
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleTemplates}
                    >
                      <span>
                        Templates
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.templates ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.templates ? false : true}
                    >
                      {this.props.pages
                        .keys()
                        .filter(key => key.indexOf('./templates') === 0)
                        .map(key => this.props.pages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => {
                          if (meta) {
                            return (
                              <li key={meta.url}>
                                <NavLink
                                  to={`${meta.url}/${meta.defaultTab}`}
                                  className="tmp-nav__page-list-item"
                                  activeClassName="tmp-nav__page-list-item--active"
                                >
                                  {meta.title}
                                </NavLink>
                              </li>
                            );
                          }

                          return null;
                        })}
                    </ul>
                  </li>
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleGuidelines}
                    >
                      <span>
                        Guidelines
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.guidelines ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.guidelines ? false : true}
                    >
                      {this.props.pages
                        .keys()
                        .filter(key => key.indexOf('./guidelines') === 0)
                        .map(key => this.props.pages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavLink
                              to={`${meta.url}/${meta.defaultTab}`}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                  {this.props.pages
                    .keys()
                    .filter(key => key.indexOf('./whats-new') === 0)
                    .map(key => this.props.pages(key).default)
                    .filter(meta => meta)
                    .sort((a, b) => a.order > b.order)
                    .map(meta => (
                      <li key={meta.url}>
                        <NavLink
                          to={
                            meta.defaultTab
                              ? `${meta.url}/${meta.defaultTab}`
                              : `${meta.url}`
                          }
                          className="tmp-nav__group-list-item"
                          activeClassName="tmp-nav__page-list-item--active"
                        >
                          {meta.title}
                        </NavLink>
                      </li>
                    ))}
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleResources}
                    >
                      <span>
                        Resources
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.resources ? (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.resources ? false : true}
                    >
                      {this.props.pages
                        .keys()
                        .filter(key => key.indexOf('./resources') === 0)
                        .map(key => this.props.pages(key).default)
                        .filter(meta => meta)
                        .sort((a, b) => a.order > b.order)
                        .map(meta => (
                          <li key={meta.url}>
                            <NavLink
                              to={`${meta.url}/${meta.defaultTab}`}
                              className="tmp-nav__page-list-item"
                              activeClassName="tmp-nav__page-list-item--active"
                            >
                              {meta.title}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              )}
            />
            <Route
              path="/eu"
              render={() => (
                <div className="tmp-">
                  <ul>
                    <li>Nothing</li>
                  </ul>
                </div>
              )}
            />
          </Switch>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
