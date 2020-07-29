import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';
import Icon from '@ecl/ec-react-component-icon';

import { MenuItem } from './MenuItem';

export const Menu = ({
  siteName,
  menuLink,
  close,
  title,
  back,
  items,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-menu');

  return (
    <nav {...props} className={classNames} aria-expanded="false" data-ecl-menu>
      <div className="ecl-menu__overlay" data-ecl-menu-overlay />
      <div className="ecl-container ecl-menu__container">
        {/* Open menu */}
        <a
          className="ecl-link ecl-link--standalone ecl-menu__open"
          href={menuLink}
          data-ecl-menu-open
        >
          <Icon shape="general--hamburger" size="s" />
          {title}
        </a>
        {/* Site name */}
        {siteName && <div className="ecl-menu__site-name">{siteName}</div>}

        <section className="ecl-menu__inner" data-ecl-menu-inner>
          <header className="ecl-menu__inner-header">
            {/* Close menu */}
            <Button
              className="ecl-menu__close"
              containerClassName="ecl-menu__close-container"
              label={close}
              icon={{
                shape: 'ui--close-filled',
                size: 's',
              }}
              iconPosition="before"
              variant="text"
              data-ecl-menu-close
            />
            {/* Overlay header */}
            <div className="ecl-menu__title">{title}</div>
            <Button
              className="ecl-menu__back"
              label={back}
              icon={{
                shape: 'ui--corner-arrow',
                size: 's',
                transform: 'rotate-270',
              }}
              iconPosition="before"
              variant="text"
              data-ecl-menu-back
            />
          </header>
          {/* Menu items */}
          <ul className="ecl-menu__list">
            {items.map((item) => (
              <MenuItem {...item} key={item.label} />
            ))}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Menu;

Menu.propTypes = {
  siteName: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(MenuItem.propTypes)).isRequired,
  menuLink: PropTypes.string,
  className: PropTypes.string,
};

Menu.defaultProps = {
  menuLink: '',
  className: '',
};
