/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MenuItem from './MenuItem';

const Menu = ({ items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-menu');

  return (
    <nav {...props} className={classNames}>
      <div className="ecl-container">
        <ul className="ecl-menu__list">
          {items.map(item => (
            <MenuItem {...item} key={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

Menu.defaultProps = {
  items: [],
};

export default Menu;
