/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const MenuItem = ({ label, href, isCurrent, children }) => {
  const classNames = classnames('ecl-menu__item', {
    'ecl-menu__item--current': isCurrent,
  });

  // Sub items
  let columnsMarkup = '';
  if (children && children.length > 0) {
    const columns = children.map(child => {
      let subItemsMarkup = '';
      if (child.items && child.items.length > 0) {
        const subItemsArray = child.items.map(item => {
          const subClassNames = classnames('ecl-menu__subitem', {
            'ecl-menu__subitem--current': isCurrent,
          });

          return (
            <li
              className={subClassNames}
              key={item.label}
              data-ecl-menu-subitem
            >
              <Link
                label={item.label}
                href={item.href}
                variant="standalone"
                className={classnames('ecl-menu__sublink', {
                  [`ecl-menu__sublink--current`]: item.isCurrent,
                })}
                data-ecl-menu-sublink
              />
            </li>
          );
        });

        subItemsMarkup = (
          <Fragment>
            {child.title && (
              <div className="ecl-menu__separator">{child.title}</div>
            )}
            <ul className="ecl-menu__sublist" data-ecl-menu-sublist>
              {subItemsArray}
            </ul>
          </Fragment>
        );
      }

      return (
        <div className="ecl-menu__column" key={child.items[0].label}>
          {subItemsMarkup}
        </div>
      );
    });

    columnsMarkup = (
      <div className="ecl-menu__mega" data-ecl-menu-mega>
        {columns}
      </div>
    );
  }

  return (
    <li
      className={classNames}
      data-ecl-has-children={columnsMarkup ? 'true' : 'false'}
      data-ecl-menu-item
    >
      <Link
        label={label}
        href={href}
        variant="standalone"
        className={classnames('ecl-menu__link', {
          [`ecl-menu__link--current`]: isCurrent,
        })}
        data-ecl-menu-link
        {...(columnsMarkup && {
          icon: {
            shape: 'ui--corner-arrow',
            size: 'xs',
            transform: 'rotate-180',
            className: 'ecl-menu__link-icon',
          },
        })}
      />

      {columnsMarkup}
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
      isCurrent: PropTypes.bool,
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
