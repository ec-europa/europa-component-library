/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/ec-react-component-link';

export const MenuStandardisedItem = ({ label, href, isCurrent, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li
      className={classnames('ecl-menu-standardised__item', {
        'ecl-menu-standardised__item--current': isCurrent,
      })}
      data-ecl-has-children={hasSubItems ? 'true' : 'false'}
      data-ecl-menu-standardised-item
    >
      <Link
        label={label}
        href={href}
        variant="standalone"
        className={classnames('ecl-menu-standardised__link', {
          [`ecl-menu-standardised__link--current`]: isCurrent,
        })}
        data-ecl-menu-standardised-link
        {...(hasSubItems && {
          icon: {
            shape: 'ui--corner-arrow',
            size: 's',
            transform: 'rotate-180',
            className: 'ecl-menu-standardised__link-icon',
          },
        })}
      />

      {hasSubItems && (
        <div
          className="ecl-menu-standardised__mega"
          data-ecl-menu-standardised-mega
        >
          <ul className="ecl-menu-standardised__sublist">
            {subItems.map(subItem => (
              <li
                className={classnames('ecl-menu-standardised__subitem', {
                  'ecl-menu-standardised__subitem--current': subItem.isCurrent,
                })}
                key={subItem.label}
              >
                <Link
                  label={subItem.label}
                  href={subItem.href}
                  variant="standalone"
                  className={classnames('ecl-menu-standardised__sublink', {
                    [`ecl-menu-standardised__sublink--current`]: subItem.isCurrent,
                  })}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

MenuStandardisedItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  isCurrent: PropTypes.bool,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isCurrent: PropTypes.bool,
    })
  ),
};

MenuStandardisedItem.defaultProps = {
  label: '',
  href: '',
  isCurrent: false,
  subItems: [],
};

export default MenuStandardisedItem;
