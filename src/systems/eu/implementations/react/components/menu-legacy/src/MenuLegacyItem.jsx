import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/eu-react-component-link';

export function MenuLegacyItem({ label, href, isCurrent, children }) {
  const classNames = classnames('ecl-menu-legacy__item', {
    'ecl-menu-legacy__item--current': isCurrent,
  });

  // Sub items
  let columnsMarkup = '';
  if (children && children.length > 0) {
    const columns = children.map((child) => {
      let subItemsMarkup = '';
      if (child.items && child.items.length > 0) {
        const subItemsArray = child.items.map((item) => {
          const subClassNames = classnames('ecl-menu-legacy__subitem', {
            'ecl-menu-legacy__subitem--current': isCurrent,
          });

          return (
            <li
              className={subClassNames}
              key={item.label}
              data-ecl-menu-legacy-subitem
            >
              <Link
                label={item.label}
                href={item.href}
                variant="standalone"
                className={classnames('ecl-menu-legacy__sublink', {
                  [`ecl-menu-legacy__sublink--current`]: item.isCurrent,
                })}
                data-ecl-menu-legacy-sublink
              />
            </li>
          );
        });

        subItemsMarkup = (
          <>
            {child.title && (
              <div className="ecl-menu-legacy__separator">{child.title}</div>
            )}
            <ul
              className="ecl-menu-legacy__sublist"
              data-ecl-menu-legacy-sublist
            >
              {subItemsArray}
            </ul>
          </>
        );
      }

      return (
        <div className="ecl-menu-legacy__column" key={child.items[0].label}>
          {subItemsMarkup}
        </div>
      );
    });

    columnsMarkup = (
      <div className="ecl-menu-legacy__mega" data-ecl-menu-legacy-mega>
        {columns}
      </div>
    );
  }

  return (
    <li
      className={classNames}
      data-ecl-has-children={columnsMarkup ? 'true' : 'false'}
      data-ecl-menu-legacy-item
    >
      <Link
        label={label}
        href={href}
        variant="standalone"
        className={classnames('ecl-menu-legacy__link', {
          [`ecl-menu-legacy__link--current`]: isCurrent,
        })}
        data-ecl-menu-legacy-link
        {...(columnsMarkup && {
          icon: {
            shape: 'ui--corner-arrow',
            size: 'xs',
            transform: 'rotate-180',
            className: 'ecl-menu-legacy__link-icon',
          },
        })}
      />

      {columnsMarkup}
    </li>
  );
}

MenuLegacyItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  isCurrent: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isCurrent: PropTypes.bool,
    })
  ),
};

MenuLegacyItem.defaultProps = {
  label: '',
  href: '',
  isCurrent: false,
  children: [],
};

export default MenuLegacyItem;
