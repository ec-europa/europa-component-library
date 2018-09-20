/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const SiteSwitcher = ({ item1, item2, className, variant, ...props }) => {
  const classNames = classnames(className, 'ecl-site-switcher', {
    [`ecl-site-switcher--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        <ul className="ecl-site-switcher__list">
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': item1.isSelected,
            })}
          >
            <Link {...item1} className="ecl-site-switcher__link" />
          </li>
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': item2.isSelected,
            })}
          >
            <Link {...item2} className="ecl-site-switcher__link" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const item = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
});

SiteSwitcher.propTypes = {
  item1: item,
  item2: item,
  className: PropTypes.string,
  variant: PropTypes.string,
};

SiteSwitcher.defaultProps = {
  item1: {
    label: '',
    href: '',
    isSelected: false,
  },
  item2: {
    label: '',
    href: '',
    isSelected: false,
  },
  variant: 'header',
  className: '',
};

export default SiteSwitcher;
