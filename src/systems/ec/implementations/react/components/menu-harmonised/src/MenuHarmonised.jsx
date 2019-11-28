/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

import { MenuHarmonisedItem } from './MenuHarmonisedItem';

export const MenuHarmonised = ({
  toggleLabelOpen,
  toggleLabelClose,
  siteName,
  items,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-menu-harmonised');

  return (
    <nav
      {...props}
      className={classNames}
      aria-expanded="false"
      data-ecl-menu-harmonised
    >
      <a
        className="ecl-link ecl-link--standalone ecl-menu-harmonised__toggle"
        href="/example"
        data-ecl-menu-harmonised-hamburger-button
      >
        <div className="ecl-menu-harmonised__toggle-open">
          <Icon shape="general--hamburger" size="s" />
          {toggleLabelOpen}
        </div>
        <div className="ecl-menu-harmonised__toggle-close">
          <Icon shape="ui--close-filled" size="s" />
          {toggleLabelClose}
        </div>
      </a>
      <div className="ecl-menu__site-name">{siteName}</div>
      <ul className="ecl-menu-harmonised__list" data-ecl-menu-harmonised-list>
        {items.map(item => (
          <MenuHarmonisedItem {...item} key={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuHarmonised;

MenuHarmonised.propTypes = {
  toggleLabelOpen: PropTypes.string,
  toggleLabelClose: PropTypes.string,
  siteName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MenuHarmonisedItem.propTypes)),
  className: PropTypes.string,
};

MenuHarmonised.defaultProps = {
  toggleLabelOpen: '',
  toggleLabelClose: '',
  siteName: '',
  items: [],
  className: '',
};
