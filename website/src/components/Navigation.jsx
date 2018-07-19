import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <Fragment>
        <button
          className={`tmp-nav__button-toggle${
            this.state.open ? '' : ' tmp-nav__button-toggle--closed'
          } `}
          onClick={this.handleClick}
        >
          {this.state.open ? 'X' : '-'}
        </button>
        <nav className={`tmp-nav${this.state.open ? '' : ' tmp-nav--closed'} `}>
          <p>
            <Link to="/">Logo image</Link>
          </p>
          <ul className="ecl-list ecl-list--unstyled tmp-nav__system-list">
            <li className="tmp-nav__system-list-item">EC</li>
            <li className="tmp-nav__system-list-item">EU</li>
          </ul>
          <div className="tmp-">
            <ul>
              <li>
                <Link to="/components/button">Button</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
