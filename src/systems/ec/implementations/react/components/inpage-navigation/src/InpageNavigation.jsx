import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/ec-react-component-link';
import Icon from '@ecl/ec-react-component-icon';

export function InpageNavigation({ title, links, className, ...props }) {
  const classNames = classnames(className, 'ecl-inpage-navigation');
  return (
    <nav {...props} className={classNames} data-ecl-inpage-navigation>
      <div className="ecl-inpage-navigation__title">{title}</div>
      <div className="ecl-inpage-navigation__body">
        <button
          type="button"
          className="ecl-inpage-navigation__trigger"
          id="ecl-inpage-navigation-trigger"
          data-ecl-inpage-navigation-trigger
          aria-controls="ecl-inpage-navigation-list"
          aria-expanded="false"
        >
          <span
            className="ecl-inpage-navigation__trigger-current"
            data-ecl-inpage-navigation-trigger-current
          >
            &nbsp;
          </span>
          <Icon
            className="ecl-inpage-navigation__trigger-icon"
            shape="ui--corner-arrow"
            size="s"
            transform="rotate-180"
          />
        </button>
        <ul
          className="ecl-inpage-navigation__list"
          aria-labelledby="ecl-inpage-navigation-trigger"
          data-ecl-inpage-navigation-list
          id="ecl-inpage-navigation-list"
        >
          {links.map((link) => (
            <li key={link.label} className="ecl-inpage-navigation__item">
              <Link
                {...link}
                variant="standalone"
                className={classnames(
                  'ecl-inpage-navigation__link',
                  link.className
                )}
                data-ecl-inpage-navigation-link
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

InpageNavigation.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  title: PropTypes.string,
};

InpageNavigation.defaultProps = {
  className: '',
  links: [],
  title: 'Page contents',
};

export default InpageNavigation;
