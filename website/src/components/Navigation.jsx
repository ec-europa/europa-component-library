import React, { Component, Fragment } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import icons from '@ecl/ec-preset-website/dist/images/icons/symbol-defs.svg';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, components: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleComponents = this.toggleComponents.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  toggleComponents() {
    this.setState(prevState => ({
      components: !prevState.components,
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
                  <li>
                    <button
                      className="tmp-nav__group-list-item"
                      onClick={this.toggleComponents}
                    >
                      <span>
                        Components
                        <svg className="ecl-icon ecl-icon--xs">
                          {this.state.components ? (
                            <use xlinkHref={`${icons}#ecl-icon--right`} />
                          ) : (
                            <use xlinkHref={`${icons}#ecl-icon--down`} />
                          )}
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="ecl-list ecl-list--unstyled ecl-u-aria"
                      aria-hidden={this.state.components ? true : false}
                    >
                      {this.props.pages.keys().map(key => {
                        const meta = this.props.pages(key).default;
                        if (meta) {
                          return (
                            <li key={meta.url}>
                              <NavLink
                                to={meta.url}
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
                </ul>
              )}
            />{' '}
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
