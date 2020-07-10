import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';

export const MenuItem = ({ label, href, isCurrent, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li
      className={classnames('ecl-menu__item', {
        'ecl-menu__item--current': isCurrent,
      })}
      {...(hasSubItems && {
        'data-ecl-has-children': true,
      })}
      data-ecl-menu-item
    >
      <a
        href={href}
        className={classnames('ecl-menu__link', {
          [`ecl-menu__link--current`]: isCurrent,
        })}
        data-ecl-menu-link
      >
        {label}

        {hasSubItems && (
          <Icon
            shape="ui--corner-arrow"
            size="xs"
            transform="rotate-90"
            className="ecl-menu__link-icon"
          />
        )}
      </a>

      {hasSubItems && (
        <div className="ecl-menu__mega" data-ecl-menu-mega>
          <ul className="ecl-menu__sublist">
            {subItems.map((subItem) => (
              <li
                className={classnames('ecl-menu__subitem', {
                  'ecl-menu__subitem--current': subItem.isCurrent,
                })}
                key={subItem.label}
                data-ecl-menu-subitem
              >
                <a
                  href={subItem.href}
                  className={classnames('ecl-menu__sublink', {
                    [`ecl-menu__sublink--current`]: subItem.isCurrent,
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

MenuItem.propTypes = {
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

MenuItem.defaultProps = {
  label: '',
  href: '',
  isCurrent: false,
  subItems: [],
};

export default MenuItem;
