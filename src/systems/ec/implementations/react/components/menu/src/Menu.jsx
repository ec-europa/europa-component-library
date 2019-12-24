/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

import { MenuItem } from './MenuItem';

export const Menu = ({
  toggleLabelOpen,
  toggleLabelClose,
  siteName,
  items,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-menu');

  return (
    <nav {...props} className={classNames} aria-expanded="false" data-ecl-menu>
      <div className="ecl-container">
        <a
          className="ecl-link ecl-link--standalone ecl-menu__toggle"
          href="/example"
          data-ecl-menu-toggle
        >
          <div className="ecl-menu__toggle-open">
            <Icon shape="general--hamburger" size="s" />
            {toggleLabelOpen}
          </div>
          <div className="ecl-menu__toggle-close">
            <Icon shape="ui--close-filled" size="s" />
            {toggleLabelClose}
          </div>
        </a>
        {siteName && <div className="ecl-menu__site-name">{siteName}</div>}
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
  toggleLabelOpen: PropTypes.string,
  toggleLabelClose: PropTypes.string,
  siteName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MenuItem.propTypes)),
  className: PropTypes.string,
};

Menu.defaultProps = {
  toggleLabelOpen: '',
  toggleLabelClose: '',
  siteName: '',
  items: [],
  className: '',
};
