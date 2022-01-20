import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MenuLegacyItem } from './MenuLegacyItem';

export function MenuLegacy({ label, items, className, ...props }) {
  const classNames = classnames(className, 'ecl-menu-legacy');

  return (
    <nav
      {...props}
      className={classNames}
      aria-expanded="false"
      data-ecl-menu-legacy
    >
      <div className="ecl-container">
        <button
          className="ecl-menu-legacy__toggle ecl-button ecl-button--ghost"
          type="button"
          data-ecl-menu-legacy-hamburger-button
        >
          <div className="ecl-menu-legacy__toggle-container">
            <div className="ecl-menu-legacy__hamburger">
              <div className="ecl-menu-legacy__hamburger--bar1" />
              <div className="ecl-menu-legacy__hamburger--bar2" />
              <div className="ecl-menu-legacy__hamburger--bar3" />
            </div>
            {label}
          </div>
        </button>
        <ul className="ecl-menu-legacy__list" data-ecl-menu-legacy-list>
          {items.map((item) => (
            <MenuLegacyItem {...item} key={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuLegacy;

MenuLegacy.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MenuLegacyItem.propTypes)),
  className: PropTypes.string,
};

MenuLegacy.defaultProps = {
  label: '',
  items: [],
  className: '',
};
