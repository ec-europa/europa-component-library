/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
            <a
              className="ecl-link ecl-site-switcher__link"
              href="../../example.html#"
            >
              {item1.label}
            </a>
          </li>
          <li
            className={classnames('ecl-site-switcher__option', {
              'ecl-site-switcher__option--is-selected': item2.isSelected,
            })}
          >
            <a
              className="ecl-link ecl-site-switcher__link"
              href="../../example.html#"
            >
              {item2.label}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

SiteSwitcher.propTypes = {
  item1: PropTypes.shape({
    label: PropTypes.string,
    className: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
  item2: PropTypes.shape({
    label: PropTypes.string,
    className: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
  className: PropTypes.string,
  variant: PropTypes.string,
};

SiteSwitcher.defaultProps = {
  item1: {
    label: 'Commission and its priorities',
    isSelected: false,
  },
  item2: {
    label: 'Policies, information and services',
    isSelected: true,
  },
  variant: 'header',
  className: '',
};

export default SiteSwitcher;
