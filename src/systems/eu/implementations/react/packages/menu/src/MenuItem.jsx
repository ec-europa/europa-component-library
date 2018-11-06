/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';

const MenuItem = ({ label, href, isCurrent, children }) => {
  const classNames = classnames('ecl-menu__item', {
    'ecl-menu-item--current': isCurrent,
  });

  // Sub items
  let subItemsMarkup = '';
  if (children && children.length > 0) {
    const subItemsArray = children.map(child => {
      const subClassNames = classnames('ecl-menu__subitem', {
        'ecl-menu-subitem--current': isCurrent,
      });

      return (
        <li className={subClassNames} key={child.label}>
          <Link
            {...child}
            className="ecl-menu__sublink"
            data-ecl-menu-sublink
          />
        </li>
      );
    });
    subItemsMarkup = (
      <ul className="ecl-menu__sublist" data-ecl-menu-sublist>
        {subItemsArray}
      </ul>
    );
  }

  return (
    <li
      className={classNames}
      data-ecl-has-children={subItemsMarkup ? 'true' : 'false'}
    >
      <Link
        label={label}
        href={href}
        variant="standalone"
        className="ecl-menu__link"
        data-ecl-menu-link
        {...subItemsMarkup && {
          icon: {
            shape: 'ui--corner-arrow',
            size: 'xs',
            transform: 'rotate-180',
            className: 'ecl-menu__link-icon',
          },
        }}
      />

      {subItemsMarkup}
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  isCurrent: PropTypes.bool,
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
  isCurrent: false,
  children: [],
};

export default MenuItem;
