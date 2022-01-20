import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

function SiteSwitcher({ info, political, className, variant, ...props }) {
  const classNames = classnames(className, 'ecl-site-switcher', {
    [`ecl-site-switcher--${variant}`]: variant,
  });

  const { isSelected: isInfoSelected, ...infoProps } = info;
  const { isSelected: isPoliticalSelected, ...politicalProps } = political;

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container ecl-site-switcher__container">
        <ul className="ecl-site-switcher__list">
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': isInfoSelected,
            })}
          >
            <Link {...infoProps} className="ecl-site-switcher__link" />
          </li>
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': isPoliticalSelected,
            })}
          >
            <Link {...politicalProps} className="ecl-site-switcher__link" />
          </li>
        </ul>
      </div>
    </div>
  );
}

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
