import React, { Component, Fragment } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, tab: 'ec' };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.openECTab = this.openECTab.bind(this);
    this.openEUTab = this.openEUTab.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  openECTab() {
    this.setState(prevState => ({
      tab: 'ec',
    }));
  }

  openEUTab() {
    this.setState(prevState => ({
      tab: 'eu',
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
                    <NavLink
                      to="/ec/components/button"
                      className="tmp-nav__page-list-item"
                      activeClassName="tmp-nav__page-list-item--active"
                    >
                      Button
                    </NavLink>
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
