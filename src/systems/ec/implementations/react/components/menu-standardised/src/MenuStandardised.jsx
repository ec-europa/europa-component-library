/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

import { MenuStandardisedItem } from './MenuStandardisedItem';

export const MenuStandardised = ({
  toggleLabelOpen,
  toggleLabelClose,
  siteName,
  items,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-menu-standardised');

  return (
    <nav
      {...props}
      className={classNames}
      aria-expanded="false"
      data-ecl-menu-standardised
    >
      <div className="ecl-container">
        <a
          className="ecl-link ecl-link--standalone ecl-menu-standardised__toggle"
          href="/example"
          data-ecl-menu-standardised-toggle
        >
          <div className="ecl-menu-standardised__toggle-open">
            <Icon shape="general--hamburger" size="s" />
            {toggleLabelOpen}
          </div>
          <div className="ecl-menu-standardised__toggle-close">
            <Icon shape="ui--close-filled" size="s" />
            {toggleLabelClose}
          </div>
        </a>
        <div className="ecl-menu-standardised__site-name">{siteName}</div>
        <ul
          className="ecl-menu-standardised__list"
          data-ecl-menu-standardised-list
        >
          {items.map(item => (
            <MenuStandardisedItem {...item} key={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuStandardised;

MenuStandardised.propTypes = {
  toggleLabelOpen: PropTypes.string,
  toggleLabelClose: PropTypes.string,
  siteName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MenuStandardisedItem.propTypes)),
  className: PropTypes.string,
};

MenuStandardised.defaultProps = {
  toggleLabelOpen: '',
  toggleLabelClose: '',
  siteName: '',
  items: [],
  className: '',
};
