import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';
import ListItem from './ListItem';

const List = ({
  title,
  items,
  isOrdered,
  hasBullet,
  hasSeparator,
  className,
  ...props
}) => {
  // Title
  let titleMarkup = '';
  if (title && title.label) {
    const TitleTag = `h${title.level || 1}`;
    if (title.href) {
      titleMarkup = (
        <TitleTag className="ecl-list__title">
          <Link label={title.label} href={title.href} variant="standalone" />
        </TitleTag>
      );
    } else {
      titleMarkup = (
        <TitleTag className="ecl-list__title">{title.label}</TitleTag>
      );
    }
  }

  // Check if there are several link groups
  let itemsMarkup = '';
  if (items && Array.isArray(items)) {
    itemsMarkup = items.map(item => {
      if (Array.isArray(item)) {
        return (
          <li
            className="ecl-list__item ecl-list__item--group"
            key={item.title ? item.title.label : item.label || item}
          >
            <ul className="ecl-list__group">
              {item.map(i => (
                <ListItem
                  key={i.title ? i.title.label : i.label || item}
                  item={i}
                />
              ))}
            </ul>
          </li>
        );
      }

      return (
        <ListItem
          key={item.title ? item.title.label : item.label || item}
          item={item}
        />
      );
    });
  }

  // Container
  let listMarkup = '';
  const ListTag = isOrdered ? 'ol' : 'ul';
  const listClass = classnames(className, 'ecl-list', {
    'ecl-list--no-bullet': !hasBullet,
    'ecl-list--separator': hasSeparator,
  });
  if (titleMarkup) {
    listMarkup = (
      <div className="ecl-list__container">
        {titleMarkup}
        <ListTag {...props} className={listClass}>
          {itemsMarkup}
        </ListTag>
      </div>
    );
  } else {
    listMarkup = (
      <ListTag {...props} className={listClass}>
        {itemsMarkup}
      </ListTag>
    );
  }

  return { ...listMarkup };
};

List.propTypes = {
  title: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    level: PropTypes.number,
  }),
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes))),
  ]).isRequired,
  isOrdered: PropTypes.bool,
  hasBullet: PropTypes.bool,
  hasSeparator: PropTypes.bool,
  className: PropTypes.string,
};

List.defaultProps = {
  title: {},
  isOrdered: false,
  hasBullet: true,
  hasSeparator: false,
  className: '',
};

export default List;
