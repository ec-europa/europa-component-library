/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaMenu from '@ecl/eu-component-menu/eu-component-menu';

import MenuItem from './MenuItem';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.menu = null;
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    this.menu = new VanillaMenu(this.menuRef.current);
    this.menu.init();
  }

  componentWillUnmount() {
    if (this.menu) this.menu.destroy();
  }

  render() {
    const { label, items, className, ...props } = this.props;

    const classNames = classnames(className, 'ecl-menu');

    return (
      <nav
        {...props}
        className={classNames}
        aria-expanded="false"
        ref={this.menuRef}
      >
        <div className="ecl-container">
          <button
            className="ecl-menu__toggle ecl-button ecl-button--ghost"
            type="button"
            data-ecl-menu-hamburger-button
          >
            <div className="ecl-menu__toggle-container">
              <div className="ecl-menu__hamburger">
                <div className="ecl-menu__hamburger--bar1" />
                <div className="ecl-menu__hamburger--bar2" />
                <div className="ecl-menu__hamburger--bar3" />
              </div>
              {label}
            </div>
          </button>
          <ul className="ecl-menu__list" data-ecl-menu-list>
            {items.map(item => (
              <MenuItem {...item} key={item.label} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isSelected: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          href: PropTypes.string,
          isSelected: PropTypes.bool,
        })
      ),
    })
  ),
  className: PropTypes.string,
};

Menu.defaultProps = {
  label: '',
  items: [],
  className: '',
};
