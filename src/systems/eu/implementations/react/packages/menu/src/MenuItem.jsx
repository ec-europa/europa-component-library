/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';

const MenuItem = ({ label, href, isSelected, children }) => {
  const classNames = classnames('ecl-menu__item', {
    'ecl-menu-item--selected': isSelected,
  });

  // Sub items
  let subItemsMarkup = '';
  if (children && children.length > 0) {
    const subItemsArray = children.map(child => {
      const subClassNames = classnames('ecl-menu__subitem', {
        'ecl-menu-subitem--selected': isSelected,
      });

      return (
        <li className={subClassNames} key={child.label}>
          <Link className="ecl-menu__sublink" {...child} />
        </li>
      );
    });
    subItemsMarkup = <ul className="ecl-menu__sublist">{subItemsArray}</ul>;
  }

  return (
    <li className={classNames}>
      <Link
        label={label}
        href={href}
        variant="standalone"
        className="ecl-menu__link"
      />

      {subItemsMarkup}
    </li>
  );
};

MenuItem.propTypes = {
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
};

MenuItem.defaultProps = {
  label: '',
  href: '',
  isSelected: false,
  children: [],
};

export default MenuItem;
