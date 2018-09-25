import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const SiteSwitcher = ({ info, political, className, variant, ...props }) => {
  const classNames = classnames(className, 'ecl-site-switcher', {
    [`ecl-site-switcher--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        <ul className="ecl-site-switcher__list">
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': info.isSelected,
            })}
          >
            <Link {...info} className="ecl-site-switcher__link" />
          </li>
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': political.isSelected,
            })}
          >
            <Link {...political} className="ecl-site-switcher__link" />
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
  info: item,
  political: item,
  className: PropTypes.string,
  variant: PropTypes.string,
};

SiteSwitcher.defaultProps = {
  info: {
    label: '',
    href: '',
    isSelected: false,
  },
  political: {
    label: '',
    href: '',
    isSelected: false,
  },
  variant: '',
  className: '',
};

export default SiteSwitcher;
