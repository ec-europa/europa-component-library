/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';

export const MenuHarmonisedItem = ({ label, href, isCurrent, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li
      className={classnames('ecl-menu-harmonised__item', {
        'ecl-menu-harmonised__item--current': isCurrent,
      })}
      data-ecl-has-children={hasSubItems ? 'true' : 'false'}
      data-ecl-menu-harmonised-item
    >
      <a
        href={href}
        className={classnames('ecl-menu-harmonised__link', {
          [`ecl-menu-harmonised__link--current`]: isCurrent,
        })}
        data-ecl-menu-harmonised-link
      >
        {label}

        {hasSubItems && (
          <Icon
            shape="ui--corner-arrow"
            size="xs"
            transform="rotate-180"
            className="ecl-menu-harmonised__link-icon"
          />
        )}
      </a>

      {hasSubItems && (
        <div
          className="ecl-menu-harmonised__mega"
          data-ecl-menu-harmonised-mega
        >
          <ul className="ecl-menu-harmonised__sublist">
            {subItems.map(subItem => (
              <li
                className={classnames('ecl-menu-harmonised__subitem', {
                  'ecl-menu-harmonised__subitem--current': subItem.isCurrent,
                })}
                key={subItem.label}
              >
                <a
                  href={subItem.href}
                  className={classnames('ecl-menu-harmonised__sublink', {
                    [`ecl-menu-harmonised__sublink--current`]: subItem.isCurrent,
                  })}
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

MenuHarmonisedItem.propTypes = {
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

MenuHarmonisedItem.defaultProps = {
  label: '',
  href: '',
  isCurrent: false,
  subItems: [],
};

export default MenuHarmonisedItem;
