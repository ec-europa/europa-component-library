/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MenuItem from './MenuItem';

const Menu = ({ label, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-menu');

  return (
    <nav {...props} className={classNames} aria-expanded="false" data-ecl-menu>
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
};

export default Menu;

Menu.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MenuItem.propTypes)),
  className: PropTypes.string,
};

Menu.defaultProps = {
  label: '',
  items: [],
  className: '',
};
