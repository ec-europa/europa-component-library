import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button';
import Link from '@ecl/eu-react-component-link';

function ContextualNavigation({
  label,
  itemMore,
  itemsLimit,
  items,
  onMore,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-contextual-navigation');

  const itemMoreMarkup = (
    <li className="ecl-contextual-navigation__item ecl-contextual-navigation__item--more">
      <Button
        {...itemMore}
        className={classnames(
          itemMore.className,
          'ecl-contextual-navigation__more'
        )}
        data-ecl-contextual-navigation-more
        onClick={onMore}
        type="button"
      />
    </li>
  );

  return (
    <nav {...props} className={classNames} data-ecl-contextual-navigation>
      <div className="ecl-contextual-navigation__label">{label}</div>
      <ul
        className="ecl-contextual-navigation__list"
        data-ecl-contextual-navigation-list
      >
        {items.map((item, index) => (
          <li
            className={classnames(
              item.className,
              'ecl-contextual-navigation__item',
              {
                'ecl-contextual-navigation__item--collapsed':
                  index >= itemsLimit,
              }
            )}
            key={item.label}
          >
            <Link
              {...item}
              className={classnames(
                item.className,
                'ecl-contextual-navigation__link'
              )}
            />
          </li>
        ))}
        {items.length > itemsLimit && itemMoreMarkup}
      </ul>
    </nav>
  );
}

ContextualNavigation.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  itemsLimit: PropTypes.number,
  itemMore: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
  onMore: PropTypes.func,
};

ContextualNavigation.defaultProps = {
  label: '',
  items: [],
  itemsLimit: 3,
  itemMore: {},
  className: '',
  onMore: () => {},
};

export default ContextualNavigation;
